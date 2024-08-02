import { useEffect } from "react";
import {
  Header,
  Education,
  Languages,
  Technologies,
  SoftSkills,
  Footer,
  Projects,
  Hero,
  GetInTouch,
  GoUpBtn,
} from "../index";

export const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  return (
    <div className="container">
      <Header />
      <Hero />
      <Education />
      <Languages />
      <Technologies />
      <SoftSkills />
      <Projects />
      <GetInTouch />
      <GoUpBtn />
      <Footer />
    </div>
  );
};
