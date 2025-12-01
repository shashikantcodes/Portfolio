'use client'; // Ye zaroori hai kyunki hum state use kar rahe hain
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ThreeBackground from '@/components/ThreeBackground'; // Ye Naya 3D wala background hai
import Preloader from '@/components/Preloader'; // Ye Loading screen hai
import { AnimatePresence } from 'framer-motion';

const LayoutWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* 1. Loading Screen Logic */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* 2. Main App Content (Loader hatne ke baad dikhega) */}
      {!isLoading && (
        <>
          {/* A. 3D Background (Sabse peeche) */}
          <ThreeBackground />

          {/* B. Navbar (Desktop pe top, Mobile pe bottom) */}
          <Navbar />

          {/* C. Page Content (Hero, Skills etc.) */}
          {children}
        </>
      )}
    </>
  );
};

export default LayoutWrapper;
