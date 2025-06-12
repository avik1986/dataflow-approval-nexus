
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2 } from "lucide-react";

interface Attribute {
  id: string;
  name: string;
  dataType: string;
  isRequired: boolean;
  defaultValue?: string;
  validation: string;
  usedInEntities: string[];
  description: string;
  createdBy: string;
  lastModified: string;
}

const mockAttributes: Attribute[] = [
  {
    id: "1",
    name: "email",
    dataType: "String",
    isRequired: true,
    validation: "Email format",
    usedInEntities: ["Customer", "User", "Supplier"],
    description: "Email address field with validation",
    createdBy: "John Doe",
    lastModified: "2024-01-15"
  },
  {
    id: "2",
    name: "price",
    dataType: "Decimal",
    isRequired: true,
    defaultValue: "0.00",
    validation: "Positive number",
    usedInEntities: ["Product", "Service"],
    description: "Price field for products and services",
    createdBy: "Jane Smith",
    lastModified: "2024-01-14"
  },
  {
    id: "3",
    name: "phone",
    dataType: "String",
    isRequired: false,
    validation: "Phone format",
    usedInEntities: ["Customer", "Supplier", "Contact"],
    description: "Phone number with international format",
    createdBy: "Mike Johnson",
    lastModified: "2024-01-13"
  },
  {
    id: "4",
    name: "status",
    dataType: "Enum",
    isRequired: true,
    defaultValue: "active",
    validation: "active|inactive|pending",
    usedInEntities: ["Order", "Customer", "Product"],
    description: "Status enumeration for various entities",
    createdBy: "Sarah Wilson",
    lastModified: "2024-01-12"
  },
  {
    id: "5",
    name: "description",
    dataType: "Text",
    isRequired: false,
    validation: "Max 500 chars",
    usedInEntities: ["Product", "Category", "Service"],
    description: "Long text field for descriptions",
    createdBy: "Tom Brown",
    lastModified: "2024-01-10"
  }
];

export function AttributesTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAttributes = mockAttributes.filter(attr =>
    attr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attr.dataType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attr.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Attribute Definitions</CardTitle>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Attribute
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search attributes..."
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
                <th className="text-left p-2 font-medium">Data Type</th>
                <th className="text-left p-2 font-medium">Required</th>
                <th className="text-left p-2 font-medium">Validation</th>
                <th className="text-left p-2 font-medium">Used In</th>
                <th className="text-left p-2 font-medium">Default</th>
                <th className="text-left p-2 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAttributes.map((attr) => (
                <tr key={attr.id} className="border-b hover:bg-accent">
                  <td className="p-2">
                    <div>
                      <div className="font-medium">{attr.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Modified: {attr.lastModified}
                      </div>
                    </div>
                  </td>
                  <td className="p-2">
                    <Badge variant="outline">{attr.dataType}</Badge>
                  </td>
                  <td className="p-2">
                    <Badge variant={attr.isRequired ? "default" : "secondary"}>
                      {attr.isRequired ? "Required" : "Optional"}
                    </Badge>
                  </td>
                  <td className="p-2 text-sm">{attr.validation}</td>
                  <td className="p-2">
                    <div className="flex flex-wrap gap-1">
                      {attr.usedInEntities.slice(0, 2).map((entity) => (
                        <Badge key={entity} variant="secondary" className="text-xs">
                          {entity}
                        </Badge>
                      ))}
                      {attr.usedInEntities.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{attr.usedInEntities.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="p-2 text-sm">{attr.defaultValue || "—"}</td>
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
