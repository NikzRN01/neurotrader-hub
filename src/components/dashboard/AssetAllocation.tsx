
import GlassCard from "@/components/ui/GlassCard";
import PieChart from "@/components/ui/PieChart";
import { mockPortfolioData } from "@/utils/mockData";

const AssetAllocation = () => {
  return (
    <GlassCard title="Asset Allocation" className="h-full">
      <div className="pt-2">
        <PieChart data={mockPortfolioData.assetAllocation} />
      </div>
    </GlassCard>
  );
};

export default AssetAllocation;
