
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Markets from "./pages/Markets";
import Insights from "./pages/Insights";
import AiChat from "./pages/AiChat";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import NewsPage from "./pages/NewsPage";
import AiRecommendation from "./pages/AiRecommendation";
import TaxOptimization from "./pages/TaxOptimization";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/markets" element={<Markets />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/ai-chat" element={<AiChat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/ai-recommendation/:id" element={<AiRecommendation />} />
                <Route path="/tax-optimization" element={<TaxOptimization />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
