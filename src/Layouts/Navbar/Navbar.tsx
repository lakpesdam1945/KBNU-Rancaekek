type Props = {
  children?: React.ReactNode;
};

const defaultProps = {
  children: <div>Navbar Components</div>,
};
function Navbar(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <>
      <div className="flex justify-between items-center w-full max-w-tablet">
        <div className="text-base">Brands</div>
        <div className="text-base">Icon</div>
      </div>
      <div className="hidden w-full py-4">
        <ul className="space-y-3 font-light">
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
