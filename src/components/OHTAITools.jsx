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
      title: "Intelligent Chatbot Assistance",
      description:
        "Ask questions about your uploaded files, and get instant, AI-driven responses for quick insights.",
    },
    {
      icon: "category",
      title: "Multi-Type File Support",
      description:
        "Our AI engine supports multiple file formats for seamless processing and extraction.",
    },
  ];

  const salesCoachFeatures = [
    {
      icon: "bulb",
      title: "Realistic AI Sales Conversations",
      description:
        "Engage in lifelike sales calls with AI, practicing responses, handling objections, and refining your pitch in a risk-free environment.",
    },
    {
      icon: "chart-dots",
      title: "Performance Ranking & Feedback",
      description:
        "Get a detailed evaluation after each session, with a ranking based on conversation flow, persuasion skills, and closing techniques.",
    },
    {
      icon: "plug-connected",
      title: "Body Language Analysis",
      description:
        "AI evaluates your gestures, posture, and facial expressions to provide feedback on your nonverbal communication.",
    },
  ];

  const knowledgeManagementFeatures = [
    {
      icon: "bulb",
      title: "Instant AI Assistance",
      description:
        "Ask questions about your files, and get precise, AI-driven responses in seconds.",
    },
    {
      icon: "chart-dots",
      title: "Smart Data Extraction",
      description:
        "Automatically process and extract key insights from sales documents for quick access.",
    },
    {
      icon: "plug-connected",
      title: "Multilingual Support",
      description:
        "Process and extract information from documents in multiple languages with AI-powered accuracy. Seamlessly handle diverse files without language barriers.",
    },
  ];

  const beamCounterFeatures = [
    {
      icon: "camera",
      title: "AI-Powered Beam Detection",
      description:
        "Automatically detects and counts beams in any uploaded image with high accuracy.",
    },
    {
      icon: "magnet",
      title: "Instant Results",
      description:
        "Get fast and precise beam counts in seconds—no manual counting needed.",
    },
    {
      icon: "list-numbers",
      title: "Smart Image Analysis",
      description:
        "Processes various image types and adjusts to different angles and lighting for reliable detection.",
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
        description="Enhance your interviews with real-time AI-suggested questions. Our assistant listens, analyzes, and provides smart follow-ups. Upload documents for tailored questions, and use the built-in chatbot for instant insights. Stay prepared and make every conversation count!"
      >
        <ScreenshotGallery images={zoomScreenshots} />
      </ToolSection>

      <ToolSection
        id="idp"
        title="Intelligent Document Processing (IDP)"
        url={toolUrls.idp.url}
        description={
          <>
            Upload any file, and IDP’s AI instantly classifies it—whether it's a
            driver’s license, ID, or document. Need details? Extract key
            information in seconds. Have questions? Our built-in chatbot
            provides instant answers based on your file. Streamline your
            document management with smart, AI-driven processing.
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
        description="Practice sales calls with AI just like you’re speaking to a real client. Sales Coach analyzes your conversation, evaluates your pitch, and even assesses your body language. At the end of each session, receive a performance ranking with insights to help you close more deals. Elevate your sales skills with smart, real-time coaching!"
      >
        <FeatureCardGrid features={salesCoachFeatures} />
      </ToolSection>

      <ToolSection
        url={toolUrls.knowledgeManagement.url}
        bgColor="bg-[#FFE8A138]"
        id="knowledge-management"
        title="Knowledge Management"
        description="Upload your sales documents, and let AI do the rest. Knowledge managment processes your PDFs, making them fully searchable. Simply type a question in the search bar, and the AI will instantly retrieve the most relevant answers. No more manual searching—get the insights you need in seconds!"
      >
        <FeatureCardGrid features={knowledgeManagementFeatures} />
      </ToolSection>

      <ToolSection
        url={toolUrls.beamCounter.url}
        id="beam-counter"
        title="Beam counter"
        description="Upload an image, and let AI do the counting for you. Beam Counter analyzes your photo, accurately detects beams, and instantly displays the total count. No more manual calculations—get fast, precise results with AI-powered image processing!"
      >
        <FeatureCardGrid features={beamCounterFeatures} />
      </ToolSection>

      <Footer />
    </>
  );
};

export default OHTAITools;
