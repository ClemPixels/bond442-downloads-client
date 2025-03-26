import React, { useState } from "react";

const Tiktok = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted URL:", url);
  };
  return (
    <div className="h-screen flex  justify-center bg-gray-0 mt-24">
      <div className="h-52 w-[60%] bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Tiktok Downloader
        </h1>
        <form className=" flex gap-4" onSubmit={handleSubmit}>
          <div className="w-[70%]">
            <input
              type="text"
              placeholder="Enter YouTube URL"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="w-[30%] -mt-4">
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tiktok;
