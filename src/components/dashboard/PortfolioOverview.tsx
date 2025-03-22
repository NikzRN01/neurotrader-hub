
import { useState } from "react";
import { ArrowUpRight, ArrowDownRight, TrendingUp, AlertCircle } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import LineChart from "@/components/ui/LineChart";
import { mockPortfolioData, sampleChartData } from "@/utils/mockData";

const PortfolioOverview = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>("7 Days");

  const timeRangeClass = (range: string) =>
    `px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
      selectedTimeRange === range
        ? "bg-primary/10 text-primary"
        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
    }`;

  const investmentTypes = [
    { name: "Stock Investments", value: 82500, growth: 4200, icon: "📈" },
    { name: "Mutual Funds", value: 45000, growth: 1500, icon: "📊" },
    { name: "Crypto Account", value: 15000, growth: -1200, icon: "🪙" },
    { name: "Gold Investments", value: 7500, growth: 300, icon: "🪙" },
  ];

  return (
    <div className="space-y-6">
      {/* Portfolio Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gradient">Portfolio Overview</h2>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}, {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>

      {/* Portfolio Value and Chart */}
      <GlassCard className="relative overflow-hidden">
        <div className="z-10 mb-6 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Total Portfolio Value</h3>
            <div className="mt-1 flex items-end gap-2">
              <span className="text-3xl font-bold">
                ${mockPortfolioData.totalValue.toLocaleString("en-US")}
              </span>
              <div className={`flex items-center ${mockPortfolioData.totalGrowth >= 0 ? 'text-success' : 'text-destructive'}`}>
                {mockPortfolioData.totalGrowth >= 0 ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">
                  {mockPortfolioData.totalGrowthPercentage.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-success" />
              <span className="text-sm text-muted-foreground">Risk: {mockPortfolioData.riskLevel}</span>
            </div>
            <button className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs">
              <AlertCircle className="h-3 w-3" />
              <span>AI Recommendations</span>
            </button>
          </div>
        </div>

        <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
          <button
            className={timeRangeClass("7 Days")}
            onClick={() => setSelectedTimeRange("7 Days")}
          >
            7 Days
          </button>
          <button
            className={timeRangeClass("14 Days")}
            onClick={() => setSelectedTimeRange("14 Days")}
          >
            14 Days
          </button>
          <button
            className={timeRangeClass("30 Days")}
            onClick={() => setSelectedTimeRange("30 Days")}
          >
            30 Days
          </button>
        </div>

        <LineChart data={sampleChartData} showTimeFrames={false} />
      </GlassCard>

      {/* Investment Types */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {investmentTypes.map((investment, idx) => (
          <GlassCard key={idx} className="relative overflow-hidden">
            <div className="mb-3 flex items-center gap-2">
              <div className="text-xl">{investment.icon}</div>
              <h3 className="font-medium">{investment.name}</h3>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-2xl font-bold">
                  ${investment.value.toLocaleString("en-US")}
                </p>
                <div className={`flex items-center ${investment.growth >= 0 ? 'text-success' : 'text-destructive'}`}>
                  {investment.growth >= 0 ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  <span className="text-sm">
                    ${Math.abs(investment.growth).toLocaleString("en-US")}
                  </span>
                </div>
              </div>
              <div className="relative h-16 w-16">
                <div className="absolute bottom-0 right-0 h-14 w-14 rounded-full bg-blue-500/10"></div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default PortfolioOverview;
