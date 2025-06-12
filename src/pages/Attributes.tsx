
import { AttributesTable } from "@/components/Attributes/AttributesTable";

export default function Attributes() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Attributes Management</h1>
        <p className="text-muted-foreground">
          Define and manage data attributes used across the system
        </p>
      </div>
      
      <AttributesTable />
    </div>
  );
}
