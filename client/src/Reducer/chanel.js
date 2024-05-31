import { MdPendingActions } from "react-icons/md";

const chanelReducers = (states = [], action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return states.map((state) =>
        state._id === MdPendingActions.payload._id ? action.payload : state
      );
    case "FETCH_CHANELS":
      return action.payload;
    default:
      return states;
  }
};
export default chanelReducers;

// const channelReducers = (states = [null], action) => {
//   switch (action.type) {
//     case "UPDATE_DATA":
//       return states.map(state =>
//         state && state._id === action.payload._id ? action.payload : state
//       );
//     case "FETCH_CHANNELS":
//       return action.payload;
//     default:
//       return states;
//   }
// };

// const chanelReducers = (states = [null], action) => {
//   switch (action.type) {
//     case "UPDATE_DATA":
//       return states.map((state) =>
//         state._id === action.payload._id ? action.payload : state
//       );
//     case "FETCH_CHANELS":
//       return action.payload;
//     default:
//       return states;
//   }
// };
