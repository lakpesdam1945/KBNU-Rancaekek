import {
  IoBagSharp,
  IoBookSharp,
  IoHomeSharp,
  IoPersonSharp,
  IoSearchSharp,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

type Props = {};

function BottomNavigation({}: Props) {
  return (
    <div className="flex items-center justify-between gap-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-dark-primary dark:text-light-primary"
            : "text-light-secondary-text dark:text-dark-secondary-text"
        }
      >
        <IoHomeSharp className="h-6 w-6" />
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive
            ? "text-dark-primary dark:text-light-primary"
            : "text-light-secondary-text dark:text-dark-secondary-text"
        }
      >
        <IoSearchSharp className="h-6 w-6" />
      </NavLink>
      <NavLink
        to="/post"
        className={({ isActive }) =>
          isActive
            ? "text-dark-primary dark:text-light-primary"
            : "text-light-secondary-text dark:text-dark-secondary-text"
        }
      >
        <IoBookSharp className="h-6 w-6" />
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive
            ? "text-dark-primary dark:text-light-primary"
            : "text-light-secondary-text dark:text-dark-secondary-text"
        }
      >
        <IoBagSharp className="h-6 w-6" />
      </NavLink>
      <NavLink
        to="/user"
        className={({ isActive }) =>
          isActive
            ? "text-dark-primary dark:text-light-primary"
            : "text-light-secondary-text dark:text-dark-secondary-text"
        }
      >
        <IoPersonSharp className="h-6 w-6" />
      </NavLink>
    </div>
  );
}

export default BottomNavigation;
