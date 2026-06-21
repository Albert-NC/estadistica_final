import React from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import AppRouter from './router/index';
import FloatingSocials from './components/layout/FloatingSocials';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        <AppRouter />
      </AnimatePresence>
      <FloatingSocials />
    </MotionConfig>
  );
}