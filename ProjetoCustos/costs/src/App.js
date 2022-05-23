import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Company from "./componets/pages/Company";
import Contact from "./componets/pages/Contact";
import Home from "./componets/pages/Home";
import NewProject from "./componets/pages/NewProject";
import Container from "./componets/layout/Container";
import Navbar from "./componets/layout/Navbar";
import Projects from "./componets/pages/Projects";
import Footer from "./componets/layout/Footer";
import Project from "./componets/pages/Project";
function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
