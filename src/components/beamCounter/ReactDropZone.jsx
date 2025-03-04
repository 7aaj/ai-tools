import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const ReactDropZone = ({ setFiles, files }) => {
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-dashed border-2 p-8 rounded-lg cursor-pointer transition-all ${
        isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col gap-y-2 items-center">
        <img className="w-16 h-16" src="/beamCounter/gallery.png" alt="" />
        <p className="text-[#063e76] font-medium">Drop your image here</p>
        <p className="text-[#676767] text-xs">
          Supported formats: JPEG, PNG, JPG.
        </p>
        <button className="text-white text-xs bg-[#2e5e8d] px-[15px] py-2.5">
          Upload image
        </button>
      </div>
    </div>
  );
};

export default ReactDropZone;
