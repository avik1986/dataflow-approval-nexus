
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, XCircle, Clock, DollarSign, Calendar, Target, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PendingCampaign {
  id: string;
  name: string;
  type: string;
  description: string;
  budget: number;
  startDate: string;
  endDate: string;
  channels: string[];
  targetAudience: string;
  createdBy: string;
  createdAt: string;
  makerComments?: string;
}

const pendingCampaigns: PendingCampaign[] = [
  {
    id: "pending-1",
    name: "Black Friday Mega Sale",
    type: "Product Launch",
    description: "Comprehensive campaign targeting holiday shoppers with aggressive pricing and multi-channel promotion.",
    budget: 75000,
    startDate: "2024-11-25",
    endDate: "2024-11-29",
    channels: ["Email", "Social Media", "Google Ads", "Display"],
    targetAudience: "All customers, focus on high-value segments",
    createdBy: "Sarah Wilson",
    createdAt: "2024-06-10",
    makerComments: "Requesting higher budget for maximum impact during peak shopping period"
  },
  {
    id: "pending-2",
    name: "New Product Launch - Smart Watch",
    type: "Product Launch",
    description: "Launch campaign for the new smart watch targeting tech enthusiasts and fitness-conscious consumers.",
    budget: 45000,
    startDate: "2024-07-15",
    endDate: "2024-08-15",
    channels: ["Social Media", "Influencer", "Content Marketing"],
    targetAudience: "Tech enthusiasts, fitness enthusiasts, ages 25-45",
    createdBy: "Tom Brown",
    createdAt: "2024-06-09"
  }
];

export function CampaignApprovals() {
  const { toast } = useToast();
  const [checkerComments, setCheckerComments] = useState<{[key: string]: string}>({});

  const handleApprove = (campaignId: string) => {
    console.log("Approving campaign:", campaignId);
    toast({
      title: "Campaign Approved",
      description: "The campaign has been approved and can now be activated.",
    });
  };

  const handleReject = (campaignId: string) => {
    const comments = checkerComments[campaignId];
    if (!comments?.trim()) {
      toast({
        title: "Comments Required",
        description: "Please provide feedback before rejecting the campaign.",
        variant: "destructive",
      });
      return;
    }
    
    console.log("Rejecting campaign:", campaignId, "Comments:", comments);
    toast({
      title: "Campaign Rejected",
      description: "The campaign has been rejected and returned to the maker.",
      variant: "destructive",
    });
  };

  const handleCommentChange = (campaignId: string, comment: string) => {
    setCheckerComments(prev => ({
      ...prev,
      [campaignId]: comment
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Pending Campaign Approvals
          </CardTitle>
        </CardHeader>
        <CardContent>
          {pendingCampaigns.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No campaigns pending approval
            </div>
          ) : (
            <div className="space-y-6">
              {pendingCampaigns.map((campaign) => (
                <div key={campaign.id} className="border rounded-lg p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{campaign.name}</h3>
                        <Badge variant="secondary">{campaign.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Created by {campaign.createdBy} on {campaign.createdAt}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm">{campaign.description}</p>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium">${campaign.budget.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Budget</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{campaign.startDate}</div>
                        <div className="text-xs text-muted-foreground">Start Date</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{campaign.endDate}</div>
                        <div className="text-xs text-muted-foreground">End Date</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{campaign.channels.length} channels</div>
                        <div className="text-xs text-muted-foreground">Marketing Mix</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Marketing Channels:</div>
                    <div className="flex gap-1 flex-wrap">
                      {campaign.channels.map((channel) => (
                        <Badge key={channel} variant="outline" className="text-xs">
                          {channel}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Target Audience:</div>
                    <p className="text-sm text-muted-foreground">{campaign.targetAudience}</p>
                  </div>

                  {campaign.makerComments && (
                    <div className="space-y-2">
                      <div className="text-sm font-medium flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Maker Comments:
                      </div>
                      <div className="bg-muted p-3 rounded-md text-sm">
                        {campaign.makerComments}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Checker Review:</div>
                    <Textarea
                      placeholder="Add your review comments (required for rejection)..."
                      value={checkerComments[campaign.id] || ""}
                      onChange={(e) => handleCommentChange(campaign.id, e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-2 justify-end pt-4 border-t">
                    <Button
                      variant="outline"
                      onClick={() => handleReject(campaign.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                    <Button
                      onClick={() => handleApprove(campaign.id)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
