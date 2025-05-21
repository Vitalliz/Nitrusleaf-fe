// src/contexts/ScanResultContext.js
'use client'
import React, { createContext, useState } from 'react';

export const ScanResultContext = createContext();

export function ScanResultProvider({ children }) {
  const [scanResult, setScanResult] = useState(null);

  return (
    <ScanResultContext.Provider value={{ scanResult, setScanResult }}>
      {children}
    </ScanResultContext.Provider>
  );
}
