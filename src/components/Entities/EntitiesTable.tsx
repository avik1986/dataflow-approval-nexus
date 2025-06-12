
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Link } from "lucide-react";

interface Entity {
  id: string;
  name: string;
  type: string;
  description: string;
  attributes: string[];
  relationships: number;
  status: "active" | "inactive" | "draft";
  createdBy: string;
  lastModified: string;
}

const mockEntities: Entity[] = [
  {
    id: "1",
    name: "Customer",
    type: "Core Entity",
    description: "Main customer entity with personal and business information",
    attributes: ["name", "email", "phone", "address"],
    relationships: 5,
    status: "active",
    createdBy: "John Doe",
    lastModified: "2024-01-15"
  },
  {
    id: "2",
    name: "Product",
    type: "Business Entity",
    description: "Product catalog entity with pricing and inventory data",
    attributes: ["title", "price", "category", "stock"],
    relationships: 3,
    status: "active",
    createdBy: "Jane Smith",
    lastModified: "2024-01-14"
  },
  {
    id: "3",
    name: "Order",
    type: "Transaction Entity",
    description: "Order processing entity linking customers and products",
    attributes: ["orderDate", "totalAmount", "status"],
    relationships: 7,
    status: "active",
    createdBy: "Mike Johnson",
    lastModified: "2024-01-13"
  },
  {
    id: "4",
    name: "Invoice",
    type: "Financial Entity",
    description: "Invoice entity for billing and payment tracking",
    attributes: ["invoiceNumber", "amount", "dueDate"],
    relationships: 2,
    status: "draft",
    createdBy: "Sarah Wilson",
    lastModified: "2024-01-12"
  },
  {
    id: "5",
    name: "Supplier",
    type: "Partner Entity",
    description: "Supplier management entity for procurement",
    attributes: ["companyName", "contact", "terms"],
    relationships: 1,
    status: "inactive",
    createdBy: "Tom Brown",
    lastModified: "2024-01-10"
  }
];

export function EntitiesTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEntities = mockEntities.filter(entity =>
    entity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entity.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entity.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Entity Management</CardTitle>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Entity
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search entities..."
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
                <th className="text-left p-2 font-medium">Type</th>
                <th className="text-left p-2 font-medium">Description</th>
                <th className="text-left p-2 font-medium">Attributes</th>
                <th className="text-left p-2 font-medium">Relationships</th>
                <th className="text-left p-2 font-medium">Status</th>
                <th className="text-left p-2 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEntities.map((entity) => (
                <tr key={entity.id} className="border-b hover:bg-accent">
                  <td className="p-2">
                    <div>
                      <div className="font-medium">{entity.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Modified: {entity.lastModified}
                      </div>
                    </div>
                  </td>
                  <td className="p-2">
                    <Badge variant="outline">{entity.type}</Badge>
                  </td>
                  <td className="p-2 text-sm max-w-xs truncate">
                    {entity.description}
                  </td>
                  <td className="p-2">
                    <div className="flex flex-wrap gap-1">
                      {entity.attributes.slice(0, 3).map((attr) => (
                        <Badge key={attr} variant="secondary" className="text-xs">
                          {attr}
                        </Badge>
                      ))}
                      {entity.attributes.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{entity.attributes.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex items-center gap-1">
                      <Link className="h-3 w-3" />
                      <span className="text-sm">{entity.relationships}</span>
                    </div>
                  </td>
                  <td className="p-2">
                    <Badge 
                      variant={
                        entity.status === "active" ? "default" : 
                        entity.status === "draft" ? "secondary" : "outline"
                      }
                    >
                      {entity.status}
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
