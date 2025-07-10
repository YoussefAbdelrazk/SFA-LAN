import dynamic from 'next/dynamic';
import styles from '../css/ArabicLoader.module.css';
import ClientOnly from './ClientOnly';

// Dynamically import BlurText with no SSR to prevent hydration issues
const BlurText = dynamic(() => import('./BlureText'), {
  ssr: false,
  loading: () => null,
});

const ARABIC_WEBSITE_NAME = 'شريف فرنسا';

const ArabicLoader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <ClientOnly
        fallback={
          <div className={`text-5xl mb-8 text-[#3E1492] ${styles.arabicText}`}>
            {ARABIC_WEBSITE_NAME.split('').map((letter, index) => (
              <span key={index} style={{ display: 'inline-block' }}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
        }
      >
        <div style={{ direction: 'rtl' }}>
          <BlurText
            text={ARABIC_WEBSITE_NAME}
            delay={150}
            threshold={0.1}
            animateBy='words'
            direction='top'
            className={`text-5xl mb-8 text-[#3E1492] ${styles.arabicText}`}
          />
        </div>
      </ClientOnly>
    </div>
  );
};

export default ArabicLoader;
