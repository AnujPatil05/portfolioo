'use client';

import { createContext, useContext, useState, useCallback } from 'react';

type ResumeContextValue = {
  isOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
};

const ResumeContext = createContext<ResumeContextValue>({
  isOpen: false,
  openResume: () => {},
  closeResume: () => {},
});

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openResume = useCallback(() => setIsOpen(true), []);
  const closeResume = useCallback(() => setIsOpen(false), []);

  return (
    <ResumeContext.Provider value={{ isOpen, openResume, closeResume }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}
