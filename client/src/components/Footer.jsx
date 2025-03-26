import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Bond442 Tech Solutions. All rights
          reserved.
        </p>

        <div className="flex gap-4 mt-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            Facebook
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            Twitter
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            Instagram
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
