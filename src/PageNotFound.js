import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-8">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        Oops! Looks like the page you're looking for does not exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
