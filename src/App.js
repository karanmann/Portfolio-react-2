import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import ForMore from "./components/ForMore";
import Projects from "./components/Projects";
import Skills from "./components/TechAndSkills";
import Navbar from "./components/Navbar";
import ContactMe from "./components/ContactMe";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/GlobalStyles";
import { lightTheme, darkTheme } from "./style/Themes";

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Navbar themeToggler={themeToggler} theme={theme}/>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/blogs" element={<Blogs />} exact />
            <Route path="/footer" element={<Footer />} exact />
            <Route path="/formore" element={<ForMore />} exact />
            <Route path="/projects" element={<Projects />} exact />
            <Route path="/techandskills" element={<Skills />} exact />
            <Route path="/contactme" element={<ContactMe />} exact />
          </Routes>
        </div>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
