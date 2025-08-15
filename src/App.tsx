import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { I18nProvider } from "@/i18n/context";
import { LocaleRedirect, getLocaleFromPath } from "@/components/LocaleRedirect";
import RootLayout from "@/app/RootLayout";
import Index from "./pages/Index";
import MedicalConsultation from "./pages/MedicalConsultation";
import NotFound from "./pages/NotFound";
import Cookies from "js-cookie";
import { Locale, DEFAULT_LOCALE, LOCALE_COOKIE_NAME } from "@/i18n/types";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Root redirect */}
            <Route path="/" element={<LocaleRedirect />} />
            
            {/* Localized routes */}
            <Route path="/:locale/*" element={<LocalizedApp />} />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/en" replace />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

function LocalizedApp() {
  const currentPath = window.location.pathname;
  const locale = getLocaleFromPath(currentPath) || DEFAULT_LOCALE;
  
  // Set locale cookie if not exists
  const cookieLocale = Cookies.get(LOCALE_COOKIE_NAME);
  if (!cookieLocale) {
    Cookies.set(LOCALE_COOKIE_NAME, locale, { expires: 365 });
  }

  return (
    <I18nProvider initialLocale={locale as Locale}>
      <RootLayout>
        <Routes>
          <Route index element={<Index />} />
          <Route path="medical-consultation" element={<MedicalConsultation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </I18nProvider>
  );
}

export default App;
