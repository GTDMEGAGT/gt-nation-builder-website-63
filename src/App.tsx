import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "./providers/ThemeProvider";

// Pages
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound"; 
// ... other page imports ...

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <BrowserRouter basename="/">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/portfolio" element={<Portfolio />} />
                {/* ... other routes ... */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <Analytics />
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
