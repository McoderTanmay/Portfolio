import "./App.css";
import { useEffect, useState } from "react";
import Page1 from "./components/page_1/page1";
import Projects from "./components/projects/projects";
import Exp from "./components/Experiance/exp";
import Contact from "./components/contact/Contact";

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const scrollHandeler = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      }
      else{
        setScroll(false);
      }
    };
    window.addEventListener('scroll',scrollHandeler);
  },[scroll]);
  // console.log(scroll);
  return (
    <div className="App">
      <Page1 onScroll={scroll}></Page1>
      <Projects></Projects>
      <Exp></Exp>
      <Contact />
    </div>
  );
}

export default App;
