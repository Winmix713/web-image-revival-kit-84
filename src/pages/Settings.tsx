
import React from 'react';
import { Settings as SettingsIcon, User, Bell, Lock, Globe, Brush, Database, HelpCircle, Info } from 'lucide-react';
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import ContentCard from "@/components/common/ContentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const Settings = () => {
  const handleSave = () => {
    toast.success("Settings saved", {
      description: "Your changes have been saved successfully"
    });
  };

  return (
    <AppLayout backgroundVariant="subtle">
      <PageHeader 
        title="Settings"
        description="Configure your application preferences and account settings"
        icon={SettingsIcon}
        variant="gradient"
      />

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mb-8">
        <div className="lg:col-span-1">
          <ContentCard variant="glass" animationDelay={100} className="sticky top-20">
            <div className="space-y-1">
              <SettingsNavItem icon={User} label="Profile" isActive />
              <SettingsNavItem icon={Bell} label="Notifications" />
              <SettingsNavItem icon={Lock} label="Security" />
              <SettingsNavItem icon={Globe} label="Language" />
              <SettingsNavItem icon={Brush} label="Appearance" />
              <SettingsNavItem icon={Database} label="Data" />
              <SettingsNavItem icon={HelpCircle} label="Help" />
              <SettingsNavItem icon={Info} label="About" />
            </div>
          </ContentCard>
        </div>
        
        <div className="lg:col-span-5 space-y-6">
          <Tabs defaultValue="profile">
            <TabsList className="bg-white/5 border border-white/10">
              <TabsTrigger 
                value="profile"
                className="data-[state=active]:bg-[#3a36e0] data-[state=active]:text-white"
              >
                General
              </TabsTrigger>
              <TabsTrigger 
                value="account" 
                className="data-[state=active]:bg-[#3a36e0] data-[state=active]:text-white"
              >
                Account Details
              </TabsTrigger>
              <TabsTrigger 
                value="password" 
                className="data-[state=active]:bg-[#3a36e0] data-[state=active]:text-white"
              >
                Password
              </TabsTrigger>
              <TabsTrigger 
                value="api" 
                className="data-[state=active]:bg-[#3a36e0] data-[state=active]:text-white"
              >
                API Keys
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="mt-4 space-y-6">
              <ContentCard variant="glass" animationDelay={200}>
                <h3 className="text-lg font-semibold text-white mb-4">Profile Settings</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                    <Input 
                      defaultValue="John" 
                      className="bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/30" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
                    <Input 
                      defaultValue="Doe" 
                      className="bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/30" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                    <Input 
                      type="email" 
                      defaultValue="john.doe@example.com" 
                      className="bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/30" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
                    <Input 
                      defaultValue="johndoe" 
                      className="bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/30" 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-1">Bio</label>
                  <textarea 
                    rows={4} 
                    className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30"
                    defaultValue="Sports enthusiast and analytics professional."
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button className="btn-primary-glow" onClick={handleSave}>
                    Save Changes
                  </Button>
                </div>
              </ContentCard>
              
              <ContentCard variant="glass" animationDelay={300}>
                <h3 className="text-lg font-semibold text-white mb-4">Preferences</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="theme" defaultChecked />
                    <div>
                      <label htmlFor="theme" className="text-sm font-medium text-white cursor-pointer">Dark Theme</label>
                      <p className="text-xs text-gray-400">Use dark theme across the application</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox id="notifications" defaultChecked />
                    <div>
                      <label htmlFor="notifications" className="text-sm font-medium text-white cursor-pointer">Desktop Notifications</label>
                      <p className="text-xs text-gray-400">Receive notifications for important events</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox id="analytics" defaultChecked />
                    <div>
                      <label htmlFor="analytics" className="text-sm font-medium text-white cursor-pointer">Analytics Collection</label>
                      <p className="text-xs text-gray-400">Help us improve by sharing usage data</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button className="btn-primary-glow" onClick={handleSave}>
                    Save Preferences
                  </Button>
                </div>
              </ContentCard>
            </TabsContent>
            
            <TabsContent value="account" className="mt-4">
              <ContentCard variant="glass" animationDelay={200}>
                <h3 className="text-lg font-semibold text-white mb-4">Account Details</h3>
                <p className="text-gray-400 mb-6">Manage your account information and linked services.</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-md font-medium text-white mb-3">Connected Accounts</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                            <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="currentColor" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Facebook</div>
                            <div className="text-xs text-gray-400">Connected</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="bg-white/5 border-white/10">
                          Disconnect
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                            <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Twitter</div>
                            <div className="text-xs text-gray-400">Not connected</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="bg-white/5 border-white/10">
                          Connect
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                            <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.0001 2C6.47715 2 2.00001 6.47714 2.00001 12C2.00001 17.5228 6.47715 22 12.0001 22C17.5229 22 22.0001 17.5228 22.0001 12C22.0001 6.47714 17.5229 2 12.0001 2ZM8.88856 7.04219C9.51608 7.03257 9.73116 7.31168 10.1702 8.20232L11.171 10.2013L12.1729 8.20232C12.6119 7.31172 12.8269 7.03257 13.4544 7.04219C13.6809 7.04219 13.9057 7.13979 14.0795 7.31441C14.2533 7.48906 14.3548 7.71875 14.3548 7.9557C14.3548 8.19266 14.2731 8.43219 14.13 8.67453L12.6163 11.4551L14.3548 14.6859C14.4979 14.9283 14.5796 15.1678 14.5796 15.3951C14.5796 15.6417 14.4782 15.8667 14.2947 16.0413C14.1209 16.2159 13.9057 16.3135 13.6793 16.3135C13.2993 16.3135 12.9981 16.1291 12.7908 15.7417L11.171 13.0899L9.56016 15.7417C9.34324 16.1291 9.04204 16.3135 8.67178 16.3135C8.43524 16.3135 8.2152 16.2159 8.03172 16.0413C7.85786 15.8667 7.7564 15.6417 7.7564 15.3951C7.7564 15.158 7.82844 14.9284 7.97196 14.6859L9.72016 11.4648L8.20646 8.67453C8.05332 8.43219 8.00089 8.19266 8.00089 7.9557C8.00089 7.72356 8.0834 7.48906 8.25724 7.31441C8.4407 7.13979 8.66558 7.04219 8.88856 7.04219Z" fill="currentColor" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Discord</div>
                            <div className="text-xs text-gray-400">Connected</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="bg-white/5 border-white/10">
                          Disconnect
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-6 bg-white/10" />
                  
                  <div>
                    <h4 className="text-md font-medium text-white mb-3">Danger Zone</h4>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h5 className="text-sm font-medium text-red-400 mb-2">Delete Account</h5>
                      <p className="text-xs text-gray-400 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <Button variant="outline" size="sm" className="bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </ContentCard>
            </TabsContent>
            
            <TabsContent value="password" className="mt-4">
              <ContentCard variant="glass" animationDelay={200}>
                <h3 className="text-lg font-semibold text-white mb-4">Change Password</h3>
                <p className="text-gray-400 mb-6">Ensure your account is using a strong password for security.</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Current Password</label>
                    <Input 
                      type="password" 
                      className="bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/30" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">New Password</label>
                    <Input 
                      type="password" 
                      className="bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/30" 
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Confirm New Password</label>
                    <Input 
                      type="password" 
                      className="bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/30" 
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button className="btn-primary-glow" onClick={handleSave}>
                    Update Password
                  </Button>
                </div>
              </ContentCard>
            </TabsContent>
            
            <TabsContent value="api" className="mt-4">
              <ContentCard variant="glass" animationDelay={200}>
                <h3 className="text-lg font-semibold text-white mb-4">API Keys</h3>
                <p className="text-gray-400 mb-6">Manage your API keys for external integrations.</p>
                
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm font-medium text-white">Primary API Key</div>
                        <div className="text-xs text-gray-400">Created on Jan 15, 2023</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-white/5 border-white/10">
                        Regenerate
                      </Button>
                    </div>
                    <div className="bg-white/10 rounded p-3 font-mono text-sm text-gray-300 break-all">
                      43f6x72a-e8b2-410c-86f8-cb4fd23cb120
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm font-medium text-white">Secondary API Key</div>
                        <div className="text-xs text-gray-400">Created on Mar 22, 2023</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-white/5 border-white/10">
                        Regenerate
                      </Button>
                    </div>
                    <div className="bg-white/10 rounded p-3 font-mono text-sm text-gray-300 break-all">
                      87c9d54b-f3a1-42e7-91b3-7e892f5a3c88
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white">
                    <Plus className="h-4 w-4" />
                    Create New API Key
                  </Button>
                </div>
              </ContentCard>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

const SettingsNavItem = ({ 
  icon: Icon, 
  label, 
  isActive = false 
}: { 
  icon: React.ElementType; 
  label: string; 
  isActive?: boolean;
}) => {
  return (
    <div 
      className={`
        flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors
        ${isActive 
          ? 'bg-[#3a36e0] text-white' 
          : 'text-gray-400 hover:bg-white/5 hover:text-white'}
      `}
    >
      <Icon className="h-4 w-4" />
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default Settings;
