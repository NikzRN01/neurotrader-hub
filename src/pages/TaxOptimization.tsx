
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight, CheckCircle, AlertCircle, ShieldCheck } from "lucide-react";

const TaxOptimization = () => {
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

  const taxStrategies = [
    {
      title: "Tax-Loss Harvesting",
      description: "Offset capital gains by selling investments at a loss",
      benefits: ["Reduce taxable income by up to $3,000", "Offset capital gains", "Maintain overall market exposure"],
      opportunitiesFound: 3,
      potentialSavings: "$1,240"
    },
    {
      title: "Tax-Efficient Fund Placement",
      description: "Place tax-inefficient investments in tax-advantaged accounts",
      benefits: ["Reduce tax drag on returns", "Maximize after-tax returns", "Optimize asset location"],
      opportunitiesFound: 2,
      potentialSavings: "$850"
    },
    {
      title: "Qualified Dividend Investing",
      description: "Focus on investments that pay qualified dividends",
      benefits: ["Lower tax rates on qualified dividends", "Long-term investment focus", "Potential for stable income"],
      opportunitiesFound: 1,
      potentialSavings: "$620"
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <Link to="/" className="text-primary hover:text-primary/80 transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gradient">Tax Optimization</h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <h2 className="text-xl font-medium mb-3">Tax Optimization Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Tax optimization strategies can significantly improve your after-tax returns. 
                  Our AI has analyzed your portfolio and identified several opportunities to reduce 
                  your tax burden while maintaining your investment strategy.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="glass-panel rounded-lg p-4 border-l-4 border-blue-500">
                    <h3 className="text-lg font-medium">$2,710</h3>
                    <p className="text-xs text-muted-foreground">Potential Annual Tax Savings</p>
                  </div>
                  <div className="glass-panel rounded-lg p-4 border-l-4 border-green-500">
                    <h3 className="text-lg font-medium">6</h3>
                    <p className="text-xs text-muted-foreground">Optimization Opportunities</p>
                  </div>
                  <div className="glass-panel rounded-lg p-4 border-l-4 border-purple-500">
                    <h3 className="text-lg font-medium">0.8%</h3>
                    <p className="text-xs text-muted-foreground">Potential Return Improvement</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="glass-panel rounded-lg p-4 bg-amber-500/10 border border-amber-500/20 h-full flex flex-col justify-center">
                  <div className="mb-4 flex justify-center">
                    <ShieldCheck className="h-12 w-12 text-amber-400" />
                  </div>
                  <h3 className="text-center text-lg font-medium mb-2">Tax Optimization Assistant</h3>
                  <p className="text-center text-sm text-muted-foreground mb-4">
                    Get personalized guidance on implementing tax strategies for your portfolio
                  </p>
                  <Button className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30">
                    Start Tax Consultation
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-medium mb-4">Recommended Tax Strategies</h2>
          
          <div className="space-y-4">
            {taxStrategies.map((strategy, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-lg font-medium mb-2">{strategy.title}</h3>
                    <p className="text-muted-foreground mb-3">{strategy.description}</p>
                    
                    <h4 className="text-sm font-medium mb-2">Benefits:</h4>
                    <ul className="mb-4 space-y-1">
                      {strategy.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="outline" className="flex items-center gap-1">
                      <span>Learn more</span>
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="md:w-1/3 glass-panel rounded-lg p-4">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="text-center mb-4">
                        <h4 className="text-sm font-medium mb-1">Opportunities Found</h4>
                        <div className="flex items-center justify-center gap-1">
                          <AlertCircle className="h-4 w-4 text-amber-400" />
                          <span className="text-xl font-bold">{strategy.opportunitiesFound}</span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <h4 className="text-sm font-medium mb-1">Potential Savings</h4>
                        <p className="text-xl font-bold text-success">{strategy.potentialSavings}</p>
                        <p className="text-xs text-muted-foreground">per year</p>
                      </div>
                      
                      <Button className="mt-4 w-full">Implement Strategy</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TaxOptimization;
