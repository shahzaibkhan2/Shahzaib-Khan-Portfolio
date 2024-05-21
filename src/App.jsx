import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import AboutMe from "./components/aboutMe/AboutMe.jsx";
import Services from "./components/services/Services.jsx";
import MyWork from "./components/myWork/MyWork.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import WorkDetails from "./components/workDetails/WorkDetails.jsx";
import { useSelector } from "react-redux";

const App = () => {
  const recentProject = useSelector((state) => state.NavbarSlice.recentProject);
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <MyWork />
      {recentProject && <WorkDetails />}
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
