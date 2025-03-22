
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { User, Mail, Lock, Settings, Bell, CreditCard, LogOut, Edit, Wallet, UserPlus, Upload, HelpCircle } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("settings");

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

  const tabClass = (tab: string) =>
    `flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
      activeTab === tab
        ? "bg-secondary text-primary"
        : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
    }`;

  const profileItems = [
    { id: "settings", icon: Settings, label: "Account Settings" },
    { id: "preference", icon: Bell, label: "Preferences" },
    { id: "subscription", icon: CreditCard, label: "Subscription" },
    { id: "watchlist", icon: Wallet, label: "Watchlist" },
    { id: "invite", icon: UserPlus, label: "Invite Friends" },
    { id: "export", icon: Upload, label: "Export Data" },
    { id: "help", icon: HelpCircle, label: "Help & Support" },
    { id: "logout", icon: LogOut, label: "Log Out" },
  ];

  return (
    <div className="min-h-screen p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <motion.div variants={itemVariants} className="md:col-span-1">
          <Card className="relative">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="h-20 w-20 rounded-full overflow-hidden bg-secondary flex items-center justify-center relative">
                  <span className="text-2xl font-semibold text-foreground">SJ</span>
                  <div className="absolute inset-0 bg-gradient-radial from-blue-600/20 to-blue-800/40"></div>
                </div>
                <button className="absolute -right-1 -bottom-1 rounded-full p-1 bg-secondary text-primary">
                  <Edit className="h-3 w-3" />
                </button>
              </div>
              <h2 className="mt-3 text-lg font-medium">Sarah Johnson</h2>
              <p className="text-sm text-muted-foreground">Premium Member</p>
              <div className="w-full border-t border-border mt-4 pt-4">
                <ul className="space-y-1">
                  {profileItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={tabClass(item.id)}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-3">
          {activeTab === "settings" && (
            <Card title="Account Settings">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                    <div>
                      <h3 className="text-base font-medium">Personal Information</h3>
                      <p className="text-sm text-muted-foreground">Update your personal details</p>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary self-start">
                      Save Changes
                    </button>
                  </div>
                  <div className="glass-panel rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="text"
                            defaultValue="Sarah Johnson"
                            className="w-full bg-secondary py-2 pl-10 pr-4 rounded-lg text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="email"
                            defaultValue="sarah.johnson@example.com"
                            className="w-full bg-secondary py-2 pl-10 pr-4 rounded-lg text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Phone Number</label>
                        <input
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          className="w-full bg-secondary py-2 px-4 rounded-lg text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Country</label>
                        <select className="w-full bg-secondary py-2 px-4 rounded-lg text-sm">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>United Kingdom</option>
                          <option>Australia</option>
                          <option>India</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="text-base font-medium">Security</h3>
                    <p className="text-sm text-muted-foreground">Manage your password and security settings</p>
                  </div>
                  <div className="glass-panel rounded-lg p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Current Password</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="password"
                            placeholder="Enter current password"
                            className="w-full bg-secondary py-2 pl-10 pr-4 rounded-lg text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">New Password</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full bg-secondary py-2 pl-10 pr-4 rounded-lg text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Confirm New Password</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full bg-secondary py-2 pl-10 pr-4 rounded-lg text-sm"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Two-Factor Authentication</span>
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="twoFactor"
                            className="peer h-5 w-9 appearance-none rounded-full bg-secondary transition-colors 
                            checked:bg-primary checked:after:translate-x-4 after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                            after:h-4 after:w-4 after:rounded-full after:bg-gray-400 after:transition-all checked:after:bg-white"
                          />
                          <label htmlFor="twoFactor" className="sr-only">
                            Enable Two-Factor Authentication
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="text-base font-medium">Investment Preferences</h3>
                    <p className="text-sm text-muted-foreground">Set your investment goals and risk tolerance</p>
                  </div>
                  <div className="glass-panel rounded-lg p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Investment Goal</label>
                        <select className="w-full bg-secondary py-2 px-4 rounded-lg text-sm">
                          <option>Retirement Planning</option>
                          <option>Wealth Accumulation</option>
                          <option>Regular Income</option>
                          <option>Short-term Goals</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Risk Tolerance</label>
                        <select className="w-full bg-secondary py-2 px-4 rounded-lg text-sm">
                          <option>Conservative</option>
                          <option>Moderate</option>
                          <option>Aggressive</option>
                          <option>Very Aggressive</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Investment Timeline</label>
                        <select className="w-full bg-secondary py-2 px-4 rounded-lg text-sm">
                          <option>Less than 5 years</option>
                          <option>5-10 years</option>
                          <option>10-20 years</option>
                          <option>More than 20 years</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === "preference" && (
            <Card title="Preferences">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div>
                    <h3 className="text-base font-medium">Notification Settings</h3>
                    <p className="text-sm text-muted-foreground">Manage how we contact you</p>
                  </div>
                  <div className="glass-panel rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Portfolio Alerts</p>
                          <p className="text-xs text-muted-foreground">Price alerts, significant changes, etc.</p>
                        </div>
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="portfolioAlerts"
                            defaultChecked
                            className="peer h-5 w-9 appearance-none rounded-full bg-secondary transition-colors 
                            checked:bg-primary checked:after:translate-x-4 after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                            after:h-4 after:w-4 after:rounded-full after:bg-gray-400 after:transition-all checked:after:bg-white"
                          />
                          <label htmlFor="portfolioAlerts" className="sr-only">
                            Enable Portfolio Alerts
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Market News</p>
                          <p className="text-xs text-muted-foreground">Breaking news and market updates</p>
                        </div>
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="marketNews"
                            defaultChecked
                            className="peer h-5 w-9 appearance-none rounded-full bg-secondary transition-colors 
                            checked:bg-primary checked:after:translate-x-4 after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                            after:h-4 after:w-4 after:rounded-full after:bg-gray-400 after:transition-all checked:after:bg-white"
                          />
                          <label htmlFor="marketNews" className="sr-only">
                            Enable Market News
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Educational Content</p>
                          <p className="text-xs text-muted-foreground">New courses, webinars, and articles</p>
                        </div>
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="educationalContent"
                            className="peer h-5 w-9 appearance-none rounded-full bg-secondary transition-colors 
                            checked:bg-primary checked:after:translate-x-4 after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                            after:h-4 after:w-4 after:rounded-full after:bg-gray-400 after:transition-all checked:after:bg-white"
                          />
                          <label htmlFor="educationalContent" className="sr-only">
                            Enable Educational Content
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Product Updates</p>
                          <p className="text-xs text-muted-foreground">New features and improvements</p>
                        </div>
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="productUpdates"
                            defaultChecked
                            className="peer h-5 w-9 appearance-none rounded-full bg-secondary transition-colors 
                            checked:bg-primary checked:after:translate-x-4 after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                            after:h-4 after:w-4 after:rounded-full after:bg-gray-400 after:transition-all checked:after:bg-white"
                          />
                          <label htmlFor="productUpdates" className="sr-only">
                            Enable Product Updates
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="text-base font-medium">Display Settings</h3>
                    <p className="text-sm text-muted-foreground">Customize your dashboard view</p>
                  </div>
                  <div className="glass-panel rounded-lg p-4">
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Default Dashboard View</label>
                        <select className="w-full bg-secondary py-2 px-4 rounded-lg text-sm">
                          <option>Portfolio Overview</option>
                          <option>Market Summary</option>
                          <option>Watchlist</option>
                          <option>News Feed</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Chart Time Period</label>
                        <select className="w-full bg-secondary py-2 px-4 rounded-lg text-sm">
                          <option>1 Day</option>
                          <option>1 Week</option>
                          <option>1 Month</option>
                          <option>3 Months</option>
                          <option>1 Year</option>
                          <option>5 Years</option>
                        </select>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Always Use Dark Mode</span>
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="darkMode"
                            defaultChecked
                            className="peer h-5 w-9 appearance-none rounded-full bg-secondary transition-colors 
                            checked:bg-primary checked:after:translate-x-4 after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                            after:h-4 after:w-4 after:rounded-full after:bg-gray-400 after:transition-all checked:after:bg-white"
                          />
                          <label htmlFor="darkMode" className="sr-only">
                            Enable Dark Mode
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === "subscription" && (
            <Card title="Subscription Plan">
              <div className="space-y-6">
                <div className="glass-panel rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="inline-block px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full mb-2">
                        Current Plan
                      </div>
                      <h3 className="text-xl font-medium">Premium Plan</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Access to all advanced features and real-time data
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">$19.99</p>
                      <p className="text-sm text-muted-foreground">per month</p>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-border pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <div className="h-4 w-4 rounded-full bg-success/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-3 w-3 text-success"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Real-time market data</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <div className="h-4 w-4 rounded-full bg-success/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-3 w-3 text-success"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Advanced AI insights and recommendations</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <div className="h-4 w-4 rounded-full bg-success/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-3 w-3 text-success"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Unlimited watchlists and portfolio tracking</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <div className="h-4 w-4 rounded-full bg-success/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-3 w-3 text-success"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Access to premium educational content</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <div className="h-4 w-4 rounded-full bg-success/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-3 w-3 text-success"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Priority customer support</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="flex-1 rounded-lg bg-primary/10 py-2 text-primary hover:bg-primary/20 transition-colors text-sm">
                      Manage Subscription
                    </button>
                    <button className="flex-1 rounded-lg bg-destructive/10 py-2 text-destructive hover:bg-destructive/20 transition-colors text-sm">
                      Cancel Subscription
                    </button>
                  </div>
                </div>

                <div className="glass-panel rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-3">Billing Information</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">Card Number</label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="text"
                          defaultValue="**** **** **** 4242"
                          disabled
                          className="w-full bg-secondary py-2 pl-10 pr-4 rounded-lg text-sm opacity-70"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">Expiry Date</label>
                        <input
                          type="text"
                          defaultValue="09/24"
                          disabled
                          className="w-full bg-secondary py-2 px-4 rounded-lg text-sm opacity-70"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1">CVV</label>
                        <input
                          type="text"
                          defaultValue="***"
                          disabled
                          className="w-full bg-secondary py-2 px-4 rounded-lg text-sm opacity-70"
                        />
                      </div>
                    </div>
                    <button className="rounded-lg bg-secondary py-2 text-primary text-sm">
                      Update Payment Method
                    </button>
                  </div>
                </div>

                <div className="glass-panel rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-3">Billing History</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-separate border-spacing-0">
                      <thead>
                        <tr>
                          <th className="text-left pb-2 text-xs text-muted-foreground font-medium">Date</th>
                          <th className="text-left pb-2 text-xs text-muted-foreground font-medium">Invoice</th>
                          <th className="text-right pb-2 text-xs text-muted-foreground font-medium">Amount</th>
                          <th className="text-right pb-2 text-xs text-muted-foreground font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 text-sm">Apr 01, 2023</td>
                          <td className="py-2 text-sm text-primary">#INV-4219</td>
                          <td className="py-2 text-sm text-right">$19.99</td>
                          <td className="py-2 text-right">
                            <span className="inline-block px-2 py-1 text-xs bg-success/20 text-success rounded-full">
                              Paid
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 text-sm">Mar 01, 2023</td>
                          <td className="py-2 text-sm text-primary">#INV-4186</td>
                          <td className="py-2 text-sm text-right">$19.99</td>
                          <td className="py-2 text-right">
                            <span className="inline-block px-2 py-1 text-xs bg-success/20 text-success rounded-full">
                              Paid
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 text-sm">Feb 01, 2023</td>
                          <td className="py-2 text-sm text-primary">#INV-4152</td>
                          <td className="py-2 text-sm text-right">$19.99</td>
                          <td className="py-2 text-right">
                            <span className="inline-block px-2 py-1 text-xs bg-success/20 text-success rounded-full">
                              Paid
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
