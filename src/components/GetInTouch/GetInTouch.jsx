import { Contacts, Title } from "../index";

export const GetInTouch = () => {
  return (
    <section className="flex flex-col items-center" id="contacts">
      <Title>Get in touch</Title>
      <Contacts />
    </section>
  );
};
