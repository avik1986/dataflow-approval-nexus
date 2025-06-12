
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Clock, User } from "lucide-react";

interface ApprovalItem {
  id: string;
  type: "user" | "category" | "geography" | "attribute";
  action: "create" | "update" | "delete";
  title: string;
  description: string;
  requestedBy: string;
  requestedAt: string;
  status: "pending" | "approved" | "rejected";
  priority: "high" | "medium" | "low";
}

const mockApprovals: ApprovalItem[] = [
  {
    id: "1",
    type: "user",
    action: "create",
    title: "New User Registration",
    description: "Create new user: Sarah Wilson as Category Maker",
    requestedBy: "Admin User",
    requestedAt: "2024-06-12T10:30:00Z",
    status: "pending",
    priority: "high"
  },
  {
    id: "2",
    type: "category",
    action: "update", 
    title: "Category Update",
    description: "Update Electronics category structure",
    requestedBy: "John Doe",
    requestedAt: "2024-06-12T09:15:00Z",
    status: "pending",
    priority: "medium"
  },
  {
    id: "3",
    type: "geography",
    action: "create",
    title: "New Geographic Zone",
    description: "Add West Zone under North Region",
    requestedBy: "Jane Smith",
    requestedAt: "2024-06-12T08:45:00Z",
    status: "approved",
    priority: "low"
  }
];

export function ApprovalQueue() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "user": return <User className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "default";
      case "rejected": return "destructive";
      default: return "secondary";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "secondary";
      default: return "outline";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Approval Queue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockApprovals.map((item) => (
            <div 
              key={item.id}
              className="border rounded-lg p-4 hover:bg-accent transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="mt-1">
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{item.title}</h4>
                      <Badge variant={getPriorityColor(item.priority)} className="text-xs">
                        {item.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Requested by: {item.requestedBy}</span>
                      <span>
                        {new Date(item.requestedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                  {item.status === "pending" && (
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" className="h-8">
                        <Check className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="h-8">
                        <X className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
