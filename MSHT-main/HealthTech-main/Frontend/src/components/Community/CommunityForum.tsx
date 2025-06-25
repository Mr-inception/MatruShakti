<<<<<<< HEAD

import { useState } from 'react';
=======
import { useEffect, useState } from 'react';
>>>>>>> c6bea3b (Initial commit)
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Heart, User, Calendar } from 'lucide-react';

<<<<<<< HEAD
// Sample forum posts
const initialPosts = [
  {
    id: 1,
    category: 'discussions',
    title: 'Managing back pain in third trimester',
    author: 'Priya S.',
    date: '2 days ago',
    content: 'I\'m in my 32nd week and experiencing severe back pain, especially when sitting for long periods. Has anyone found effective relief methods that worked for them?',
    likes: 24,
    replies: 8,
    verified: true,
  },
  {
    id: 2,
    category: 'questions',
    title: 'How to apply for JSY benefits?',
    author: 'Meera K.',
    date: '1 week ago',
    content: 'I\'m in my second trimester and want to apply for Janani Suraksha Yojana benefits. Can someone guide me through the process and documents needed?',
    likes: 17,
    replies: 12,
    verified: true,
  },
  {
    id: 3,
    category: 'stories',
    title: 'My journey through hyperemesis gravidarum',
    author: 'Deepa R.',
    date: '2 weeks ago',
    content: 'I struggled with severe morning sickness throughout my first trimester. Here\'s how I managed it and what support from doctors helped me through this challenging time.',
    likes: 45,
    replies: 15,
    verified: true,
  },
  {
    id: 4,
    category: 'experts',
    title: 'Understanding prenatal nutrition requirements',
    author: 'Dr. Anjali P.',
    date: '3 days ago',
    content: 'As a nutritionist specializing in maternal health, I\'d like to share key insights about essential nutrients during pregnancy and practical ways to incorporate them into your diet.',
    likes: 67,
    replies: 23,
    verified: true,
    isExpert: true,
  },
  {
    id: 5,
    category: 'discussions',
    title: 'Best pregnancy apps you\'re using?',
    author: 'Lata M.',
    date: '5 days ago',
    content: 'I\'m looking for recommendations on apps that help track pregnancy progress, provide useful information, and maybe connect with other moms. What are you all using?',
    likes: 31,
    replies: 18,
    verified: true,
  },
  {
    id: 6,
    category: 'experts',
    title: 'COVID vaccination during pregnancy - Facts & myths',
    author: 'Dr. Sanjay V.',
    date: '1 week ago',
    content: 'As an obstetrician, I\'ve been receiving many questions about COVID vaccination during pregnancy. Let me address the common concerns and provide evidence-based information.',
    likes: 89,
    replies: 34,
    verified: true,
    isExpert: true,
  },
];
=======
const BACKEND_URL = 'http://localhost:4000';
>>>>>>> c6bea3b (Initial commit)

const CommunityForum = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [searchTerm, setSearchTerm] = useState('');
<<<<<<< HEAD
  const [posts, setPosts] = useState(initialPosts);
=======
  const [posts, setPosts] = useState<any[]>([]);
>>>>>>> c6bea3b (Initial commit)
  const [newPostVisible, setNewPostVisible] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
  });

<<<<<<< HEAD
  const handleLikePost = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleNewPostSubmit = (e: React.FormEvent) => {
=======
  // Fetch posts from backend on mount
  useEffect(() => {
    fetch(`${BACKEND_URL}/posts`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  // Like post (local only)
  const handleLikePost = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post._id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
    // Optionally, send a PATCH/PUT to backend to persist likes
  };

  // Submit new post to backend
  const handleNewPostSubmit = async (e: React.FormEvent) => {
>>>>>>> c6bea3b (Initial commit)
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.content.trim()) return;

    const post = {
<<<<<<< HEAD
      id: posts.length + 1,
      category: activeTab,
      title: newPost.title,
      author: 'You',
      date: 'Just now',
=======
      category: activeTab,
      title: newPost.title,
      author: 'You',
      date: new Date().toLocaleDateString(),
>>>>>>> c6bea3b (Initial commit)
      content: newPost.content,
      likes: 0,
      replies: 0,
      verified: true,
    };

<<<<<<< HEAD
    setPosts([post, ...posts]);
=======
    const res = await fetch(`${BACKEND_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    const savedPost = await res.json();
    setPosts([savedPost, ...posts]);
>>>>>>> c6bea3b (Initial commit)
    setNewPost({ title: '', content: '' });
    setNewPostVisible(false);
  };

  // Filter posts based on search term and active tab
  const filteredPosts = posts.filter(
    (post) =>
      (post.category === activeTab || activeTab === 'all') &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-6 w-6 text-matru-primary" />
          <h2 className="text-2xl font-bold">Community Forum</h2>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
          <Input
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="matru-input"
          />
          <Button 
            onClick={() => setNewPostVisible(!newPostVisible)}
            className="bg-matru-primary hover:bg-matru-secondary"
          >
            {newPostVisible ? 'Cancel' : 'New Post'}
          </Button>
        </div>
      </div>

      {newPostVisible && (
        <Card className="mb-8 border-matru-primary/20 animate-fade-in">
          <CardHeader>
            <CardTitle>Create New Post</CardTitle>
          </CardHeader>
          <form onSubmit={handleNewPostSubmit}>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <Input
                  id="title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  placeholder="Post title"
                  className="matru-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <Textarea
                  id="content"
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  placeholder="Share your thoughts, questions, or experiences..."
                  className="matru-input"
                  rows={5}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setNewPostVisible(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-matru-primary hover:bg-matru-secondary">
                Post
              </Button>
            </CardFooter>
          </form>
        </Card>
      )}

      <Tabs defaultValue="discussions" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="stories">Stories</TabsTrigger>
          <TabsTrigger value="experts">Expert Advice</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {renderPosts(filteredPosts, handleLikePost)}
        </TabsContent>
        <TabsContent value="discussions" className="space-y-6">
          {renderPosts(filteredPosts, handleLikePost)}
        </TabsContent>
        <TabsContent value="questions" className="space-y-6">
          {renderPosts(filteredPosts, handleLikePost)}
        </TabsContent>
        <TabsContent value="stories" className="space-y-6">
          {renderPosts(filteredPosts, handleLikePost)}
        </TabsContent>
        <TabsContent value="experts" className="space-y-6">
          {renderPosts(filteredPosts, handleLikePost)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Helper function to render posts
<<<<<<< HEAD
function renderPosts(posts: any[], handleLikePost: (id: number) => void) {
=======
function renderPosts(posts: any[], handleLikePost: (id: string) => void) {
>>>>>>> c6bea3b (Initial commit)
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <MessageSquare className="h-12 w-12 text-gray-300 mx-auto" />
        <h3 className="mt-4 text-lg font-medium text-gray-600">No posts found</h3>
        <p className="text-gray-500">Be the first to start a discussion!</p>
      </div>
    );
  }

  return posts.map((post) => (
<<<<<<< HEAD
    <Card key={post.id} className="border-matru-primary/10 hover:border-matru-primary/30 transition-colors">
=======
    <Card key={post._id} className="border-matru-primary/10 hover:border-matru-primary/30 transition-colors">
>>>>>>> c6bea3b (Initial commit)
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{post.title}</CardTitle>
          <div className="flex items-center space-x-1">
            {post.isExpert && (
              <span className="bg-matru-primary text-white text-xs px-2 py-1 rounded-full">
                Expert
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{post.date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{post.content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex space-x-4 text-sm text-gray-500">
          <button
<<<<<<< HEAD
            onClick={() => handleLikePost(post.id)}
=======
            onClick={() => handleLikePost(post._id)}
>>>>>>> c6bea3b (Initial commit)
            className="flex items-center space-x-1 hover:text-matru-primary transition-colors"
          >
            <Heart className="h-4 w-4" />
            <span>{post.likes}</span>
          </button>
          <div className="flex items-center space-x-1">
            <MessageSquare className="h-4 w-4" />
            <span>{post.replies} replies</span>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          View Discussion
        </Button>
      </CardFooter>
    </Card>
  ));
}

export default CommunityForum;
