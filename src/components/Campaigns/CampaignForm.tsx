
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CampaignFormProps {
  onClose: () => void;
  campaign?: any;
}

export function CampaignForm({ onClose, campaign }: CampaignFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: campaign?.name || "",
    description: campaign?.description || "",
    type: campaign?.type || "",
    budget: campaign?.budget || "",
    startDate: campaign?.startDate || "",
    endDate: campaign?.endDate || "",
    targetAudience: campaign?.targetAudience || "",
    channels: campaign?.channels || []
  });

  const campaignTypes = [
    "Brand Awareness",
    "Lead Generation", 
    "Product Launch",
    "Customer Retention",
    "Event Promotion"
  ];

  const channels = [
    "Email",
    "Social Media",
    "Google Ads",
    "Display",
    "Content Marketing",
    "Influencer"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Campaign submitted for approval:", formData);
    
    toast({
      title: "Campaign Submitted",
      description: "Your campaign has been submitted for maker-checker approval.",
    });
    
    onClose();
  };

  const handleChannelToggle = (channel: string) => {
    setFormData(prev => ({
      ...prev,
      channels: prev.channels.includes(channel)
        ? prev.channels.filter(c => c !== channel)
        : [...prev.channels, channel]
    }));
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {campaign ? "Edit Campaign" : "Create New Campaign"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Campaign Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Summer Sale Campaign"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Campaign Type</Label>
              <Select 
                value={formData.type} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select campaign type" />
                </SelectTrigger>
                <SelectContent>
                  {campaignTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Describe the campaign objectives and strategy..."
              rows={3}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="budget">Budget ($)</Label>
              <Input
                id="budget"
                type="number"
                value={formData.budget}
                onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                placeholder="10000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetAudience">Target Audience</Label>
            <Input
              id="targetAudience"
              value={formData.targetAudience}
              onChange={(e) => setFormData(prev => ({ ...prev, targetAudience: e.target.value }))}
              placeholder="e.g., Males 25-45, Tech enthusiasts"
            />
          </div>

          <div className="space-y-2">
            <Label>Marketing Channels</Label>
            <div className="flex flex-wrap gap-2">
              {channels.map(channel => (
                <Badge
                  key={channel}
                  variant={formData.channels.includes(channel) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handleChannelToggle(channel)}
                >
                  {channel}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Submit for Approval
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
