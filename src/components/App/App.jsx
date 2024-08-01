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
