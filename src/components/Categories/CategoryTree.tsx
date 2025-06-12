
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronDown, Plus, Edit, Trash2 } from "lucide-react";

interface Category {
  id: string;
  name: string;
  children?: Category[];
}

const mockCategories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    children: [
      {
        id: "2", 
        name: "Mobile Phones",
        children: [
          { id: "3", name: "Smartphones" },
          { id: "4", name: "Feature Phones" }
        ]
      },
      {
        id: "5",
        name: "Computers",
        children: [
          { id: "6", name: "Laptops" },
          { id: "7", name: "Desktops" }
        ]
      }
    ]
  },
  {
    id: "8",
    name: "Clothing",
    children: [
      { id: "9", name: "Men's Wear" },
      { id: "10", name: "Women's Wear" }
    ]
  }
];

interface CategoryNodeProps {
  category: Category;
  level: number;
}

function CategoryNode({ category, level }: CategoryNodeProps) {
  const [isExpanded, setIsExpanded] = useState(level < 2);
  const hasChildren = category.children && category.children.length > 0;

  return (
    <div className="select-none">
      <div 
        className="flex items-center gap-2 p-2 hover:bg-accent rounded-md group"
        style={{ paddingLeft: `${level * 20 + 8}px` }}
      >
        {hasChildren ? (
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        ) : (
          <div className="w-6" />
        )}
        
        <span className="flex-1 font-medium">{category.name}</span>
        
        <div className="opacity-0 group-hover:opacity-100 flex gap-1">
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
            <Plus className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
            <Edit className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      </div>
      
      {hasChildren && isExpanded && (
        <div>
          {category.children!.map((child) => (
            <CategoryNode 
              key={child.id} 
              category={child} 
              level={level + 1} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function CategoryTree() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Category Hierarchy</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Category
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {mockCategories.map((category) => (
            <CategoryNode key={category.id} category={category} level={0} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
