import axios from "axios";
import React, { useState } from "react";

const Youtube = () => {
  const [url, setUrl] = useState("");
  const [videoData, setVideoData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://bond442-downloads-server.onrender.com/process",
        {
          url,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setVideoData(response.data);
    } catch (error) {
      console.error("Error submitting url: ", error);
      setVideoData(null);
    }
  };
  return (
    <div className="min-h-screen flex justify-center  bg-gray-0 mt-24 mb-10">
      <div>
        <div className=" w-[1024px] bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            YouTube Downloader
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
        {videoData && videoData.title && (
          <div className="mt-6 w-full max-w-[600px] bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">
              {videoData.title}
            </h2>
            {videoData.thumbnail && (
              <img
                src={videoData.thumbnail}
                alt="Thumbnail"
                className="mt-4 rounded-md"
              />
            )}

            <div className="mt-4">
              <h3 className="font-medium">Video Links:</h3>
              <ul className="list-none pl-6 flex flex-wrap gap-4">
                {videoData.video_links && videoData.video_links.length > 0 ? (
                  [
                    ...new Map(
                      videoData.video_links.map((link) => [link.quality, link])
                    ).values(),
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        Download {link.quality}
                      </a>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No video links available</p>
                )}
              </ul>

              {videoData.audio_link && (
                <div className="mt-4">
                  <h3 className="font-medium">Audio Link:</h3>
                  <a
                    href={videoData.audio_link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Download Audio ({videoData.audio_link.bitrate})
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Youtube;
