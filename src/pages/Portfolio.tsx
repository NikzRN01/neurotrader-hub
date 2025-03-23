
import { motion } from "framer-motion";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import PortfolioSummary from "@/components/portfolio/PortfolioSummary";
import AssetAllocationAndHoldings from "@/components/portfolio/AssetAllocationAndHoldings";
import PerformanceMetrics from "@/components/portfolio/PerformanceMetrics";
import UpcomingDividends from "@/components/portfolio/UpcomingDividends";

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <PortfolioHeader />
        <PortfolioSummary />
        <AssetAllocationAndHoldings />
        <PerformanceMetrics />
        <UpcomingDividends />
      </motion.div>
    </div>
  );
};

export default Portfolio;
