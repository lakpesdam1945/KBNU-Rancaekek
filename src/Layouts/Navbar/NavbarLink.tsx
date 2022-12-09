import { useState } from "react";
import { NavLink } from "react-router-dom";

type Props = {};
const data = [
  {
    _id: 1,
    to: "/profile",
    link: "Profile",
  },
  {
    _id: 2,
    to: "/warta",
    link: "Warta",
  },
  {
    _id: 3,
    to: "/lembaga",
    link: "Lembaga",
  },
  {
    _id: 4,
    to: "/Banom",
    link: "Banom",
  },
  {
    _id: 5,
    to: "/agenda",
    link: "Agenda",
  },
];
function NavbarLink(propsIn: Props) {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const handdleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar);
  };
  const props = { ...propsIn };
  return (
    <ul className="w-full space-y-4 transition ease-in-out delay-150">
      {data.map((data) => (
        <li key={data._id} className="p-1 font-normal">
          <NavLink
            to={data.to}
            className={({ isActive }) =>
              isActive ? "font-medium" : "dark:text-light-secondary"
            }
          >
            <span onClick={handdleToggleNavbar}>{data.link}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavbarLink;
