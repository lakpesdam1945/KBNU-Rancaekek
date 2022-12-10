import react, { useState, useReducer } from "react";
import { IoMoonSharp, IoOptionsSharp, IoSunnySharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import NavbarBrands from "./NavbarBrands";
import NavbarLink from "./NavbarLink";

type Props = {
  children?: React.ReactNode;
};

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
const initialState = { showMenu: false };
type ShowMenuState = {
  showMenu: boolean;
};

type ShowMenuAction = {
  type: string;
  payload: boolean;
};
function reducer(state: ShowMenuState, action: ShowMenuAction) {
  switch (action.type) {
    case "showMenu":
      return { showMenu: !state.showMenu };
    default:
      return state;
  }
}
const defaultProps = {
  children: <div>Navbar Components</div>,
};
function Navbar(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.showMenu);
  const [darkMode, setDarkMode] = useState(true);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };
  return (
    <>
      <div className="flex justify-between items-center w-full max-w-tablet">
        <NavbarBrands brands="KBNU Rancaekek" />
        <div className="flex flex-row items-center justify-between gap-4">
          <IoSunnySharp
            className={`h-6 w-6 ${darkMode ? "hidden" : "block"}`}
            onClick={handleDarkMode}
          />
          <IoMoonSharp
            className={`h-6 w-6 ${darkMode ? "block" : "hidden"} `}
            onClick={handleDarkMode}
          />
          <IoOptionsSharp
            className="h-6 w-6"
            onClick={() => dispatch({ type: "showMenu", payload: true })}
          />
        </div>
      </div>
      <div className={`${state.showMenu ? "block" : "hidden"} w-full py-4`}>
        <ul className="w-full space-y-4">
          {data.map((data) => (
            <li key={data._id} className="p-1 font-normal">
              <NavLink
                to={data.to}
                className={({ isActive }) =>
                  isActive
                    ? "font-medium"
                    : "text-light-secondary dark:text-light-secondary"
                }
              >
                <span
                  onClick={() => dispatch({ type: "showMenu", payload: true })}
                >
                  {data.link}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
