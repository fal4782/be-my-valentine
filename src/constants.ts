export const CONSTANTS = {
  PROPOSALPREFIX: {
    WITHNAME: (name: string) =>
      `${name.charAt(0).toUpperCase() + name.slice(1)}, will`,
    WITHOUTNAME: "Will",
  },
  PROPOSALSUFFIX: "you be my Valentine? 🌹",
  BUTTONS: {
    YES: "Yes",
    NO: "No",
  },
  CELEBRATION: {
    TITLE: "Yayayayay!",
    MESSAGE: "You've made me the happiest person ever! ❤️",
  },
};

export default CONSTANTS;
