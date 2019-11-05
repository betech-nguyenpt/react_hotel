export const NAV_SCREEN = "NAV_SCREEN";
export const NAV_RESET_SCREEN = "NAV_RESET_SCREEN";
export const NAV_BACK = "NAV_BACK";
export const NAV_RESET_MAIN = "NAV_RESET_MAIN";

export const navScreen = (screen, props) => {
  return {
    type: NAV_SCREEN,
    payload: { screen, props }
  };
};
export const navResetScreen = (screen, props) => ({
  type: NAV_RESET_SCREEN,
  payload: { screen, props }
});

export const navBack = () => ({ type: NAV_BACK });

export const navMain = () => ({ type: NAV_RESET_MAIN });

export default {
  navScreen,
  navResetScreen,
  navBack
};