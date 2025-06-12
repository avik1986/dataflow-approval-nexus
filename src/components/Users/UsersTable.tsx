
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2 } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  geography: string;
  category: string;
  status: "active" | "inactive";
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@company.com",
    phone: "+1-555-0123",
    role: "Zonal Checker",
    geography: "North Zone",
    category: "Electronics",
    status: "active"
  },
  {
    id: "2", 
    name: "Jane Smith",
    email: "jane.smith@company.com",
    phone: "+1-555-0124",
    role: "Category Maker",
    geography: "South Zone",
    category: "Clothing",
    status: "active"
  },
  {
    id: "3",
    name: "Mike Johnson", 
    email: "mike.johnson@company.com",
    phone: "+1-555-0125",
    role: "Admin",
    geography: "All Zones",
    category: "All Categories",
    status: "inactive"
  }
];

export function UsersTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>User Management</CardTitle>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-medium">Name</th>
                <th className="text-left p-2 font-medium">Email</th>
                <th className="text-left p-2 font-medium">Role</th>
                <th className="text-left p-2 font-medium">Geography</th>
                <th className="text-left p-2 font-medium">Category</th>
                <th className="text-left p-2 font-medium">Status</th>
                <th className="text-left p-2 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-accent">
                  <td className="p-2">
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.phone}</div>
                    </div>
                  </td>
                  <td className="p-2 text-sm">{user.email}</td>
                  <td className="p-2">
                    <Badge variant="outline">{user.role}</Badge>
                  </td>
                  <td className="p-2 text-sm">{user.geography}</td>
                  <td className="p-2 text-sm">{user.category}</td>
                  <td className="p-2">
                    <Badge 
                      variant={user.status === "active" ? "default" : "secondary"}
                    >
                      {user.status}
                    </Badge>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
