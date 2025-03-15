
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consumer" element={<ConsumerPage />} />
          <Route path="/consumer/new-installation/:type" element={<InstallationTypePage />} />
          <Route path="/consumer/new-installation/:type/:gridType" element={<GridFormPage />} />
          <Route path="/consumer/vendors" element={<VendorListPage />} />
          <Route path="/vendor/:id" element={<VendorDetailPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/payment/:vendorId" element={<PaymentPage />} />
          <Route path="/vendor" element={<VendorPage />} />
          <Route path="/vendor/register" element={<VendorRegisterPage />} />
          <Route path="/vendor/login" element={<VendorLoginPage />} />
          <Route path="/vendor/dashboard" element={<VendorDashboardPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
