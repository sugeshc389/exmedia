import { createRoot } from 'react-dom/client';
import { MotionProvider } from 'framer-motion';

const MotionWrapper = ({ children }) => {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <MotionProvider>{children}</MotionProvider>
  );
  return null;
};

export default MotionWrapper;