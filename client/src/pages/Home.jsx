import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Video Downloader
      </h1>
      <p className="text-gray-600 mb-4">
        Download videos from YouTube and TikTok easily!
      </p>

      <div className="flex gap-6">
        <Link to="/youtube">
          <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
            YouTube Downloader
          </button>
        </Link>

        <Link to="/tiktok">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
            TikTok Downloader
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
