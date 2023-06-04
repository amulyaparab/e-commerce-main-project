export const authReducer = (userAuth, action) => {
  switch (action.type) {
    case "TEST_USER":
      return {
        ...userAuth,
        testUser: action.userPayload,
        encodedToken: action.tokenPayload,
      };
    case "NEW_USER":
      return { ...userAuth, encodedToken: action.payload };
    default:
      return userAuth;
  }
};
