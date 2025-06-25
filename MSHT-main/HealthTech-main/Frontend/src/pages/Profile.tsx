import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const userTypes = [
  { label: 'User', value: 'user' },
  { label: 'Caregiver', value: 'caregiver' },
  { label: 'ASHA', value: 'asha' },
];

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ fullName: '', userType: '', profileDescription: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('matruUser');
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed);
      setForm({
        fullName: parsed.fullName || '',
        userType: parsed.userType || '',
        profileDescription: parsed.profileDescription || '',
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('matruUser');
    navigate('/');
  };

  const handleEdit = () => setEditing(true);
  const handleCancel = () => setEditing(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, ...form };
    setUser(updatedUser);
    localStorage.setItem('matruUser', JSON.stringify(updatedUser));
    setEditing(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center text-lg">You are not logged in.</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-8">
        <Card className="max-w-md w-full mx-auto shadow-lg border-matru-primary/20">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-matru-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                {(user.fullName ? user.fullName.charAt(0) : user.email.charAt(0)).toUpperCase()}
              </div>
              <div>
                <div className="font-bold text-xl">{user.fullName || 'No Name'}</div>
                <div className="text-gray-500">{user.email}</div>
              </div>
            </div>
            {editing ? (
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="font-semibold block mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">User Type</label>
                  <select
                    name="userType"
                    value={form.userType}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  >
                    <option value="">Select user type</option>
                    {userTypes.map((ut) => (
                      <option key={ut.value} value={ut.value}>{ut.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-semibold block mb-1">Profile Description</label>
                  <textarea
                    name="profileDescription"
                    value={form.profileDescription}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                    rows={3}
                  />
                </div>
                <div className="flex space-x-2">
                  <Button type="submit" className="bg-matru-primary hover:bg-matru-secondary w-full">Save</Button>
                  <Button type="button" variant="outline" className="w-full" onClick={handleCancel}>Cancel</Button>
                </div>
              </form>
            ) : (
              <>
                <div>
                  <div className="font-semibold">User Type:</div>
                  <div className="text-gray-700">{user.userType || 'N/A'}</div>
                </div>
                <div>
                  <div className="font-semibold">Profile Description:</div>
                  <div className="text-gray-700">{user.profileDescription || 'N/A'}</div>
                </div>
                <Button className="w-full bg-matru-primary hover:bg-matru-secondary" onClick={handleEdit}>
                  Update Profile
                </Button>
                <Button className="w-full mt-2" variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Profile; 