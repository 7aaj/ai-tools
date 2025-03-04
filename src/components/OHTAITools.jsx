"use client";
import React from "react";
import FeatureCardGrid from "./FeatureCardGrid";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ScreenshotGallery from "./ScreenshotGallery";
import ToolSection from "./ToolSection";
import toolUrls from "../urls";

const OHTAITools = () => {
  // Feature data for each section
  const idpFeatures = [
    {
      icon: "file-analytics",
      title: "Automated Data Extraction",
      description:
        "Uses AI to accurately extract key information from documents, reducing manual input and errors.",
    },
    {
      icon: "arrows-right-left",
      title: "Seamless Workflow Integration",
      description:
        "Easily integrates with existing business systems, streamlining document management and improving efficiency.",
    },
    {
      icon: "category",
      title: "Smart Categorization & Organization",
      description:
        "Automatically classifies, sorts, and processes documents, saving time and enhancing productivity.",
    },
  ];

  const salesCoachFeatures = [
    {
      icon: "bulb",
      title: "AI-Driven Innovation",
      description:
        "Harness the power of AI to drive innovation, transforming your business operations and enhancing decision-making processes.",
    },
    {
      icon: "chart-dots",
      title: "Data-Driven Project Management",
      description:
        "Leverage AI insights to optimize project outcomes and ensure timely, data-backed decision-making at every step.",
    },
    {
      icon: "plug-connected",
      title: "Seamless Integration",
      description:
        "Easily integrate AI into your existing systems, improving efficiency and streamlining processes for maximum impact.",
    },
  ];

  const knowledgeManagementFeatures = [
    {
      icon: "bulb",
      title: "AI-Driven Innovation",
      description:
        "Harness the power of AI to drive innovation, transforming your business operations and enhancing decision-making processes.",
    },
    {
      icon: "chart-dots",
      title: "Data-Driven Project Management",
      description:
        "Leverage AI insights to optimize project outcomes and ensure timely, data-backed decision-making at every step.",
    },
    {
      icon: "plug-connected",
      title: "Seamless Integration",
      description:
        "Easily integrate AI into your existing systems, improving efficiency and streamlining processes for maximum impact.",
    },
  ];

  const beamCounterFeatures = [
    {
      icon: "camera",
      title: "Metal Detection via Camera & AI",
      description:
        "Uses computer vision and AI to recognize and count metal beams, rebars, or other construction materials.",
    },
    {
      icon: "magnet",
      title: "Magnetic Sensor Support",
      description: "Uses the phone's magnetometer to detect metal presence",
    },
    {
      icon: "list-numbers",
      title: "Auto Counting & Categorization",
      description:
        "Differentiates between types of metal (beams, rebars, etc.) and provides an automatic count.",
    },
  ];

  // Screenshot data for Zoom Assistant section
  const zoomScreenshots = [
    {
      src: "meeting.png",
      alt: "Zoom Assistant Screenshot",
    },
  ];

  return (
    <>
      <Header />
      <Hero />

      <ToolSection
        bgColor="bg-[#FFE8A138]"
        url={toolUrls.zoomAssistant.url}
        id="zoom-assistant"
        title="Zoom AI assistant"
        description="The Zoom AI assistant is a zoom plugin includes an AI chat within Zoom meetings, providing real-time interaction along with AI-generated suggested questions relevant to the discussion."
      >
        <ScreenshotGallery images={zoomScreenshots} />
      </ToolSection>

      <ToolSection
        id="idp"
        title="Intelligent Document Processing (IDP)"
        url={toolUrls.idp.url}
        description={
          <>
            The <strong>Intelligent Document Processing (IDP)</strong> system
            automates data extraction, classification, and workflow integration,
            reducing manual effort and improving efficiency for seamless
            document management.
          </>
        }
      >
        <FeatureCardGrid features={idpFeatures} />
      </ToolSection>

      <ToolSection
        url={toolUrls.powerpointGenerator.url}
        id="powerpoint-generator"
        bgColor="bg-[#FFE8A138]"
        title="Powerpoint Generator"
        description="The AI PowerPoint Generator turns your voice into a stunning presentation—just speak, and AI does the rest! No more slide stress, just effortless, professional results in seconds!"
      >
        <div className="flex gap-10 justify-center max-sm:flex-col max-sm:items-center">
          <img src="/phones.png" alt="" />
        </div>
      </ToolSection>

      <ToolSection
        url={toolUrls.salesCoach.url}
        id="sales-coach"
        title="Sales Coach"
        description="The Zoom Landing Page project includes an AI chat within Zoom meetings, providing real-time interaction along with AI-generated suggested questions relevant to the discussion."
      >
        <FeatureCardGrid features={salesCoachFeatures} />
      </ToolSection>

      <ToolSection
        url={toolUrls.knowledgeManagement.url}
        bgColor="bg-[#FFE8A138]"
        id="knowledge-management"
        title="Knowledge Management"
        description="The Zoom Landing Page project includes an AI chat within Zoom meetings, providing real-time interaction along with AI-generated suggested questions relevant to the discussion."
      >
        <FeatureCardGrid features={knowledgeManagementFeatures} />
      </ToolSection>

      <ToolSection
        url={toolUrls.beamCounter.url}
        id="beam-counter"
        title="Beam counter"
        description="The beam counter app uses AI to detect and count metal beams, improving accuracy and efficiency in construction management."
      >
        <FeatureCardGrid features={beamCounterFeatures} />
      </ToolSection>

      <Footer />
    </>
  );
};

export default OHTAITools;
