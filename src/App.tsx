import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Component, useEffect, lazy, Suspense } from "react";
import type { ReactNode } from "react";
import { AnimatePresence } from "motion/react";
import Layout from "./components/layout/Layout";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Technologies = lazy(() => import("./pages/Technologies"));
const Clients = lazy(() => import("./pages/Clients"));
const Contact = lazy(() => import("./pages/Contact"));
const Accounting = lazy(() => import("./pages/services/Accounting"));
const Financial = lazy(() => import("./pages/services/Financial"));
const Tax = lazy(() => import("./pages/services/Tax"));
const Payroll = lazy(() => import("./pages/services/Payroll"));
const Training = lazy(() => import("./pages/Training"));
const Content = lazy(() => import("./pages/Content"));
const TaxReform = lazy(() => import("./pages/content/TaxReform"));
const Sinief = lazy(() => import("./pages/content/Sinief"));

// Hoisted static fallback — avoids re-creation on each render (rendering-hoist-jsx)
const pageLoader = (
  <div className="min-h-screen flex items-center justify-center bg-[#010101]">
    <div className="w-8 h-8 border-2 border-[#9f7423]/30 border-t-[#9f7423] rounded-full animate-spin" />
  </div>
);

// Error boundary for lazy-loaded route failures (reliability)
interface ErrorBoundaryState {
  hasError: boolean;
}

class RouteErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#010101]">
          <div className="text-center">
            <p className="text-white/70 text-lg mb-4">
              Something went wrong loading this page.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="px-6 py-3 bg-[#9f7423] text-white font-medium rounded-full hover:bg-[#b8862a] transition-colors"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <RouteErrorBoundary>
      <Suspense fallback={pageLoader}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/accounting" element={<Accounting />} />
            <Route path="/services/financial" element={<Financial />} />
            <Route path="/services/tax" element={<Tax />} />
            <Route path="/services/payroll" element={<Payroll />} />
            <Route path="/training" element={<Training />} />
            <Route path="/content" element={<Content />} />
            <Route path="/content/reforma-tributaria-e-imoveis" element={<TaxReform />} />
            <Route path="/content/ajuste-sinief-49" element={<Sinief />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </RouteErrorBoundary>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
