import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureCardGrid = ({ features }) => {
  return (
    <div className="flex gap-6 justify-center max-md:flex-col max-md:items-center">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeatureCardGrid;
