
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, MapPin } from "lucide-react";

const geographyData = [
  {
    id: "1",
    name: "North America",
    type: "Region",
    children: [
      {
        id: "2",
        name: "United States",
        type: "Country",
        children: [
          { id: "3", name: "California", type: "State" },
          { id: "4", name: "New York", type: "State" }
        ]
      }
    ]
  },
  {
    id: "5", 
    name: "Europe",
    type: "Region",
    children: [
      {
        id: "6",
        name: "United Kingdom", 
        type: "Country",
        children: [
          { id: "7", name: "London", type: "City" },
          { id: "8", name: "Manchester", type: "City" }
        ]
      }
    ]
  }
];

export default function Geography() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Geography Hierarchy</h1>
        <p className="text-muted-foreground">
          Define and manage operational geographic areas
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Geographic Structure</CardTitle>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Location
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {geographyData.map((region) => (
              <div key={region.id} className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">{region.name}</span>
                  <Badge variant="outline">{region.type}</Badge>
                </div>
                
                {region.children && (
                  <div className="ml-6 space-y-2">
                    {region.children.map((country) => (
                      <div key={country.id} className="border-l-2 border-muted pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">{country.name}</span>
                          <Badge variant="secondary">{country.type}</Badge>
                        </div>
                        
                        {country.children && (
                          <div className="ml-4 space-y-1">
                            {country.children.map((state) => (
                              <div key={state.id} className="flex items-center gap-2">
                                <span className="text-sm">{state.name}</span>
                                <Badge variant="outline" className="text-xs">
                                  {state.type}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
