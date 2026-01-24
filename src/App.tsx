import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; // Import this
import { SpeedInsights } from "@vercel/speed-insights/react"; // Import this
import Index from "./pages/Index";
import Swag from "./pages/Swag";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <main role="main"> 
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/swag" element={<Swag />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* Add the components here to track all pages */}
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;