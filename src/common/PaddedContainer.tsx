import * as React from 'react';
interface PaddedContainerProps {
  children: any;
  padding: string;
}

const PaddedContainer: React.FC<PaddedContainerProps> = ({
  children,
  padding,
}) => {
  return <div style={{ padding }}>{children}</div>;
};

export default PaddedContainer;
