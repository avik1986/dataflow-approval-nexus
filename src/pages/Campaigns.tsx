
import { CampaignManagement } from "@/components/Campaigns/CampaignManagement";

export default function Campaigns() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Campaign Management</h1>
        <p className="text-muted-foreground">
          Create, manage, and approve marketing campaigns through the maker-checker workflow
        </p>
      </div>
      
      <CampaignManagement />
    </div>
  );
}
