import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, TreePine, ShoppingBag, Landmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PublicPlaces = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Public Places Monitoring
            </h1>
            <p className="text-muted-foreground">
              Crowd analysis for parks, malls, and public venues
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-muted rounded-full w-fit mb-2">
                  <Building2 className="h-8 w-8 text-foreground" />
                </div>
                <CardTitle className="text-lg">Stations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-foreground">18</p>
                <p className="text-xs text-muted-foreground">Active zones</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-muted rounded-full w-fit mb-2">
                  <TreePine className="h-8 w-8 text-foreground" />
                </div>
                <CardTitle className="text-lg">Parks</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-foreground">8</p>
                <p className="text-xs text-muted-foreground">Active zones</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-muted rounded-full w-fit mb-2">
                  <ShoppingBag className="h-8 w-8 text-foreground" />
                </div>
                <CardTitle className="text-lg">Malls</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-foreground">15</p>
                <p className="text-xs text-muted-foreground">Active zones</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-muted rounded-full w-fit mb-2">
                  <Landmark className="h-8 w-8 text-foreground" />
                </div>
                <CardTitle className="text-lg">Venues</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-foreground">6</p>
                <p className="text-xs text-muted-foreground">Active zones</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicPlaces;
