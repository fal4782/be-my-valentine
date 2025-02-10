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
    // MESSAGE: "You've made me the happiest person ever! ❤️",
    MESSAGE: [
      "Hehe gotchuuu 😈 No takebacks! You're mine now.",
      "*evil laughter*",
    ],
  },
  CHEATING_MESSAGE: "No trying to be a smarty pants T_T.<br />Try again!",
};

export default CONSTANTS;
