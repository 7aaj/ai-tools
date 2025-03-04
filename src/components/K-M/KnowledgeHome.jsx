// import React from "react";

// const KnowledgeHome = () => {
//   return (
//     <div className="w-screen h-screen flex justify-between">
//       <div className="w-1/4"></div>
//       <div className="flex-1"></div>
//     </div>
//   );
// };

// export default KnowledgeHome;

"use client";
import * as React from "react";
import { useState, useCallback } from "react";
import { motion } from "motion/react";
import { useDropzone } from "react-dropzone";

// PDF Icon Component
const PdfIcon = () => (
  <svg
    width="22"
    height="23"
    viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pdf-icon"
  >
    <path
      d="M4.40002 18.6875H5.66136V17.3937H6.23336C7.14269 17.3937 7.90536 16.7468 7.90536 15.87C7.90536 14.9931 7.17202 14.3606 6.23336 14.3606H4.40002V18.6731V18.6875ZM5.66136 16.4018V15.3668H6.10136C6.39469 15.3668 6.64402 15.5537 6.64402 15.87C6.64402 16.1862 6.40936 16.3875 6.10136 16.3875H5.66136V16.4018ZM9.07869 18.6875H10.824C12.2907 18.6875 13.2 17.8393 13.2 16.5025C13.2 15.2518 12.2907 14.375 10.824 14.375H9.07869V18.6875ZM10.34 17.6668V15.3812H10.7654C11.2494 15.3812 11.9094 15.6112 11.9094 16.5025C11.9094 17.4368 11.2494 17.6668 10.7654 17.6668H10.34ZM14.6667 18.6875H15.928V17.1493H17.4827V16.1575H15.928V15.3812H17.7027V14.3893H14.6814V18.7018L14.6667 18.6875Z"
      fill="#31333F"
    />
    <path
      d="M18.3333 23H3.66667C2.44934 23 1.46667 22.0369 1.46667 20.8438V2.15625C1.46667 0.963125 2.44934 0 3.66667 0H14.0653C14.652 0 15.2093 0.23 15.62 0.6325L19.888 4.81562C20.2987 5.21812 20.5333 5.76437 20.5333 6.33937V20.8438C20.5333 22.0369 19.5507 23 18.3333 23ZM3.66667 1.4375C3.25601 1.4375 2.93334 1.75375 2.93334 2.15625V20.8438C2.93334 21.2463 3.25601 21.5625 3.66667 21.5625H18.3333C18.744 21.5625 19.0667 21.2463 19.0667 20.8438V6.33937C19.0678 6.24511 19.0489 6.15165 19.011 6.065C18.9731 5.97835 18.9171 5.90043 18.8467 5.83625L14.5787 1.65312C14.4433 1.5177 14.2588 1.4402 14.0653 1.4375H3.66667Z"
      fill="#31333F"
    />
    <path
      d="M19.624 7.18761H15.356C14.168 7.18761 13.2 6.23886 13.2 5.07448V0.891357C13.2 0.488857 13.5227 0.172607 13.9333 0.172607C14.344 0.172607 14.6667 0.488857 14.6667 0.891357V5.07448C14.6667 5.44823 14.9747 5.75011 15.356 5.75011H19.624C20.0347 5.75011 20.3573 6.06636 20.3573 6.46886C20.3573 6.87136 20.0347 7.18761 19.624 7.18761Z"
      fill="#31333F"
    />
  </svg>
);

// Dropdown Icon Component
const DropdownIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="dropdown-icon"
  >
    <path
      d="M17 10L12 15L7 10"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Sidebar Logo Section Component
const LogoSection = () => (
  <header className="pb-6 border-b border-solid border-b-zinc-300 max-sm:text-center">
    <div className="flex flex-col gap-4">
      <h1 className="text-base font-medium text-black">DocuWhiz</h1>
      <p className="text-base font-medium text-center text-black">
        Your document's brainpower
      </p>
    </div>
  </header>
);

// File Upload Section Component
const UploadSection = () => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf",
    multiple: false,
  });

  return (
    <section className="mt-16 max-sm:mt-8">
      <div className="flex gap-4 items-center mb-8">
        <PdfIcon />
        <h2 className="text-lg font-medium text-zinc-700">
          Upload PDF files for Q&A
        </h2>
      </div>
      <div
        {...getRootProps()}
        className={`flex flex-col justify-center items-center h-36 rounded border border-dashed border-zinc-300 w-[262px] max-md:w-full cursor-pointer ${
          isDragActive ? "bg-gray-50" : ""
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col gap-2 items-center">
          <p className="text-base text-center text-black">
            {file ? file.name : "Drag and drop files here"}
          </p>
          <p className="text-xs text-stone-500">Supported formats: PDF</p>
          <button className="px-4 py-2.5 mt-5 text-xs font-medium text-white bg-gray-600 rounded cursor-pointer border-[none]">
            Browse file
          </button>
        </div>
      </div>
      {file && (
        <div className="mt-4 p-4 border rounded bg-gray-50 w-[262px] max-md:w-full">
          <h3 className="text-sm font-medium">File Details:</h3>
          <p className="text-xs text-zinc-700">Name: {file.name}</p>
          <p className="text-xs text-zinc-700">
            Size: {(file.size / 1024).toFixed(2)} KB
          </p>
          <p className="text-xs text-zinc-700">Type: {file.type}</p>
        </div>
      )}
    </section>
  );
};

// Sidebar Component
const Sidebar = () => (
  <nav className="px-7 py-9 bg-gray-100 w-[318px] max-md:p-5 max-md:w-full">
    <LogoSection />
    <UploadSection />
  </nav>
);

// Guided Tour Dropdown Component
const GuidedTourDropdown = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-[700px] max-md:w-full rounded-lg border border-solid border-neutral-400 cursor-pointer">
      {/* Toggle Button */}
      <div
        className="flex justify-between items-center px-4 py-3.5 h-11 text-xs text-black "
        // onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <span>Guided Tour</span>
        <DropdownIcon />
      </div>

      {/* Dropdown Content */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        // className="overflow-hidden border border-solid border-neutral-400"
      >
        <div className="flex flex-col gap-2 p-4">
          <span>Welcome to DocuWhiz! Here’s how it works:</span>
          <span>
            <span className="font-bold">1. Upload PDF:</span> Drag & drop files
            where indicated to upload document for analysis.
          </span>
          <span>
            <span className="font-bold">2. Process PDF:</span> Click the
            ‘process’ button to extract and prepare data from your documents.
          </span>
          <span>
            <span className="font-bold">3. Ask Questions:</span>Enter your
            questions in the text area provided and submit to get answers based
            on your documents. follow these steps to maximize your use for our
            application!
          </span>
        </div>
      </motion.div>
    </div>
  );
};

// Question Section Component
const QuestionSection = () => {
  const [question, setQuestion] = useState("");
  const [canAsk, setCanAsk] = useState(false);

  const handleQuestionChange = useCallback((e) => {
    setQuestion(e.target.value);
    setCanAsk(e.target.value.trim().length > 0);
  }, []);

  const handleAskQuestion = useCallback(() => {
    if (canAsk) {
      // Handle question submission logic here
      console.log("Question submitted:", question);
    }
  }, [canAsk, question]);

  return (
    <section className="w-[700px] max-md:w-full">
      <label
        htmlFor="question-textarea"
        className="mb-4 text-base text-neutral-700 block"
      >
        Ask a Question related to your document:
      </label>
      <textarea
        id="question-textarea"
        className="mb-5 w-full rounded-xl border border-solid bg-stone-50 border-zinc-300 h-[158px] max-sm:h-[120px] p-3 resize-none"
        value={question}
        onChange={handleQuestionChange}
        placeholder="Type your question here..."
      />
      <button
        className={`px-4 py-2.5 text-xs font-medium text-white bg-gray-600 rounded cursor-pointer border-[none] ${
          canAsk ? "" : "opacity-50"
        }`}
        onClick={handleAskQuestion}
        disabled={!canAsk}
      >
        Ask
      </button>
    </section>
  );
};

// Main Content Component
const MainContent = () => (
  <main className="flex-1 p-10 max-md:p-5">
    <h2 className="mx-0 mt-16 mb-8 text-3xl font-medium text-black max-sm:text-2xl max-sm:text-center">
      Fast AI Question Answer Powered by OHT
    </h2>
    <QuestionSection />
  </main>
);

// Main DocuWhiz Component
function DocuWhiz() {
  return (
    <>
      <div className="flex min-h-screen bg-white max-md:flex-col">
        <Sidebar />
        <MainContent />
        <GuidedTourDropdown />
      </div>
    </>
  );
}

export default DocuWhiz;
