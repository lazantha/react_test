import * as React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes, // Import Routes component
  Route
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NodeList from './pages/PageList';
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NodeList />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
