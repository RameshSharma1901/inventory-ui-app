const reducer = (state = { listOfItems: [] }, formAction) => {
  switch (formAction.type) {
    case "ADD_ITEM":
      return {
        ...state,
        listOfItems: [...state.listOfItems, formAction.payload],
      };
    case "CLEAR_LIST":
      return { ...state, listOfItems: "" };
    default:
      return state;
  }
};

export default reducer;
