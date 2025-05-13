
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { DatabaseIntegration } from '@/types/integration';
import { Check, Database, Lock, Plus, RefreshCw, Settings, Trash } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from '@/components/ui/switch';

const mockConnections: DatabaseIntegration[] = [
  {
    id: '1',
    name: 'Main PostgreSQL Database',
    description: 'Primary database for match and prediction data',
    status: 'active',
    type: 'database',
    provider: 'postgres',
    host: 'db.example.com',
    port: 5432,
    user: 'matchprediction_user',
    lastUpdated: '2023-09-20T15:30:00Z'
  }
];

const DatabaseConnection = () => {
  const [connections, setConnections] = useState<DatabaseIntegration[]>(mockConnections);
  const [newConnection, setNewConnection] = useState<Partial<DatabaseIntegration>>({
    name: '',
    provider: 'postgres',
    host: '',
    port: 5432,
    user: '',
    description: '',
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdvanced, setIsAdvanced] = useState(false);

  const handleAddConnection = () => {
    if (!newConnection.name || !newConnection.provider || !newConnection.host) {
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
      const connection: DatabaseIntegration = {
        id: Date.now().toString(),
        status: 'pending',
        type: 'database',
        lastUpdated: new Date().toISOString(),
        ...newConnection as Omit<DatabaseIntegration, 'id' | 'status' | 'type' | 'lastUpdated'>
      };
      
      setConnections([...connections, connection]);
      setNewConnection({
        name: '',
        provider: 'postgres',
        host: '',
        port: 5432,
        user: '',
        description: '',
      });
      setIsAdding(false);
      setIsLoading(false);
      
      // After "connecting", set to active
      setTimeout(() => {
        setConnections(prev => 
          prev.map(conn => 
            conn.id === connection.id 
              ? { ...conn, status: 'active' } 
              : conn
          )
        );
        
        toast({
          title: "Database connected",
          description: `${connection.name} has been connected successfully`,
        });
      }, 2000);
      
      toast({
        title: "Database connection added",
        description: `${connection.name} has been added and is connecting...`,
      });
    }, 1000);
  };

  const testConnection = (id: string) => {
    const connectionToTest = connections.find(c => c.id === id);
    if (!connectionToTest) return;
    
    setConnections(connections.map(conn => 
      conn.id === id ? { ...conn, status: 'pending' } : conn
    ));
    
    // Simulate connection test
    setTimeout(() => {
      setConnections(connections.map(conn => 
        conn.id === id ? { ...conn, status: Math.random() > 0.2 ? 'active' : 'error' } : conn
      ));
      
      const updatedConnection = connections.find(c => c.id === id);
      toast({
        title: updatedConnection?.status === 'active' ? "Connection successful" : "Connection failed",
        description: updatedConnection?.status === 'active' 
          ? `Successfully connected to ${connectionToTest.name}` 
          : `Failed to connect to ${connectionToTest.name}. Check your connection details.`,
        variant: updatedConnection?.status === 'active' ? "default" : "destructive",
      });
    }, 2000);
  };

  const removeConnection = (id: string) => {
    const connectionToRemove = connections.find(c => c.id === id);
    setConnections(connections.filter(conn => conn.id !== id));
    
    toast({
      title: "Connection removed",
      description: `${connectionToRemove?.name} has been removed successfully`,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'inactive':
        return <Database className="h-5 w-5 text-gray-400" />;
      case 'pending':
        return <RefreshCw className="h-5 w-5 text-amber-500 animate-spin" />;
      case 'error':
        return <Database className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Database Connections</h2>
          <p className="text-muted-foreground mt-1">Connect to external databases</p>
        </div>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Connection
          </Button>
        )}
      </div>
      
      {/* Add new connection form */}
      {isAdding && (
        <Card>
          <CardHeader>
            <CardTitle>New Database Connection</CardTitle>
            <CardDescription>Connect to an external database</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Connection Name</Label>
                <Input 
                  id="name" 
                  value={newConnection.name} 
                  onChange={(e) => setNewConnection({...newConnection, name: e.target.value})} 
                  placeholder="e.g. Production Database"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="provider">Database Type</Label>
                <Select 
                  value={newConnection.provider} 
                  onValueChange={(value) => setNewConnection({...newConnection, provider: value as any})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select database type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="postgres">PostgreSQL</SelectItem>
                    <SelectItem value="mysql">MySQL</SelectItem>
                    <SelectItem value="mongodb">MongoDB</SelectItem>
                    <SelectItem value="firebase">Firebase</SelectItem>
                    <SelectItem value="supabase">Supabase</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="advanced-toggle">Advanced Connection Settings</Label>
              <Switch
                id="advanced-toggle"
                checked={isAdvanced}
                onCheckedChange={setIsAdvanced}
              />
            </div>
            
            {isAdvanced ? (
              <div className="space-y-2">
                <Label htmlFor="connectionString">Connection String</Label>
                <Input 
                  id="connectionString" 
                  value={newConnection.connectionString || ''} 
                  onChange={(e) => setNewConnection({...newConnection, connectionString: e.target.value})} 
                  placeholder={`${newConnection.provider === 'postgres' ? 'postgresql://' : newConnection.provider + '://'}username:password@host:port/database`}
                />
                <p className="text-xs text-muted-foreground">
                  Enter a connection string for your database. This will override the individual settings below.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="host">Host</Label>
                    <Input 
                      id="host" 
                      value={newConnection.host} 
                      onChange={(e) => setNewConnection({...newConnection, host: e.target.value})} 
                      placeholder="e.g. db.example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="port">Port</Label>
                    <Input 
                      id="port" 
                      type="number"
                      value={newConnection.port} 
                      onChange={(e) => setNewConnection({...newConnection, port: parseInt(e.target.value)})} 
                      placeholder="5432"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="user">Username</Label>
                    <Input 
                      id="user" 
                      value={newConnection.user} 
                      onChange={(e) => setNewConnection({...newConnection, user: e.target.value})} 
                      placeholder="Database username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password"
                      placeholder="Database password"
                    />
                    <p className="text-xs text-muted-foreground">
                      Passwords are encrypted and stored securely
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input 
                id="description" 
                value={newConnection.description} 
                onChange={(e) => setNewConnection({...newConnection, description: e.target.value})} 
                placeholder="What is this database used for?"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
            <Button onClick={handleAddConnection} disabled={isLoading}>
              {isLoading ? "Connecting..." : "Connect Database"}
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* List of connections */}
      <div className="space-y-4">
        {connections.map(connection => (
          <Card key={connection.id} className={`border ${
            connection.status === 'active' ? 'border-green-500/30' : 
            connection.status === 'error' ? 'border-red-500/30' : 'border-white/10'
          }`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  {connection.name}
                  <span className="ml-2">{getStatusIcon(connection.status)}</span>
                </CardTitle>
                <CardDescription>
                  {connection.provider.charAt(0).toUpperCase() + connection.provider.slice(1)} • {connection.host}
                  {connection.port ? `:${connection.port}` : ''}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{connection.description}</p>
              <div className="flex items-center gap-2 text-xs">
                <div className="flex items-center">
                  <Database className="h-3 w-3 mr-1 text-muted-foreground" />
                  <span className="text-muted-foreground">{connection.provider}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center">
                  <Lock className="h-3 w-3 mr-1 text-muted-foreground" />
                  <span className="text-muted-foreground">{connection.user || 'User'}</span>
                </div>
              </div>
              <div className="text-xs text-muted-foreground mt-4">
                Last updated: {new Date(connection.lastUpdated).toLocaleString()}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-red-500 hover:text-red-600" 
                onClick={() => removeConnection(connection.id)}
              >
                <Trash className="h-4 w-4 mr-2" />
                Remove
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => testConnection(connection.id)}
                  disabled={connection.status === 'pending'}
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${connection.status === 'pending' ? 'animate-spin' : ''}`} />
                  Test
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Configure
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {connections.length === 0 && !isAdding && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No database connections configured yet</p>
          <Button onClick={() => setIsAdding(true)}>Add your first database connection</Button>
        </div>
      )}
    </div>
  );
};

export default DatabaseConnection;
