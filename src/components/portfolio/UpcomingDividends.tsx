
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

const UpcomingDividends = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div variants={itemVariants}>
      <GlassCard title="Upcoming Dividends">
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-secondary/40 rounded-lg p-3">
            <div>
              <p className="text-sm font-medium">Apple Inc. (AAPL)</p>
              <p className="text-xs text-muted-foreground">Ex-Dividend Date: May 12, 2023</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-success">$0.23 per share</p>
              <p className="text-xs text-muted-foreground">Est. $56.35 total</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-secondary/40 rounded-lg p-3">
            <div>
              <p className="text-sm font-medium">Microsoft (MSFT)</p>
              <p className="text-xs text-muted-foreground">Ex-Dividend Date: May 18, 2023</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-success">$0.68 per share</p>
              <p className="text-xs text-muted-foreground">Est. $81.60 total</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-secondary/40 rounded-lg p-3">
            <div>
              <p className="text-sm font-medium">Johnson & Johnson (JNJ)</p>
              <p className="text-xs text-muted-foreground">Ex-Dividend Date: May 22, 2023</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-success">$1.13 per share</p>
              <p className="text-xs text-muted-foreground">Est. $45.20 total</p>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default UpcomingDividends;
