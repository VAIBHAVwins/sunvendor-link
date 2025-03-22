
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import ConsumerPage from "./pages/ConsumerPage";
import InstallationTypePage from "./pages/InstallationTypePage";
import GridFormPage from "./pages/GridFormPage";
import VendorListPage from "./pages/VendorListPage";
import VendorDetailPage from "./pages/VendorDetailPage";
import SignupPage from "./pages/SignupPage";
import PaymentPage from "./pages/PaymentPage";
import VendorPage from "./pages/VendorPage";
import VendorRegisterPage from "./pages/VendorRegisterPage";
import VendorLoginPage from "./pages/VendorLoginPage";
import VendorDashboardPage from "./pages/VendorDashboardPage";
import CustomerDashboardPage from "./pages/CustomerDashboardPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";
import ServiceRequestPage from "./pages/ServiceRequestPage";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Theme provider component to apply different themes based on route
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  useEffect(() => {
    const isVendorRoute = location.pathname.startsWith('/vendor');
    const isConsumerRoute = location.pathname.startsWith('/consumer');
    
    if (isVendorRoute) {
      document.body.classList.add('vendor-theme');
      document.body.classList.remove('consumer-theme');
    } else if (isConsumerRoute) {
      document.body.classList.add('consumer-theme');
      document.body.classList.remove('vendor-theme');
    } else {
      // Default/home routes
      document.body.classList.remove('vendor-theme', 'consumer-theme');
    }
    
    return () => {
      document.body.classList.remove('vendor-theme', 'consumer-theme');
    };
  }, [location]);
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/consumer" element={<ConsumerPage />} />
            <Route path="/consumer/new-installation/:type" element={<InstallationTypePage />} />
            <Route path="/consumer/new-installation/:type/:gridType" element={<GridFormPage />} />
            <Route path="/consumer/vendors" element={<VendorListPage />} />
            <Route path="/consumer/dashboard" element={<CustomerDashboardPage />} />
            <Route path="/consumer/service-request/:serviceId" element={<ServiceRequestPage />} />
            <Route path="/vendor/:id" element={<VendorDetailPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/payment/:vendorId" element={<PaymentPage />} />
            <Route path="/vendor" element={<VendorPage />} />
            <Route path="/vendor/register" element={<VendorRegisterPage />} />
            <Route path="/vendor/login" element={<VendorLoginPage />} />
            <Route path="/vendor/dashboard" element={<VendorDashboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
