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
    <div className="bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-lg max-w-tablet mx-auto h-screen w-full">
      {props.children}
    </div>
  );
}

export default Layouts;
