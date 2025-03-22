
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import LineChart from "@/components/ui/LineChart";
import { ArrowRight, Calendar, TrendingUp, AlertCircle, BarChart3 } from "lucide-react";
import { newsItems, insightRecommendations, sampleChartData } from "@/utils/mockData";

const Insights = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <motion.div variants={itemVariants}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gradient">AI Insights</h1>
              <p className="text-muted-foreground">AI-powered analysis tailored to your portfolio</p>
            </div>
          </div>
        </motion.div>

        {/* Market Predictions */}
        <motion.div variants={itemVariants}>
          <Card>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-lg font-medium mb-4">Market Predictions</h3>
                <div className="space-y-3">
                  <div className="glass-panel rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-sm font-medium">Technology Sector Outlook</h4>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400">Bullish</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      AI advancements and cloud computing growth will likely drive tech stocks higher in the coming quarter.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-secondary px-1.5 py-0.5 rounded">90 Days</span>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-success" />
                        <span className="text-xs text-success">+8-12% predicted</span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-sm font-medium">Energy Sector Outlook</h4>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400">Neutral</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Supply constraints balanced by reduced demand could keep energy stocks in a sideways pattern.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-secondary px-1.5 py-0.5 rounded">60 Days</span>
                      <div className="flex items-center gap-1">
                        <BarChart3 className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">-2% to +3% predicted</span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-sm font-medium">Financial Sector Outlook</h4>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-red-500/20 text-red-400">Bearish</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Rising interest rates and potential loan defaults may pressure financial stocks in the near term.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-secondary px-1.5 py-0.5 rounded">30 Days</span>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-destructive rotate-180" />
                        <span className="text-xs text-destructive">-5-7% predicted</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-lg font-medium mb-4">Sector Performance Forecast</h3>
                <LineChart data={sampleChartData} />
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    Projections based on market trends, economic indicators, and sentiment analysis
                  </div>
                  <button className="text-sm text-primary flex items-center gap-1">
                    <span>View detailed analysis</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Earnings Calendar and Recommendations */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Upcoming Earnings">
            <div className="space-y-3">
              <div className="glass-panel rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">Google (GOOGL)</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Apr 30, 2023 | After Market Close</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Est. EPS</p>
                    <p className="text-sm font-medium">$1.32</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">Apple (AAPL)</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">May 2, 2023 | After Market Close</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Est. EPS</p>
                    <p className="text-sm font-medium">$1.43</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">Microsoft (MSFT)</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">May 5, 2023 | After Market Close</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Est. EPS</p>
                    <p className="text-sm font-medium">$2.24</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">Amazon (AMZN)</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">May 8, 2023 | After Market Close</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Est. EPS</p>
                    <p className="text-sm font-medium">$0.35</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 text-center">
              <button className="text-sm text-primary flex items-center justify-center gap-1 w-full">
                <span>View full earnings calendar</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </Card>
          
          <Card title="AI Recommendations">
            <div className="space-y-3">
              {insightRecommendations.map((rec) => (
                <div key={rec.id} className="glass-panel rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-medium">{rec.title}</h4>
                    <span className={`text-xs px-1.5 py-0.5 rounded ${
                      rec.impact === 'High' ? 'bg-red-500/20 text-red-400' : 
                      rec.impact === 'Medium' ? 'bg-amber-500/20 text-amber-400' : 
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {rec.impact}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{rec.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-secondary px-1.5 py-0.5 rounded">{rec.type}</span>
                    <button className="text-primary text-xs flex items-center gap-1">
                      <span>Take action</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-center">
              <button className="text-sm text-primary flex items-center justify-center gap-1 w-full">
                <span>View all recommendations</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </Card>
        </motion.div>

        {/* Regulatory Alerts and Sentiment Analysis */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Regulatory Alerts">
            <div className="space-y-3">
              <div className="flex justify-between items-start p-3 glass-panel rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">SEC Proposes New Disclosure Rules</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      The SEC has proposed new rules that would require companies to disclose climate-related risks. This may impact reporting requirements for companies in your portfolio.
                    </p>
                  </div>
                </div>
                <button className="text-primary">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex justify-between items-start p-3 glass-panel rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Fed Rate Decision Upcoming</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      The Federal Reserve is expected to announce interest rate decisions on May 15. This could impact bond values and interest-sensitive stocks in your portfolio.
                    </p>
                  </div>
                </div>
                <button className="text-primary">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex justify-between items-start p-3 glass-panel rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Tax Filing Deadline Approaching</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      The deadline for filing income tax returns is April 15. Consider reviewing your investment income and potential deductions.
                    </p>
                  </div>
                </div>
                <button className="text-primary">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Card>
          
          <Card title="Sentiment Analysis">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm">Apple Inc. (AAPL)</p>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400">Positive</span>
                </div>
                <div className="glass-panel rounded-full h-2.5 bg-secondary overflow-hidden">
                  <div className="bg-blue-500 h-full" style={{ width: "75%" }}></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">Negative</span>
                  <span className="text-xs text-muted-foreground">Positive</span>
                </div>
                <p className="text-xs mt-1 text-muted-foreground">Based on 1,243 news articles and 5,872 social media posts</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm">Tesla (TSLA)</p>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400">Mixed</span>
                </div>
                <div className="glass-panel rounded-full h-2.5 bg-secondary overflow-hidden">
                  <div className="bg-amber-500 h-full" style={{ width: "55%" }}></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">Negative</span>
                  <span className="text-xs text-muted-foreground">Positive</span>
                </div>
                <p className="text-xs mt-1 text-muted-foreground">Based on 987 news articles and 12,453 social media posts</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm">Netflix (NFLX)</p>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-red-500/20 text-red-400">Negative</span>
                </div>
                <div className="glass-panel rounded-full h-2.5 bg-secondary overflow-hidden">
                  <div className="bg-red-500 h-full" style={{ width: "35%" }}></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">Negative</span>
                  <span className="text-xs text-muted-foreground">Positive</span>
                </div>
                <p className="text-xs mt-1 text-muted-foreground">Based on 765 news articles and 8,932 social media posts</p>
              </div>
            </div>
            <div className="mt-3 text-center">
              <button className="text-sm text-primary flex items-center justify-center gap-1 w-full">
                <span>View detailed sentiment analysis</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Insights;
