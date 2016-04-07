const toDos = (state = ['Hi'], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        action.text
      ];
    }
    default: {
      return state;
    }
  }
};

export default toDos;
