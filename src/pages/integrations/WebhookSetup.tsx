
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { WebhookIntegration } from '@/types/integration';
import { Check, Copy, Plus, RefreshCw, Send, Trash } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

const mockWebhooks: WebhookIntegration[] = [
  {
    id: '1',
    name: 'Match Results Notification',
    description: 'Send match results to external service',
    status: 'active',
    type: 'webhook',
    url: 'https://hooks.zapier.com/hooks/catch/123456/abcdef/',
    events: ['match.completed', 'score.updated'],
    lastUpdated: '2023-10-12T08:15:00Z'
  }
];

const availableEvents = [
  { id: 'match.created', label: 'Match Created' },
  { id: 'match.updated', label: 'Match Updated' },
  { id: 'match.completed', label: 'Match Completed' },
  { id: 'score.updated', label: 'Score Updated' },
  { id: 'prediction.created', label: 'Prediction Created' },
  { id: 'prediction.successful', label: 'Prediction Successful' },
  { id: 'team.updated', label: 'Team Updated' },
];

const WebhookSetup = () => {
  const [webhooks, setWebhooks] = useState<WebhookIntegration[]>(mockWebhooks);
  const [newWebhook, setNewWebhook] = useState<Partial<WebhookIntegration>>({
    name: '',
    url: '',
    events: [],
    description: '',
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleAddWebhook = () => {
    if (!newWebhook.name || !newWebhook.url || !newWebhook.events?.length) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields and select at least one event",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const webhook: WebhookIntegration = {
        id: Date.now().toString(),
        status: 'active',
        type: 'webhook',
        lastUpdated: new Date().toISOString(),
        ...newWebhook as Omit<WebhookIntegration, 'id' | 'status' | 'type' | 'lastUpdated'>
      };
      
      setWebhooks([...webhooks, webhook]);
      setNewWebhook({
        name: '',
        url: '',
        events: [],
        description: '',
      });
      setIsAdding(false);
      setIsLoading(false);
      
      toast({
        title: "Webhook added",
        description: `${webhook.name} has been added successfully`,
      });
    }, 1000);
  };

  const toggleWebhookStatus = (id: string) => {
    setWebhooks(webhooks.map(webhook => 
      webhook.id === id 
        ? { ...webhook, status: webhook.status === 'active' ? 'inactive' : 'active' } 
        : webhook
    ));
    
    const webhook = webhooks.find(w => w.id === id);
    toast({
      title: `Webhook ${webhook?.status === 'active' ? 'deactivated' : 'activated'}`,
      description: `${webhook?.name} has been ${webhook?.status === 'active' ? 'deactivated' : 'activated'} successfully`,
    });
  };

  const testWebhook = (id: string) => {
    const webhookToTest = webhooks.find(w => w.id === id);
    if (!webhookToTest) return;
    
    toast({
      title: "Testing webhook",
      description: `Sending test payload to ${webhookToTest.name}...`,
    });

    // Simulate API test
    setTimeout(() => {
      toast({
        title: "Test successful",
        description: `Test payload was sent successfully to ${webhookToTest.name}`,
      });
    }, 1500);
  };

  const removeWebhook = (id: string) => {
    const webhookToRemove = webhooks.find(w => w.id === id);
    setWebhooks(webhooks.filter(webhook => webhook.id !== id));
    
    toast({
      title: "Webhook removed",
      description: `${webhookToRemove?.name} has been removed successfully`,
    });
  };

  const toggleEvent = (event: string) => {
    const currentEvents = newWebhook.events || [];
    if (currentEvents.includes(event)) {
      setNewWebhook({
        ...newWebhook, 
        events: currentEvents.filter(e => e !== event)
      });
    } else {
      setNewWebhook({
        ...newWebhook,
        events: [...currentEvents, event]
      });
    }
  };

  const copySecret = (id: string) => {
    const webhook = webhooks.find(w => w.id === id);
    if (webhook?.secret) {
      navigator.clipboard.writeText(webhook.secret);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
      
      toast({
        title: "Secret copied",
        description: "Webhook secret has been copied to clipboard",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Webhooks</h2>
          <p className="text-muted-foreground mt-1">Configure webhooks to connect with external services</p>
        </div>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Webhook
          </Button>
        )}
      </div>
      
      {/* Add new webhook form */}
      {isAdding && (
        <Card>
          <CardHeader>
            <CardTitle>New Webhook</CardTitle>
            <CardDescription>Set up a webhook to receive data from our platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Webhook Name</Label>
                <Input 
                  id="name" 
                  value={newWebhook.name} 
                  onChange={(e) => setNewWebhook({...newWebhook, name: e.target.value})} 
                  placeholder="e.g. Match Results Notification"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="url">Webhook URL</Label>
                <Input 
                  id="url" 
                  value={newWebhook.url} 
                  onChange={(e) => setNewWebhook({...newWebhook, url: e.target.value})} 
                  placeholder="https://example.com/webhook"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Events to trigger webhook</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {availableEvents.map(event => (
                  <div key={event.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`event-${event.id}`} 
                      checked={(newWebhook.events || []).includes(event.id)} 
                      onCheckedChange={() => toggleEvent(event.id)}
                    />
                    <label 
                      htmlFor={`event-${event.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {event.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="secret">Secret (Optional)</Label>
              <Input 
                id="secret" 
                value={newWebhook.secret || ''} 
                onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})} 
                placeholder="Enter a secret key for webhook verification"
                type="password"
              />
              <p className="text-xs text-muted-foreground">
                A secret is used to verify that the webhook is coming from our platform
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input 
                id="description" 
                value={newWebhook.description} 
                onChange={(e) => setNewWebhook({...newWebhook, description: e.target.value})} 
                placeholder="Describe what this webhook is used for"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
            <Button onClick={handleAddWebhook} disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Webhook"}
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* List of webhooks */}
      <div className="space-y-4">
        {webhooks.map(webhook => (
          <Card key={webhook.id} className={`border ${
            webhook.status === 'active' ? 'border-green-500/30' : 'border-white/10'
          }`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  {webhook.name}
                  {webhook.status === 'active' && <Check className="h-4 w-4 text-green-500" />}
                </CardTitle>
                <CardDescription className="break-all">
                  {webhook.url}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Label className="text-sm mb-2 block">Events</Label>
                <div className="flex flex-wrap gap-2">
                  {webhook.events.map(event => (
                    <span 
                      key={event} 
                      className="text-xs py-1 px-2 bg-white/10 rounded-full"
                    >
                      {event}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{webhook.description}</p>
              {webhook.secret && (
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-muted-foreground">Secret: •••••••••••••</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 w-6 p-0" 
                    onClick={() => copySecret(webhook.id)}
                  >
                    {copiedId === webhook.id ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              )}
              <div className="text-xs text-muted-foreground mt-2">
                Last updated: {new Date(webhook.lastUpdated).toLocaleString()}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-red-500 hover:text-red-600" 
                onClick={() => removeWebhook(webhook.id)}
              >
                <Trash className="h-4 w-4 mr-2" />
                Remove
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => testWebhook(webhook.id)}
                  disabled={webhook.status !== 'active'}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Test
                </Button>
                <Button 
                  variant={webhook.status === 'active' ? 'destructive' : 'default'} 
                  size="sm" 
                  onClick={() => toggleWebhookStatus(webhook.id)}
                >
                  {webhook.status === 'active' ? 'Disable' : 'Enable'}
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {webhooks.length === 0 && !isAdding && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No webhooks configured yet</p>
          <Button onClick={() => setIsAdding(true)}>Add your first webhook</Button>
        </div>
      )}
    </div>
  );
};

export default WebhookSetup;
