import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className="flex-1 p-10 bg-white rounded-3xl max-w-[377px] shadow-[0px_17px_37px_rgba(118,133,162,0.08)] max-md:max-w-full">
      <img className="mb-6" src="/Accept.svg" alt="" />
      <h3 className="mb-10 text-4xl font-medium text-stone-800 max-sm:text-3xl">
        {title}
      </h3>
      <p className="text-2xl leading-9 text-neutral-700 max-sm:text-xl">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
