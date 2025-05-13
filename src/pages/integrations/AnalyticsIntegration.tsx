
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { AnalyticsIntegration as AnalyticsIntegrationType } from '@/types/integration';
import { BarChart2, Check, ExternalLink, LineChart, Plus, RefreshCw, Settings, Trash } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from '@/components/ui/switch';

const mockIntegrations: AnalyticsIntegrationType[] = [
  {
    id: '1',
    name: 'Google Analytics',
    description: 'Track user engagement and behavior',
    status: 'active',
    type: 'analytics',
    provider: 'google',
    trackingId: 'G-1234567890',
    lastUpdated: '2023-10-05T09:45:00Z'
  }
];

const AnalyticsIntegration = () => {
  const [integrations, setIntegrations] = useState<AnalyticsIntegrationType[]>(mockIntegrations);
  const [newIntegration, setNewIntegration] = useState<Partial<AnalyticsIntegrationType>>({
    name: '',
    provider: 'google',
    trackingId: '',
    description: '',
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [eventTracking, setEventTracking] = useState(true);
  const [pageTracking, setPageTracking] = useState(true);
  
  const handleAddIntegration = () => {
    if (!newIntegration.name || !newIntegration.provider || !newIntegration.trackingId) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const integration: AnalyticsIntegrationType = {
        id: Date.now().toString(),
        status: 'active',
        type: 'analytics',
        lastUpdated: new Date().toISOString(),
        ...newIntegration as Omit<AnalyticsIntegrationType, 'id' | 'status' | 'type' | 'lastUpdated'>
      };
      
      setIntegrations([...integrations, integration]);
      setNewIntegration({
        name: '',
        provider: 'google',
        trackingId: '',
        description: '',
      });
      setIsAdding(false);
      setIsLoading(false);
      
      toast({
        title: "Analytics integration added",
        description: `${integration.name} has been added successfully`,
      });
    }, 1000);
  };

  const toggleIntegrationStatus = (id: string) => {
    setIntegrations(integrations.map(integration => 
      integration.id === id 
        ? { ...integration, status: integration.status === 'active' ? 'inactive' : 'active' } 
        : integration
    ));
    
    const integration = integrations.find(i => i.id === id);
    toast({
      title: `Integration ${integration?.status === 'active' ? 'deactivated' : 'activated'}`,
      description: `${integration?.name} has been ${integration?.status === 'active' ? 'deactivated' : 'activated'} successfully`,
    });
  };

  const testIntegration = (id: string) => {
    const integrationToTest = integrations.find(i => i.id === id);
    if (!integrationToTest) return;
    
    toast({
      title: "Testing integration",
      description: `Testing connection to ${integrationToTest.name}...`,
    });

    // Simulate test
    setTimeout(() => {
      toast({
        title: "Test successful",
        description: `Successfully connected to ${integrationToTest.name}`,
      });
    }, 1500);
  };

  const removeIntegration = (id: string) => {
    const integrationToRemove = integrations.find(i => i.id === id);
    setIntegrations(integrations.filter(integration => integration.id !== id));
    
    toast({
      title: "Integration removed",
      description: `${integrationToRemove?.name} has been removed successfully`,
    });
  };

  const getProviderIcon = (provider: string) => {
    switch (provider) {
      case 'google':
        return <BarChart2 className="h-5 w-5" />;
      case 'matomo':
        return <LineChart className="h-5 w-5" />;
      case 'mixpanel':
        return <BarChart2 className="h-5 w-5" />;
      default:
        return <LineChart className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Analytics Integrations</h2>
          <p className="text-muted-foreground mt-1">Track and analyze user behavior and engagement</p>
        </div>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Integration
          </Button>
        )}
      </div>
      
      {/* Add new integration form */}
      {isAdding && (
        <Card>
          <CardHeader>
            <CardTitle>New Analytics Integration</CardTitle>
            <CardDescription>Connect to an analytics platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Integration Name</Label>
                <Input 
                  id="name" 
                  value={newIntegration.name} 
                  onChange={(e) => setNewIntegration({...newIntegration, name: e.target.value})} 
                  placeholder="e.g. Google Analytics"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="provider">Provider</Label>
                <Select 
                  value={newIntegration.provider} 
                  onValueChange={(value) => setNewIntegration({...newIntegration, provider: value as any})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google Analytics</SelectItem>
                    <SelectItem value="matomo">Matomo</SelectItem>
                    <SelectItem value="mixpanel">Mixpanel</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="trackingId">Tracking ID/Property ID</Label>
              <Input 
                id="trackingId" 
                value={newIntegration.trackingId} 
                onChange={(e) => setNewIntegration({...newIntegration, trackingId: e.target.value})} 
                placeholder={newIntegration.provider === 'google' ? 'G-XXXXXXXXXX or UA-XXXXXXXX-X' : 'Your tracking ID'}
              />
            </div>
            
            {newIntegration.provider === 'custom' && (
              <div className="space-y-2">
                <Label htmlFor="customEndpoint">Custom Endpoint URL</Label>
                <Input 
                  id="customEndpoint" 
                  value={newIntegration.customEndpoint || ''} 
                  onChange={(e) => setNewIntegration({...newIntegration, customEndpoint: e.target.value})} 
                  placeholder="https://analytics.example.com/collect"
                />
              </div>
            )}
            
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label htmlFor="pageTracking" className="block">Page View Tracking</Label>
                  <p className="text-sm text-muted-foreground">Track when users navigate to different pages</p>
                </div>
                <Switch
                  id="pageTracking"
                  checked={pageTracking}
                  onCheckedChange={setPageTracking}
                />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label htmlFor="eventTracking" className="block">Event Tracking</Label>
                  <p className="text-sm text-muted-foreground">Track user interactions like clicks and form submissions</p>
                </div>
                <Switch
                  id="eventTracking"
                  checked={eventTracking}
                  onCheckedChange={setEventTracking}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input 
                id="description" 
                value={newIntegration.description} 
                onChange={(e) => setNewIntegration({...newIntegration, description: e.target.value})} 
                placeholder="What is this integration used for?"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
            <Button onClick={handleAddIntegration} disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Integration"}
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* List of integrations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map(integration => (
          <Card key={integration.id} className={`border ${
            integration.status === 'active' ? 'border-green-500/30' : 'border-white/10'
          }`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center space-x-2">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  integration.status === 'active' ? 'bg-green-500/10' : 'bg-white/10'
                }`}>
                  {getProviderIcon(integration.provider)}
                </div>
                <div className="space-y-1">
                  <CardTitle>{integration.name}</CardTitle>
                  <CardDescription>
                    {integration.provider.charAt(0).toUpperCase() + integration.provider.slice(1)}
                  </CardDescription>
                </div>
              </div>
              {integration.status === 'active' && <Check className="h-5 w-5 text-green-500" />}
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{integration.description}</p>
              <div className="text-xs bg-white/5 p-2 rounded font-mono mb-2">
                {integration.trackingId}
              </div>
              <div className="text-xs text-muted-foreground">
                Last updated: {new Date(integration.lastUpdated).toLocaleString()}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-red-500 hover:text-red-600" 
                onClick={() => removeIntegration(integration.id)}
              >
                <Trash className="h-4 w-4 mr-2" />
                Remove
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => testIntegration(integration.id)}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Test
                </Button>
                {integration.provider === 'google' && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://analytics.google.com/analytics/web/', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                )}
                <Button 
                  variant={integration.status === 'active' ? 'destructive' : 'default'} 
                  size="sm" 
                  onClick={() => toggleIntegrationStatus(integration.id)}
                >
                  {integration.status === 'active' ? 'Disable' : 'Enable'}
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {integrations.length === 0 && !isAdding && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No analytics integrations configured yet</p>
          <Button onClick={() => setIsAdding(true)}>Add your first analytics integration</Button>
        </div>
      )}
    </div>
  );
};

export default AnalyticsIntegration;
