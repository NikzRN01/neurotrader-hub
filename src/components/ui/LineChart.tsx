
import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { mockPortfolioData, timeFrameOptions } from "@/utils/mockData";

interface LineChartProps {
  data: { name: string; value: number }[];
  height?: number;
  showTimeFrames?: boolean;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel rounded p-2 text-xs shadow-md">
        <p className="mb-1 font-medium">{label}</p>
        <p className="text-primary">
          ${payload[0].value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </p>
      </div>
    );
  }
  return null;
};

const LineChart = ({ data, height = 200, showTimeFrames = true }: LineChartProps) => {
  const [activeTimeFrame, setActiveTimeFrame] = useState<string>("1M");
  const [chartData, setChartData] = useState(data);

  // This would typically fetch different data based on the timeframe
  // For demo purposes, we're just using the same data with slight variations
  useEffect(() => {
    // Simulate different data for different timeframes
    const maxValue = Math.max(...data.map(d => d.value));
    let multiplier = 1;
    
    switch(activeTimeFrame) {
      case "1W": multiplier = 0.98; break;
      case "1M": multiplier = 1; break;
      case "6M": multiplier = 0.9; break;
      case "1Y": multiplier = 0.8; break;
      case "All": multiplier = 0.7; break;
      default: multiplier = 1;
    }
    
    const adjustedData = data.map(item => ({
      ...item,
      value: Math.round(item.value * (0.95 + Math.random() * 0.1) * multiplier)
    }));
    
    setChartData(adjustedData);
  }, [activeTimeFrame, data]);

  return (
    <div className="w-full">
      {showTimeFrames && (
        <div className="mb-4 flex justify-end space-x-2">
          {timeFrameOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveTimeFrame(option)}
              className={`btn-pill ${
                activeTimeFrame === option
                  ? "bg-primary/10 text-primary"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <div className="chart-container h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="name" 
              stroke="#9ca3af" 
              fontSize={10} 
              tickLine={false}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            />
            <YAxis 
              stroke="#9ca3af" 
              fontSize={10} 
              tickFormatter={(value) => `$${value.toLocaleString()}`}
              tickLine={false}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"
              activeDot={{ r: 6, fill: "#3b82f6", stroke: "#fff" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;
