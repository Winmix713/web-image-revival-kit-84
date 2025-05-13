
import React from "react";
import { FileQuestion } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import ContentCard from "@/components/common/ContentCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <AppLayout backgroundVariant="subtle">
      <PageHeader
        title="Page Not Found"
        description="The page you are looking for doesn't exist or has been moved"
        icon={FileQuestion}
        variant="neon"
        className="mb-8"
      />

      <div className="flex items-center justify-center py-12">
        <ContentCard className="max-w-md w-full text-center p-8" variant="glass">
          <div className="rounded-full bg-background/30 w-24 h-24 mx-auto flex items-center justify-center mb-6">
            <span className="text-6xl font-bold text-white">404</span>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-white">Oops! Page not found</h2>
          <p className="text-muted-foreground mb-8">
            The page at <span className="font-mono bg-background/30 px-2 py-1 rounded text-sm">{location.pathname}</span> could not be found.
          </p>

          <div className="flex gap-4 justify-center">
            <Button asChild variant="default" className="btn-primary-glow">
              <Link to="/">Back to Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/league-management">League Management</Link>
            </Button>
          </div>
        </ContentCard>
      </div>
    </AppLayout>
  );
};

export default NotFound;
