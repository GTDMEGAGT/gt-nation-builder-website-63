
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
import About from "./pages/About";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Story from "./pages/Story";
import Content from "./pages/Content";
import Contact from "./pages/Contact";
import Sponsor from "./pages/Sponsor";

// Create Privacy and Terms pages
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Partner from "./pages/Partner";

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
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/services" element={<Services />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/story" element={<Story />} />
                <Route path="/content" element={<Content />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sponsor" element={<Sponsor />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/partner" element={<Partner />} />
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
