import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bus, Train, TrainFront } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PublicTransport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Public Transport Monitoring
            </h1>
            <p className="text-muted-foreground">
              Real-time crowd density analysis for buses, trains, and trams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-muted rounded-full w-fit mb-2">
                  <Bus className="h-8 w-8 text-foreground" />
                </div>
                <CardTitle className="text-lg">Buses</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Monitor passenger density across city bus routes
                </p>
                <p className="text-2xl font-bold text-foreground">24</p>
                <p className="text-xs text-muted-foreground">Active cameras</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-muted rounded-full w-fit mb-2">
                  <Train className="h-8 w-8 text-foreground" />
                </div>
                <CardTitle className="text-lg">Metro</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Track crowd flow in metro stations and trains
                </p>
                <p className="text-2xl font-bold text-foreground">48</p>
                <p className="text-xs text-muted-foreground">Active cameras</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-muted rounded-full w-fit mb-2">
                  <TrainFront className="h-8 w-8 text-foreground" />
                </div>
                <CardTitle className="text-lg">Trams</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Analyze passenger patterns on tram lines
                </p>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-xs text-muted-foreground">Active cameras</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicTransport;
