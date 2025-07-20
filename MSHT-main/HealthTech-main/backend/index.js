const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();

// CORS configuration
const allowedOrigins = [
  process.env.FRONTEND_URL || 'https://matru-shaktii.vercel.app',
  'http://localhost:3000',
  'http://localhost:8080'
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.options('*', cors()); // Enable pre-flight for all routes
app.use(express.json());

// Debug logging
console.log('Current working directory:', process.cwd());
console.log('__dirname:', __dirname);

try {
  const fs = require('fs');
  const files = fs.readdirSync(__dirname);
  console.log('Files in current directory:', files);
} catch (err) {
  console.log('Error reading directory:', err);
}

// Register health assistant routes with error handling
try {
  console.log('Attempting to require ./healthAssistant');
  const healthAssistantRoutes = require('./healthAssistant');
  app.use('/api', healthAssistantRoutes);
  console.log('Successfully required healthAssistant');
} catch (error) {
  console.error('Error requiring healthAssistant:', error);
}

// Register MedicLocker routes with error handling
try {
  console.log('Attempting to require ./mediclocker');
  const mediclockerRoutes = require('./mediclocker');
  app.use('/api', mediclockerRoutes);
  console.log('Successfully required mediclocker');
} catch (error) {
  console.error('Error requiring mediclocker:', error);
}

// Register Documents routes with error handling
try {
  console.log('Attempting to require ./Documents');
  const documentsRoutes = require('./Documents');
  app.use('/api', documentsRoutes);
  console.log('Successfully required Documents');
} catch (error) {
  console.error('Error requiring Documents:', error);
}

// Use the URL from the environment variable
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

const postSchema = new mongoose.Schema({
  category: String,
  title: String,
  author: String,
  date: String,
  content: String,
  likes: Number,
  replies: Number,
  verified: Boolean,
  isExpert: Boolean,
});

const Post = mongoose.model('Post', postSchema);

// User schema and model
const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  userType: String,
  profileDescription: String,
});

// Hash password before saving user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model('User', userSchema);

// Get all posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ _id: -1 });
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Error fetching posts' });
  }
});

// Add a new post
app.post('/posts', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Error creating post' });
  }
});

app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed', error });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '7d' }
    );
    res.json({ 
      token, 
      user: { 
        email: user.email, 
        fullName: user.fullName, 
        userType: user.userType, 
        profileDescription: user.profileDescription 
      } 
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

// Export the Express app for serverless (e.g., Vercel) environments.
module.exports = app;

// Only start the server when this file is executed directly (local development)
if (require.main === module) {
  const PORT = process.env.PORT || 4001;
  app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
}