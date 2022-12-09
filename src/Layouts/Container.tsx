type Props = {
  children?: React.ReactNode;
  fixed?: boolean;
  fixedBottom?: boolean;
  fixedTop?: boolean;
  padding?: string;
  margin?: string;
};
const defaultProps = {
  children: <div>Cotainer Components</div>,
  padding: "",
};
function Container(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div
      className={` bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300 w-full max-w-tablet ${
        props.padding
      } ${props.fixed ? "fixed z-50" : ""}  ${
        props.fixedBottom
          ? "bottom-0 border-t-[0.3px] border-gray-500 dark:border-gray-500"
          : ""
      }  ${
        props.fixedTop
          ? "top-0 border-b-[0.3px] border-gray-500 dark:border-gray-500"
          : ""
      }`}
    >
      {props.children}
    </div>
  );
}

export default Container;
