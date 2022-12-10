import { IoChevronForward } from "react-icons/io5";
import { NavLink } from "react-router-dom";

type Props = {
  name: string;
  link: string;
};

const SepatorContent = (propsIn: Props) => {
  return (
    <>
      <div className="py-5 w-full h-auto">
        <div className="flex p-2 rounded-lg flex-row items-center justify-between  bg-gradient-to-r from-emerald-600 to-emerald-900">
          <span className="font-medium text-sm text-light-primary">
            {propsIn.name}
          </span>
          <span>
            <NavLink to={propsIn.link}>
              <IoChevronForward className="h-6 w-6 text-light-primary" />
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default SepatorContent;
