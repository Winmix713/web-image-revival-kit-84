
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { ApiServiceIntegration } from '@/types/integration';
import { Check, X, Plus, Trash, RefreshCw } from 'lucide-react';

const mockServices: ApiServiceIntegration[] = [
  {
    id: '1',
    name: 'Football Data API',
    description: 'Access to comprehensive football statistics and data',
    status: 'active',
    type: 'api',
    endpoint: 'https://api.football-data.org/v2/',
    authMethod: 'apiKey',
    lastUpdated: '2023-10-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Match Predictions API',
    description: 'AI-powered predictions for upcoming matches',
    status: 'inactive',
    type: 'api',
    endpoint: 'https://api.predictions.example/v1/',
    authMethod: 'bearer',
    lastUpdated: '2023-09-28T14:45:00Z'
  }
];

const ApiServices = () => {
  const [services, setServices] = useState<ApiServiceIntegration[]>(mockServices);
  const [newService, setNewService] = useState<Partial<ApiServiceIntegration>>({
    name: '',
    endpoint: '',
    authMethod: 'apiKey',
    description: '',
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddService = () => {
    if (!newService.name || !newService.endpoint) {
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
      const service: ApiServiceIntegration = {
        id: Date.now().toString(),
        status: 'pending',
        type: 'api',
        lastUpdated: new Date().toISOString(),
        ...newService as Omit<ApiServiceIntegration, 'id' | 'status' | 'type' | 'lastUpdated'>
      };
      
      setServices([...services, service]);
      setNewService({
        name: '',
        endpoint: '',
        authMethod: 'apiKey',
        description: '',
      });
      setIsAdding(false);
      setIsLoading(false);
      
      toast({
        title: "API Service added",
        description: `${service.name} has been added successfully`,
      });
    }, 1000);
  };

  const toggleServiceStatus = (id: string) => {
    setServices(services.map(service => 
      service.id === id 
        ? { ...service, status: service.status === 'active' ? 'inactive' : 'active' } 
        : service
    ));
    
    const service = services.find(s => s.id === id);
    toast({
      title: `Service ${service?.status === 'active' ? 'deactivated' : 'activated'}`,
      description: `${service?.name} has been ${service?.status === 'active' ? 'deactivated' : 'activated'} successfully`,
    });
  };

  const testConnection = (id: string) => {
    const serviceToTest = services.find(s => s.id === id);
    if (!serviceToTest) return;
    
    setServices(services.map(service => 
      service.id === id ? { ...service, status: 'pending' } : service
    ));
    
    // Simulate API test
    setTimeout(() => {
      setServices(services.map(service => 
        service.id === id ? { ...service, status: Math.random() > 0.3 ? 'active' : 'error' } : service
      ));
      
      const updatedService = services.find(s => s.id === id);
      toast({
        title: updatedService?.status === 'active' ? "Connection successful" : "Connection failed",
        description: updatedService?.status === 'active' 
          ? `Successfully connected to ${serviceToTest.name}` 
          : `Failed to connect to ${serviceToTest.name}. Check your credentials.`,
        variant: updatedService?.status === 'active' ? "default" : "destructive",
      });
    }, 1500);
  };

  const removeService = (id: string) => {
    const serviceToRemove = services.find(s => s.id === id);
    setServices(services.filter(service => service.id !== id));
    
    toast({
      title: "Service removed",
      description: `${serviceToRemove?.name} has been removed successfully`,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'inactive':
        return <X className="h-5 w-5 text-gray-400" />;
      case 'pending':
        return <RefreshCw className="h-5 w-5 text-amber-500 animate-spin" />;
      case 'error':
        return <X className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">API Services</h2>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add API Service
          </Button>
        )}
      </div>
      
      {/* Add new service form */}
      {isAdding && (
        <Card>
          <CardHeader>
            <CardTitle>New API Service</CardTitle>
            <CardDescription>Connect to an external API service</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Service Name</Label>
                <Input 
                  id="name" 
                  value={newService.name} 
                  onChange={(e) => setNewService({...newService, name: e.target.value})} 
                  placeholder="e.g. Football Data API"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endpoint">API Endpoint</Label>
                <Input 
                  id="endpoint" 
                  value={newService.endpoint} 
                  onChange={(e) => setNewService({...newService, endpoint: e.target.value})} 
                  placeholder="https://api.example.com/v1/"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="authMethod">Authentication Method</Label>
                <Select 
                  value={newService.authMethod} 
                  onValueChange={(value) => setNewService({...newService, authMethod: value as any})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select auth method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apiKey">API Key</SelectItem>
                    <SelectItem value="bearer">Bearer Token</SelectItem>
                    <SelectItem value="oauth">OAuth</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {newService.authMethod === 'apiKey' && (
                <div className="space-y-2">
                  <Label htmlFor="apiKey">API Key</Label>
                  <Input 
                    id="apiKey" 
                    value={newService.apiKey || ''} 
                    onChange={(e) => setNewService({...newService, apiKey: e.target.value})} 
                    placeholder="Enter your API key"
                    type="password"
                  />
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input 
                id="description" 
                value={newService.description} 
                onChange={(e) => setNewService({...newService, description: e.target.value})} 
                placeholder="Describe what this API service is used for"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
            <Button onClick={handleAddService} disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Service"}
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* List of services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map(service => (
          <Card key={service.id} className={`border ${
            service.status === 'active' ? 'border-green-500/30' : 
            service.status === 'error' ? 'border-red-500/30' : 'border-white/10'
          }`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  {service.name}
                  <span className="ml-2">{getStatusIcon(service.status)}</span>
                </CardTitle>
                <CardDescription>
                  {service.endpoint}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <div className="text-xs text-muted-foreground">
                Last updated: {new Date(service.lastUpdated as string).toLocaleString()}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-red-500 hover:text-red-600" 
                onClick={() => removeService(service.id)}
              >
                <Trash className="h-4 w-4 mr-2" />
                Remove
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => testConnection(service.id)}
                  disabled={service.status === 'pending'}
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${service.status === 'pending' ? 'animate-spin' : ''}`} />
                  Test
                </Button>
                <Button 
                  variant={service.status === 'active' ? 'destructive' : 'default'} 
                  size="sm" 
                  onClick={() => toggleServiceStatus(service.id)}
                  disabled={service.status === 'pending' || service.status === 'error'}
                >
                  {service.status === 'active' ? 'Disable' : 'Enable'}
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {services.length === 0 && !isAdding && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No API services configured yet</p>
          <Button onClick={() => setIsAdding(true)}>Add your first API service</Button>
        </div>
      )}
    </div>
  );
};

export default ApiServices;
