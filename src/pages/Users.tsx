
import { UsersTable } from "@/components/Users/UsersTable";

export default function Users() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Users & Roles</h1>
        <p className="text-muted-foreground">
          Manage users, their roles, and access permissions
        </p>
      </div>
      
      <UsersTable />
    </div>
  );
}
