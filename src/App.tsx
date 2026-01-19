import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import { useEffect, lazy, Suspense } from "react"
import { AnimatePresence } from "motion/react"
import Layout from "./components/layout/Layout"

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Services = lazy(() => import("./pages/Services"))
const Technologies = lazy(() => import("./pages/Technologies"))
const Clients = lazy(() => import("./pages/Clients"))
const Contact = lazy(() => import("./pages/Contact"))
const Accounting = lazy(() => import("./pages/services/Accounting"))
const Financial = lazy(() => import("./pages/services/Financial"))
const Tax = lazy(() => import("./pages/services/Tax"))
const Payroll = lazy(() => import("./pages/services/Payroll"))
const Training = lazy(() => import("./pages/Training"))

// Minimal loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#010101]">
      <div className="w-8 h-8 border-2 border-[#9f7423]/30 border-t-[#9f7423] rounded-full animate-spin" />
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Suspense fallback={<PageLoader />}>
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
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  )
}

export default App
