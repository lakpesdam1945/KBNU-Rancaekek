import { NavLink } from "react-router-dom";

type Props = {
  brands?: string;
};

const defaultProps = {
  brands: <span>Brands Project</span>,
};

function NavbarBrands(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <>
      <NavLink to="/">
        <span className="font-semibold text-base">{props.brands}</span>
      </NavLink>
    </>
  );
}

export default NavbarBrands;
