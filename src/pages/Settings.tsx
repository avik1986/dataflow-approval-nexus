
import { SettingsPanel } from "@/components/Settings/SettingsPanel";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">System Settings</h1>
        <p className="text-muted-foreground">
          Configure system preferences and global settings
        </p>
      </div>
      
      <SettingsPanel />
    </div>
  );
}
