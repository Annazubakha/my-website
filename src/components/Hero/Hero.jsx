import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <section className="mt-[80px]" id="aboutme">
      <div className="bg-burger-menu-bg pt-[20px] rounded-[20px] custom-shadow-hero">
        <img
          src="images/myPhoto.png"
          alt="Anna's photo"
          className="rounded-[20px] mb-[20px]"
        />
      </div>
      <div className=" flex flex-wrap gap-[10px] text-[32px] font-bold tracking-[-0.03em] mb-[20px]">
        <h1>
          I&#39;m <span className="text-accent">Anna Zubakha</span> a
          {"                                    "}
        </h1>
        <Typewriter
          options={{
            strings: ["Frontend Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <p className="text-justify tracking-[-0.03em] leading-[1.29] mb-[20px]">
        With expertise in modern web technologies and tools, I possess solid
        teamwork skills and experience with GitHub. I am dedicated to time
        management and understand the critical importance of meeting deadlines.
        I am always eager to learn and push the boundaries of my knowledge and
        skills.
      </p>
      <a href="/resume.pdf" download>
        <button className="bg-accent  hover:bg-accent-hover focus:bg-accent-hover h-[40px] rounded-[12px] w-[160px] mb-[20px]">
          Download CV
        </button>
      </a>
    </section>
  );
};
