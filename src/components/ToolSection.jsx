import React from "react";

const ToolSection = ({
  title,
  description,
  ctaText,
  children,
  id,
  bgColor = "bg-white",
  url,
}) => {
  return (
    <section id={id} className={`p-20  bg-opacity-20 ${bgColor}`}>
      <div className="mx-auto my-0 text-center max-w-[980px]">
        <h2 className="mb-6 text-6xl text-[#f02432] leading-[90px] max-sm:text-5xl">
          {title}
        </h2>
        <p className="mb-10 text-2xl leading-9 text-neutral-700 max-sm:text-xl">
          {description}
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href={url}
          className="px-2 py-5 mx-auto block my-0 text-2xl font-bold text-white bg-[#f02432] rounded-xl cursor-pointer w-[348px]"
        >
          {ctaText || "Check it out!"}
        </a>
      </div>
      <div className="mt-16">{children}</div>
    </section>
  );
};

export default ToolSection;
