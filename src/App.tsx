import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import BookingCalendar from './components/BookingCalendar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CancellationPolicy from './components/CancellationPolicy';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Amenities />
      <BookingCalendar />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;