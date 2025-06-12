
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Eye, Edit, Calendar, DollarSign, Target, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface Campaign {
  id: string;
  name: string;
  type: string;
  status: "draft" | "pending" | "approved" | "active" | "completed" | "rejected";
  budget: number;
  spent: number;
  startDate: string;
  endDate: string;
  channels: string[];
  createdBy: string;
  approvalStatus: string;
}

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Summer Sale 2024",
    type: "Product Launch",
    status: "active",
    budget: 25000,
    spent: 18500,
    startDate: "2024-06-01",
    endDate: "2024-08-31",
    channels: ["Email", "Social Media", "Google Ads"],
    createdBy: "John Doe",
    approvalStatus: "approved"
  },
  {
    id: "2",
    name: "Brand Awareness Q3",
    type: "Brand Awareness",
    status: "pending",
    budget: 50000,
    spent: 0,
    startDate: "2024-07-01",
    endDate: "2024-09-30",
    channels: ["Display", "Social Media", "Influencer"],
    createdBy: "Jane Smith",
    approvalStatus: "pending_approval"
  },
  {
    id: "3",
    name: "Customer Retention Program",
    type: "Customer Retention",
    status: "approved",
    budget: 15000,
    spent: 5200,
    startDate: "2024-06-15",
    endDate: "2024-12-15",
    channels: ["Email", "Content Marketing"],
    createdBy: "Mike Johnson",
    approvalStatus: "approved"
  }
];

interface CampaignListProps {
  showAll?: boolean;
}

export function CampaignList({ showAll = true }: CampaignListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCampaigns = mockCampaigns
    .filter(campaign => 
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, showAll ? undefined : 6);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "default";
      case "pending": return "secondary";
      case "approved": return "outline";
      case "completed": return "default";
      case "rejected": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Campaigns</CardTitle>
          {showAll && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {filteredCampaigns.map((campaign) => (
            <div key={campaign.id} className="border rounded-lg p-4 hover:bg-accent transition-colors">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{campaign.name}</h3>
                    <Badge variant={getStatusColor(campaign.status)}>
                      {campaign.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      {campaign.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      ${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {campaign.startDate} - {campaign.endDate}
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {campaign.channels.map((channel) => (
                      <Badge key={channel} variant="outline" className="text-xs">
                        {channel}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Campaign</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Archive
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
