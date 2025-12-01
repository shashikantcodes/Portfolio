'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ThreeBackground from '@/components/ThreeBackground';
import Preloader from '@/components/Preloader';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Pathname check karne ke liye

const LayoutWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname(); // Current URL path milega

  // Check agar hum project detail page par hain
  const isProjectPage = pathname?.startsWith('/project/');

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

          {/* B. Navbar (Sirf tab dikhao jab hum project page par NA ho) */}
          {!isProjectPage && <Navbar />}

          {/* C. Page Content (Hero, Skills etc.) */}
          {children}
        </>
      )}
    </>
  );
};

export default LayoutWrapper;
