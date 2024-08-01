import {
  Header,
  Education,
  Languages,
  Technologies,
  SoftSkills,
  Footer,
  Projects,
} from "../index";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Education />
      <Languages />
      <Technologies />
      <SoftSkills />
      <Projects />
      <Footer />
    </div>
  );
};
