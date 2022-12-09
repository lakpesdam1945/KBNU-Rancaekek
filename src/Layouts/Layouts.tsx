import React from "react";

type Props = {
  children?: React.ReactNode;
};

const defaultProps = {
  children: <div>Layouts Components</div>,
};

function Layouts(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div className="bg-light-primary text-light-primary-text dark:bg-dark-primary dark:text-dark-primary-text shadow-lg max-w-tablet mx-auto h-screen w-full">
      {props.children}
    </div>
  );
}

export default Layouts;
