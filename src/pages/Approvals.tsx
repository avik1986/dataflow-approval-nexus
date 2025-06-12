
import { ApprovalQueue } from "@/components/Approvals/ApprovalQueue";

export default function Approvals() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Approval Management</h1>
        <p className="text-muted-foreground">
          Review and manage pending approvals across the system
        </p>
      </div>
      
      <ApprovalQueue />
    </div>
  );
}
