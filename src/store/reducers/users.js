const users = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return action.payload;
    case "GET_USERS_DATA":
      return action.payload;
    case "GET_ALL_USERS":
      return action.payload;
    case "GET_SET_OF_USERS":
      return action.payload;
    case "GET_FIVE_USERS":
      return action.payload;
    case "GET_USER_BY_UID":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default users;
