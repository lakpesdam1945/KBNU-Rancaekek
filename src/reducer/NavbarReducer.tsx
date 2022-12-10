import React, { useReducer } from "react";

type Props = {};

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
    case "showMneu":
      return { showMenu: !state };
    default:
      return state;
  }
}

export const NavbarReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div>NavbarReducer</div>;
};
