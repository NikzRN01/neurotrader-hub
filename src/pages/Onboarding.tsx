
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";
import PageTransition from "@/components/layout/PageTransition";

const Onboarding = () => {
  const { updateUserPreferences, isLoading } = useAuth();
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    financial_goal: "",
    risk_tolerance: "moderate",
    investment_preference: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserPreferences(preferences);
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black py-12 px-4">
        <Card className="w-full max-w-md border-0 bg-card/50 backdrop-blur-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Complete Your Profile</CardTitle>
            <CardDescription className="text-center">
              Tell us about your investment goals and preferences
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="financial_goal">What are your financial goals?</Label>
                    <Textarea
                      id="financial_goal"
                      name="financial_goal"
                      placeholder="E.g., Retirement planning, saving for a house, wealth growth..."
                      value={preferences.financial_goal}
                      onChange={handleInputChange}
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="risk_tolerance">Risk Tolerance</Label>
                    <Select
                      value={preferences.risk_tolerance}
                      onValueChange={(value) => handleSelectChange("risk_tolerance", value)}
                    >
                      <SelectTrigger id="risk_tolerance">
                        <SelectValue placeholder="Select risk tolerance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Safety First</SelectItem>
                        <SelectItem value="moderate">Moderate - Balanced Approach</SelectItem>
                        <SelectItem value="high">High - Growth Focused</SelectItem>
                        <SelectItem value="aggressive">Aggressive - Maximum Growth</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button 
                    type="button" 
                    className="w-full" 
                    onClick={() => setStep(2)}
                  >
                    Continue
                  </Button>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="investment_preference">Investment Preferences</Label>
                    <Textarea
                      id="investment_preference"
                      name="investment_preference"
                      placeholder="E.g., Specific sectors, ESG investments, dividend stocks..."
                      value={preferences.investment_preference}
                      onChange={handleInputChange}
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-1/2" 
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      className="w-1/2"
                      disabled={isLoading}
                    >
                      {isLoading ? "Saving..." : "Complete Setup"}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </form>
          <CardFooter className="flex flex-col space-y-4">
            <Separator />
            <p className="text-xs text-muted-foreground text-center">
              Your preferences help us provide personalized investment recommendations
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageTransition>
  );
};

export default Onboarding;
