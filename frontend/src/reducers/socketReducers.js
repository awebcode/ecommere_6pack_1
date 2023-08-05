import { Socket } from "socket.io-client";
import { SOCKET} from "../constants/CommentConstant";

const socketReducer = (state= null, action=Socket) => {
  switch (action.type) {
    case SOCKET:
      return action.payload;
    default:
      return state;
  }
};

export default socketReducer;
