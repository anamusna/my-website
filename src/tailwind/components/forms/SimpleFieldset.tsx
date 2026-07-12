import React from "react";

interface SimpleFieldsetProps {
  legend: string;
  children: React.ReactNode;
  className?: string;
}

const SimpleFieldset: React.FC<SimpleFieldsetProps> = ({
  legend,
  children,
  className = "",
}) => {
  return (
    <fieldset className={`space-y-2 ${className}`}>
      <legend className="text-sm font-medium text-body">
        {legend}
      </legend>
      {children}
    </fieldset>
  );
};

export default SimpleFieldset;
