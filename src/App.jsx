
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from "./components/HomePages/Home"
import About from './components/AboutPage/About';
import Contact from "./components/ContactPage/Contact";
import Service from "./components/ServicePages/Service";
import ChatbotForm from "./components/ChatbotForm";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </main>
        <ChatbotForm />
        <Footer />
      </div>
    </Router>
  )
}

export default App
