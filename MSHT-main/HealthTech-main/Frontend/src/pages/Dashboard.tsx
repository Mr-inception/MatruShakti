
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Heart, Baby, BriefcaseMedical, MessageSquare, CircleCheck } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Pregnancy Dashboard</h1>
              <p className="text-gray-600">Track your journey and access resources</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-matru-primary hover:bg-matru-secondary">Update Profile</Button>
            </div>
          </div>
          
          {/* Pregnancy Progress Card */}
          <Card className="mb-8 border-matru-primary/20">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center">
                <Baby className="h-5 w-5 text-matru-primary mr-2" />
                Pregnancy Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Week 24</h3>
                  <p className="text-gray-600">Second Trimester</p>
                </div>
                <div className="mt-2 md:mt-0 bg-matru-primary/10 px-4 py-2 rounded-full">
                  <p className="text-sm">
                    <span className="font-semibold">Due Date:</span> October 15, 2024
                  </p>
                </div>
              </div>
              
              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm font-medium">60%</span>
              </div>
              <Progress value={60} className="h-2 bg-gray-100" />
              
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-matru-blue/20 rounded-lg">
                  <p className="text-xs text-gray-600">Baby Size</p>
                  <p className="font-semibold mt-1">Corn 🌽</p>
                </div>
                <div className="p-3 bg-matru-accent/30 rounded-lg">
                  <p className="text-xs text-gray-600">Weight</p>
                  <p className="font-semibold mt-1">1.3 lbs</p>
                </div>
                <div className="p-3 bg-matru-light/30 rounded-lg">
                  <p className="text-xs text-gray-600">Length</p>
                  <p className="font-semibold mt-1">30 cm</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Upcoming Appointments */}
            <Card className="border-matru-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="h-5 w-5 text-matru-primary mr-2" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-matru-blue/10 rounded-lg">
                    <p className="font-medium">Routine Checkup</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-sm text-gray-600">Dr. Sharma</p>
                      <p className="text-sm text-matru-primary font-medium">May 25</p>
                    </div>
                  </div>
                  <div className="p-3 bg-matru-blue/10 rounded-lg">
                    <p className="font-medium">Ultrasound Scan</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-sm text-gray-600">Dr. Patel</p>
                      <p className="text-sm text-matru-primary font-medium">June 10</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full text-matru-primary hover:bg-matru-primary/10">
                    Schedule New Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Health Metrics */}
            <Card className="border-matru-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Heart className="h-5 w-5 text-matru-primary mr-2" />
                  Health Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Blood Pressure</p>
                      <p className="font-medium">120/80 mmHg</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full">Normal</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Weight Gain</p>
                      <p className="font-medium">5.2 kg</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full">Healthy</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Blood Sugar</p>
                      <p className="font-medium">98 mg/dL</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full">Normal</div>
                  </div>
                  <Button variant="ghost" className="w-full text-matru-primary hover:bg-matru-primary/10">
                    Add New Reading
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Government Benefits */}
            <Card className="border-matru-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <BriefcaseMedical className="h-5 w-5 text-matru-primary mr-2" />
                  Government Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-matru-accent/20 rounded-lg flex items-start space-x-3">
                    <CircleCheck className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">PMMVY</p>
                      <p className="text-sm text-gray-600">₹5,000 - First installment received</p>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-100 rounded-lg flex items-start space-x-3">
                    <div className="h-5 w-5 border-2 border-gray-400 rounded-full mt-0.5"></div>
                    <div>
                      <p className="font-medium">JSY</p>
                      <p className="text-sm text-gray-600">₹1,400 - Apply after 32 weeks</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full text-matru-primary hover:bg-matru-primary/10">
                    Check Eligibility
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Tab Section */}
          <Tabs defaultValue="wellness" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            <TabsContent value="wellness" className="space-y-4">
              <Card className="border-matru-primary/20">
                <CardHeader>
                  <CardTitle>Daily Wellness Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-matru-blue/10 rounded-lg">
                      <h3 className="font-medium mb-2">Nutrition Tip</h3>
                      <p className="text-gray-600">Include iron-rich foods like spinach, lentils, and fortified cereals to support your baby's growth and prevent anemia.</p>
                    </div>
                    <div className="p-4 bg-matru-accent/20 rounded-lg">
                      <h3 className="font-medium mb-2">Exercise Suggestion</h3>
                      <p className="text-gray-600">Try gentle pregnancy yoga to relieve back pain and improve flexibility. 20 minutes daily is recommended.</p>
                    </div>
                    <div className="p-4 bg-matru-light/20 rounded-lg">
                      <h3 className="font-medium mb-2">Mental Wellness</h3>
                      <p className="text-gray-600">Practice 10 minutes of mindful breathing today to reduce stress and improve sleep quality.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="education" className="space-y-4">
              <Card className="border-matru-primary/20">
                <CardHeader>
                  <CardTitle>Weekly Educational Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium mb-2">What's happening in Week 24</h3>
                      <p className="text-gray-600 mb-3">Your baby's face is almost fully formed, and they're developing taste buds. They can hear your voice and may respond to it.</p>
                      <Button variant="outline" className="text-matru-primary border-matru-primary hover:bg-matru-primary/10">
                        Read More
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h3 className="font-medium mb-2">Preparing for Labor</h3>
                        <p className="text-gray-600 text-sm mb-3">Essential tips and techniques to prepare for a smooth delivery experience.</p>
                        <Button size="sm" variant="outline" className="text-matru-primary border-matru-primary hover:bg-matru-primary/10">
                          Watch Video
                        </Button>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h3 className="font-medium mb-2">Nursery Essentials</h3>
                        <p className="text-gray-600 text-sm mb-3">A complete guide to setting up a safe and comfortable space for your baby.</p>
                        <Button size="sm" variant="outline" className="text-matru-primary border-matru-primary hover:bg-matru-primary/10">
                          Read Article
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="community" className="space-y-4">
              <Card className="border-matru-primary/20">
                <CardHeader>
                  <CardTitle>Community Discussions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">Dealing with pregnancy insomnia</h3>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                      </div>
                      <p className="text-gray-600 mb-2">Anyone else struggling with sleep in the second trimester? I've tried everything but can't seem to get comfortable...</p>
                      <div className="flex justify-between">
                        <span className="text-xs text-gray-500">23 replies</span>
                        <Button size="sm" variant="ghost" className="text-matru-primary hover:bg-matru-primary/10">
                          Join Discussion
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">Second-time moms support group</h3>
                        <span className="text-xs text-gray-500">1 day ago</span>
                      </div>
                      <p className="text-gray-600 mb-2">A dedicated space for moms who are on their second pregnancy journey. Share experiences and advice...</p>
                      <div className="flex justify-between">
                        <span className="text-xs text-gray-500">47 members</span>
                        <Button size="sm" variant="ghost" className="text-matru-primary hover:bg-matru-primary/10">
                          Join Group
                        </Button>
                      </div>
                    </div>
                    <Button className="w-full bg-matru-primary hover:bg-matru-secondary">
                      View All Community Discussions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
