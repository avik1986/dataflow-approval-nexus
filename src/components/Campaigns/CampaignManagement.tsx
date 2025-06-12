
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Calendar, Target, DollarSign, Users, Eye, Edit, CheckCircle, XCircle } from "lucide-react";
import { CampaignForm } from "./CampaignForm";
import { CampaignList } from "./CampaignList";
import { CampaignApprovals } from "./CampaignApprovals";

export function CampaignManagement() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="space-y-6">
      {/* Campaign Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">24</div>
            </div>
            <p className="text-xs text-muted-foreground">Active Campaigns</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">8</div>
            </div>
            <p className="text-xs text-muted-foreground">Pending Approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">$125K</div>
            </div>
            <p className="text-xs text-muted-foreground">Total Budget</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">2.4M</div>
            </div>
            <p className="text-xs text-muted-foreground">Total Reach</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="campaigns">All Campaigns</TabsTrigger>
            <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
          </TabsList>
          <Button onClick={() => setShowCreateForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Create Campaign
          </Button>
        </div>

        <TabsContent value="overview" className="space-y-4">
          <CampaignList showAll={false} />
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <CampaignList showAll={true} />
        </TabsContent>

        <TabsContent value="approvals" className="space-y-4">
          <CampaignApprovals />
        </TabsContent>
      </Tabs>

      {showCreateForm && (
        <CampaignForm onClose={() => setShowCreateForm(false)} />
      )}
    </div>
  );
}
