import React from "react";

const Hero = () => {
  return (
    <section className="flex overflow-hidden relative px-20 pt-32 pb-20 max-md:flex-col max-md:px-10 max-md:pt-24 max-md:pb-10">
      <img
        src="/robot.png"
        alt="Hero illustration"
        className="object-cover absolute md:-right-5 top-0 md:top-2/4 -translate-y-2/4 h-[787px] w-[574px] max-md:relative max-md:mt-10 max-md:w-full max-md:h-auto"
      />
      <div className="max-w-[664px] max-md:max-w-full">
        <h1 className="mb-6 text-7xl text-red-600 leading-[120px] max-sm:text-6xl">
          OHT AI Tools
        </h1>
        <p className="text-lg leading-7 text-neutral-700">
          OpsHeaven Technologies (OHT) is a leading AI programming company
          dedicated to developing cutting-edge solutions that enhance
          productivity and efficiency across industries. By harnessing the power
          of artificial intelligence, OHT simplifies complex tasks, automates
          workflows, and drives smarter decision-making. Our AI-driven tools are
          designed to optimize business operations, reduce manual effort, and
          improve overall performance. With a commitment to innovation, OHT
          continuously pushes the boundaries of AI technology to deliver
          intelligent, seamless, and future-ready solutions for businesses of
          all sizes.
        </p>
      </div>
    </section>
  );
};

export default Hero;
