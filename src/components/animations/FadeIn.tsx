import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function FadeIn({ children, delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : directions[direction].y,
        x: inView ? 0 : directions[direction].x,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}