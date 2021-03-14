const addItem = (userName) => {
  return {
    type: "ADD_ITEM",
    payload: userName,
  };
};

const clearItems = () => {
  return {
    type: "CLEAR_LIST",
  };
};

export default { addItem, clearItems };
