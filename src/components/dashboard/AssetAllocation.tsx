
import Card from "@/components/ui/Card";
import PieChart from "@/components/ui/PieChart";
import { mockPortfolioData } from "@/utils/mockData";

const AssetAllocation = () => {
  return (
    <Card title="Asset Allocation" className="h-full">
      <div className="pt-2">
        <PieChart data={mockPortfolioData.assetAllocation} />
      </div>
    </Card>
  );
};

export default AssetAllocation;
