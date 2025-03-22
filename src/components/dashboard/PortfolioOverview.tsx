
import { useState } from "react";
import { ArrowUpRight, ArrowDownRight, TrendingUp, AlertCircle, Wallet } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import LineChart from "@/components/ui/LineChart";
import { mockPortfolioData, sampleChartData } from "@/utils/mockData";

const PortfolioOverview = () => {
  const [selectedAccountType, setSelectedAccountType] = useState<string>("All");

  const accountTypeClass = (type: string) =>
    `px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
      selectedAccountType === type
        ? "bg-primary/10 text-primary"
        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
    }`;

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
        <div className="flex gap-2">
          <button
            className={accountTypeClass("All")}
            onClick={() => setSelectedAccountType("All")}
          >
            All Accounts
          </button>
          {mockPortfolioData.accountTypes.map((account) => (
            <button
              key={account.name}
              className={accountTypeClass(account.name)}
              onClick={() => setSelectedAccountType(account.name)}
            >
              {account.name}
            </button>
          ))}
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

        <LineChart data={sampleChartData} showTimeFrames={true} />
      </GlassCard>

      {/* Account Types */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {mockPortfolioData.accountTypes.map((account) => (
          <GlassCard key={account.name} className="relative overflow-hidden">
            <div className="mb-3 flex items-center gap-2">
              <Wallet className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-medium">{account.name} Account</h3>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-2xl font-bold">
                  ${account.value.toLocaleString("en-US")}
                </p>
                <div className={`flex items-center ${account.growth >= 0 ? 'text-success' : 'text-destructive'}`}>
                  {account.growth >= 0 ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  <span className="text-sm">
                    ${Math.abs(account.growth).toLocaleString("en-US")}
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
