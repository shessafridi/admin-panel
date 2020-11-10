import * as React from 'react';
interface PaddedContainerProps {
  children: any;
  padding: string;
  className?: any;
}

const PaddedContainer: React.FC<PaddedContainerProps> = ({
  children,
  padding,
  className,
}) => {
  return (
    <div className={className} style={{ padding }}>
      {children}
    </div>
  );
};

export default PaddedContainer;
