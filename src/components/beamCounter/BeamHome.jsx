import React, { useState } from "react";
import ReactDropZone from "./ReactDropZone";

const BeamHome = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState(null);
  const [detectionCount, setDetectionCount] = useState(null);
  const [manualCount, setManualCount] = useState(0);

  // Function to remove file from the list
  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Function to upload images
  const uploadImages = async () => {
    if (files.length === 0) {
      console.log("No files to upload");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("file", file);
    });

    setLoading(true);

    try {
      const response = await fetch("http://3.139.65.78:5002/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Upload Response:", data);

      // Set state with response data
      if (data.processed_image_url && data.detections !== undefined) {
        setProcessedImageUrl(data.processed_image_url);
        setDetectionCount(data.detections);
      }
    } catch (error) {
      console.error("Upload Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-20">
      <h4 className="text-black text-[32px] font-normal mb-6">SnapBeam</h4>
      <p className="flex gap-x-2">
        Upload a photo, let us do the counting{" "}
        <img src="/beamCounter/face.svg" alt="" />
      </p>

      <div className="bg-[#f4f4f4] h-auto p-5">
        <p className="text-center font-semibold text-lg">Image Upload</p>
        <div className="flex flex-col justify-center gap-4">
          <div className="flex justify-between">
            <div className="mt-auto">
              <ReactDropZone setFiles={setFiles} files={files} />
            </div>
            <div className="w-1/2 flex flex-wrap gap-2 bg-white p-4">
              {files.length > 0 ? (
                files.map((file, index) => (
                  <div key={index} className="w-full">
                    <div className="flex justify-between p-2 bg-gray-100 rounded-md">
                      <div className="flex gap-x-2 items-center">
                        <img
                          className="w-5 h-5"
                          src="/beamCounter/document-text.svg"
                          alt="doc"
                        />
                        <div>
                          <p>{file.name}</p>
                          <p className="text-sm text-gray-500">
                            {(file.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                      </div>
                      <button onClick={() => removeFile(index)}>
                        <img
                          className="w-5 h-5 cursor-pointer"
                          src="/beamCounter/trash.svg"
                          alt="Delete"
                        />
                      </button>
                    </div>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`uploaded-${index}`}
                      className="w-full h-auto object-cover rounded-md mt-2"
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No files uploaded yet.</p>
              )}
            </div>
          </div>
          <button
            onClick={uploadImages}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Next"}
          </button>
        </div>
      </div>

      {/* Display processed image and detection count */}
      {processedImageUrl && (
        <div className="mt-6 bg-white p-5 rounded-md shadow-md text-center">
          <div className="flex justify-center">
            <div className=" flex items-center">
              <div className="space-y-2">
                <p>Auto Count</p>
                <p>{detectionCount}</p>
              </div>
              <span className="text-[24px] font-semibold m-4">+</span>
              <div className="space-y-2">
                <p>Manual Count</p>
                <p>
                  <input
                    type="text"
                    placeholder=""
                    className="border-2"
                    onChange={(e) => {
                      setManualCount(+e.target.value);
                    }}
                    value={manualCount}
                  />
                </p>
              </div>
              <span className="text-[24px] font-semibold m-4">=</span>
              <div className="space-y-2">
                <p>Final Count</p>
                <p>{detectionCount + manualCount}</p>
              </div>
            </div>
          </div>
          <img
            src={processedImageUrl}
            alt="Processed"
            className="w-full h-auto object-cover rounded-md mt-4"
          />
        </div>
      )}
    </div>
  );
};

export default BeamHome;
