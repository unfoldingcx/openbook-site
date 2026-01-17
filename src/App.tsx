import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import { useEffect } from "react"
import { AnimatePresence } from "motion/react"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Technologies from "./pages/Technologies"
import Clients from "./pages/Clients"
import Contact from "./pages/Contact"
import Accounting from "./pages/services/Accounting"
import Financial from "./pages/services/Financial"
import Tax from "./pages/services/Tax"
import Payroll from "./pages/services/Payroll"
import Training from "./pages/Training"

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
