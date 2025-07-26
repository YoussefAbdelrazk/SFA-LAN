'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FrenchLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='fixed inset-0 bg-gradient-to-br from-[#1a1442] via-[#3E1492] to-[#6B46C1] z-[9999] flex items-center justify-center overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0'>
        {/* Floating Circles */}
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-40 right-32 w-24 h-24 bg-[#feda02]/20 rounded-full'
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        <motion.div
          className='absolute bottom-32 left-32 w-20 h-20 bg-white/5 rounded-full'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className='absolute bottom-20 right-20 w-16 h-16 bg-[#feda02]/15 rounded-full'
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        />
      </div>

      {/* Main Content */}
      <div className='relative z-10 text-center'>
        {/* Logo/Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='mb-8'
        >
          <div className='relative'>
            {/* Glowing Effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-[#feda02] to-[#3E1492] blur-3xl opacity-30 animate-pulse'></div>

            {/* Main Text */}
            <h1 className='relative text-6xl md:text-8xl font-black text-white mb-4 tracking-wider'>
              <span className='bg-gradient-to-r from-white via-[#feda02] to-white bg-clip-text text-transparent'>
                SHERIF
              </span>
            </h1>
            <h2 className='relative text-4xl md:text-6xl font-bold text-[#feda02] tracking-wider'>
              FRANCA
            </h2>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-white/80 text-lg md:text-xl mb-12 font-light'
        >
          Transformez Votre Parcours Fitness
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='w-80 md:w-96 mx-auto mb-8'
        >
          <div className='relative'>
            {/* Background Track */}
            <div className='h-3 bg-white/20 rounded-full overflow-hidden'>
              {/* Progress Fill */}
              <motion.div
                className='h-full bg-gradient-to-r from-[#feda02] to-[#3E1492] rounded-full'
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Glowing Effect on Progress */}
            <div className='absolute inset-0 bg-gradient-to-r from-[#feda02] to-[#3E1492] blur-sm opacity-50 rounded-full'></div>
          </div>

          {/* Progress Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className='text-white/60 text-sm mt-2 font-medium'
          >
            Chargement... {progress}%
          </motion.p>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex justify-center space-x-2'
        >
          {[0, 1, 2].map(index => (
            <motion.div
              key={index}
              className='w-3 h-3 bg-[#feda02] rounded-full'
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
        <motion.div
          className='flex space-x-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className='w-2 h-2 bg-[#feda02] rounded-full'></div>
          <div className='w-2 h-2 bg-white/60 rounded-full'></div>
          <div className='w-2 h-2 bg-[#feda02] rounded-full'></div>
        </motion.div>
      </div>
    </div>
  );
};

export default FrenchLoader;
