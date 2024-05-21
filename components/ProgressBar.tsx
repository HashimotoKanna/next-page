// components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
