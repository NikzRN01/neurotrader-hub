
import { motion } from "framer-motion";
import AssetAllocation from "@/components/dashboard/AssetAllocation";
import TopHoldings from "@/components/dashboard/TopHoldings";

const AssetAllocationAndHoldings = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <AssetAllocation />
      <TopHoldings />
    </motion.div>
  );
};

export default AssetAllocationAndHoldings;
