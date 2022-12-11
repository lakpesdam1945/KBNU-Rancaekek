import { IoChevronForward } from "react-icons/io5";
import { NavLink } from "react-router-dom";

type Props = {};

const CardBahtsulMasail = (propsIn: Props) => {
  return (
    <div className="flex flex-row items-center justify-between overflow-hidden relative rounded-md bg-light-card dark:bg-dark-accent w-full h-28 gap-2">
      <div className="h-28 w-24 flex-none">
        <img
          src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXNsYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="image"
          className="h-28 w-24 object-cover bg-cover p-[5px] rounded-lg"
        />
      </div>
      <div className="flex flex-grow flex-col items-start justify-around gap-2">
        <h3 className="text-[11px] leading-relaxed font-normal">
          Hukum Imbauan Mematikan Handphone didalam Masjid
        </h3>
        <span className="text-[9px]">
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            Bahtsul Masail
          </span>{" "}
          | Edi Koswara
        </span>
      </div>
      <div className="w-14 h-auto flex items-center justify-center">
        <NavLink to={"/"}>
          <IoChevronForward className="h-5 w-5" />
        </NavLink>
      </div>
    </div>
  );
};

export default CardBahtsulMasail;
