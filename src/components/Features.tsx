import { Camera, Scan, Route, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Camera,
    title: "Camera Registration",
    description: "Add and configure surveillance cameras with custom monitoring zones and spatial boundaries.",
  },
  {
    icon: Scan,
    title: "Real-time Detection",
    description: "Computer vision algorithms identify individuals in each frame with precise bounding boxes.",
  },
  {
    icon: Route,
    title: "Movement Tracking",
    description: "Follow individuals across frames with stable trajectories and unique identifiers.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Interactive visualization with density maps, statistics, and temporal graphs.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Key Capabilities
          </h2>
          <p className="text-muted-foreground">
            Complete crowd monitoring and analysis solution
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="p-3 bg-muted rounded-md w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
