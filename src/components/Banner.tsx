"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

export default function TimedBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-card text-card-foreground rounded-lg border shadow-lg max-w-md w-[90%] p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Enjoying my website?
        </h3>
        <button
          onClick={() => setShowBanner(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 font-bold text-2xl leading-none"
          aria-label="Close banner"
        >
          ×
        </button>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
        Check out my thoughts and insights on coding, AI and aerospace.
      </p>
      
      <a
        href="https://samueljforrest.substack.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Substack newsletter (opens in a new tab)"
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink className="w-4 h-4" />
        <span>Read my Substack blog</span>
      </a>
    </div>
  );
}