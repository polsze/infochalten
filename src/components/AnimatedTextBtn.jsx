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

const AnimatedTextBtn = ({ text, className = '', inView }) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
      <motion.h5
        className={`inline-block w-[60%] text-center text-dark font-bold text-7xl sm:w-[80%] ${className}`}
        variants={quote}
        initial='initial'
        animate={inView ? 'animate' : 'initial'}
      >
        {text.split(' ').map((word, index) => (
          <motion.span key={word + '-' + index} className='inline-block' variants={singelWord}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h5>
    </div>
  );
};

export default AnimatedTextBtn;
