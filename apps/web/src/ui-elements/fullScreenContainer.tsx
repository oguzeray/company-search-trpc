import { ReactNode } from "react";

interface FullScreenContainerProps {
  children: ReactNode;
}

const FullScreenContainer = ({ children }: FullScreenContainerProps) => {
  return (
    <div className="min-h-screen w-screen bg-gray-700 pt-12 sm:pt-24">
      {children}
    </div>
  );
};

export default FullScreenContainer;
