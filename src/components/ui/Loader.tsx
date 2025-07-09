import dynamic from 'next/dynamic';
import styles from '../css/Loader.module.css';
import ClientOnly from './ClientOnly';

// Dynamically import BlurText with no SSR to prevent hydration issues
const BlurText = dynamic(() => import('./BlureText'), {
  ssr: false,
  loading: () => null,
});

const WEBSITE_NAME = 'SHERIF FRANCA';

const Loader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <ClientOnly
        fallback={
          <div className='text-5xl mb-8 text-[#3E1492]'>
            {WEBSITE_NAME.split('').map((letter, index) => (
              <span key={index} style={{ display: 'inline-block' }}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
        }
      >
        <BlurText
          text={WEBSITE_NAME}
          delay={180}
          threshold={0.1}
          animateBy='letters'
          direction='top'
          className='text-5xl mb-8 text-[#3E1492]'
        />
      </ClientOnly>
    </div>
  );
};

export default Loader;
