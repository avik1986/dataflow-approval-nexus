
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TreePine, MapPin, Clock } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "124",
    icon: Users,
    trend: "+12%"
  },
  {
    title: "Categories",
    value: "48",
    icon: TreePine,
    trend: "+3%"
  },
  {
    title: "Geographic Locations", 
    value: "156",
    icon: MapPin,
    trend: "+8%"
  },
  {
    title: "Pending Approvals",
    value: "23",
    icon: Clock,
    trend: "-5%"
  }
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">{stat.trend}</span> from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
