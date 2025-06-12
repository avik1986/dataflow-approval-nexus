
import { CategoryTree } from "@/components/Categories/CategoryTree";

export default function Categories() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Category Hierarchy</h1>
        <p className="text-muted-foreground">
          Manage product and service categories with hierarchical structure
        </p>
      </div>
      
      <CategoryTree />
    </div>
  );
}
