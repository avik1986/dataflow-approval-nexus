
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Save, RefreshCw, Shield, Database, Bell, Users } from "lucide-react";

export function SettingsPanel() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* System Configuration */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              <CardTitle>System Configuration</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="systemName">System Name</Label>
              <Input id="systemName" defaultValue="Maker-Checker System" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="environment">Environment</Label>
              <div className="flex items-center gap-2">
                <Input id="environment" defaultValue="Production" readOnly />
                <Badge variant="default">Live</Badge>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="version">System Version</Label>
              <Input id="version" defaultValue="v2.1.4" readOnly />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="maintenance">Maintenance Mode</Label>
              <Switch id="maintenance" />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <CardTitle>Security Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
              <Switch id="twoFactor" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sessionTimeout">Auto-logout (minutes)</Label>
              <Input 
                id="sessionTimeout" 
                type="number" 
                defaultValue="30" 
                className="w-20" 
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="passwordPolicy">Strong Password Policy</Label>
              <Switch id="passwordPolicy" defaultChecked />
            </div>
            <div className="space-y-2">
              <Label htmlFor="backupFreq">Backup Frequency</Label>
              <select 
                id="backupFreq" 
                className="w-full p-2 border rounded-md"
                defaultValue="daily"
              >
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* User Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <CardTitle>User Management</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="userRegistration">Allow User Registration</Label>
              <Switch id="userRegistration" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="defaultRole">Default User Role</Label>
              <select 
                id="defaultRole" 
                className="p-2 border rounded-md"
                defaultValue="viewer"
              >
                <option value="viewer">Viewer</option>
                <option value="maker">Maker</option>
                <option value="checker">Checker</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxUsers">Maximum Active Users</Label>
              <Input id="maxUsers" type="number" defaultValue="100" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="accountLockout">Account Lockout</Label>
              <Switch id="accountLockout" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              <CardTitle>Notification Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="emailNotif">Email Notifications</Label>
              <Switch id="emailNotif" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="approvalNotif">Approval Notifications</Label>
              <Switch id="approvalNotif" defaultChecked />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtpServer">SMTP Server</Label>
              <Input id="smtpServer" defaultValue="smtp.company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fromEmail">From Email Address</Label>
              <Input id="fromEmail" defaultValue="system@company.com" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Settings
        </Button>
        <Button variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Reset to Defaults
        </Button>
      </div>
    </div>
  );
}
