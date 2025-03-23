
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import PortfolioSummary from "@/components/portfolio/PortfolioSummary";
import AssetAllocationAndHoldings from "@/components/portfolio/AssetAllocationAndHoldings";
import PerformanceMetrics from "@/components/portfolio/PerformanceMetrics";
import UpcomingDividends from "@/components/portfolio/UpcomingDividends";
import { portfolioApi } from "@/services/api";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setIsLoading(true);
        // Get user ID from localStorage - this would be set during login
        const userId = localStorage.getItem('userId');
        
        if (!userId) {
          setError("User not authenticated");
          toast.error("Please sign in to view your portfolio");
          setIsLoading(false);
          return;
        }

        const data = await portfolioApi.fetchPortfolioData(parseInt(userId));
        setPortfolioData(data);
      } catch (err) {
        console.error("Error fetching portfolio data:", err);
        setError("Failed to load portfolio data");
        toast.error("Could not load portfolio data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading your portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <PortfolioHeader />
        <PortfolioSummary portfolioData={portfolioData} />
        <AssetAllocationAndHoldings portfolioData={portfolioData} />
        <PerformanceMetrics portfolioData={portfolioData} />
        <UpcomingDividends portfolioData={portfolioData} />
      </motion.div>
    </div>
  );
};

export default Portfolio;
