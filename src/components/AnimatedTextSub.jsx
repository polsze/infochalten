import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singelWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedTextSub = ({ text, className = '', inView }) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
      <motion.h3
        className={`inline-block w-[60%] text-center text-dark font-bold text-7xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:w-[80%] ${className}`}
        variants={quote}
        initial='initial'
        animate={inView ? 'animate' : 'initial'}
      >
        {text.split(' ').map((word, index) => (
          <motion.span key={word + '-' + index} className='inline-block' variants={singelWord}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h3>
    </div>
  );
};

export default AnimatedTextSub;
