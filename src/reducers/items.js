const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          columnIdx: action.columnIdx
        }
      ]
    case 'MOVE_ITEM':
      return state.map(item => {
        if(item.id === action.id){
          return {
            ...item, 
            columnIdx: action.columnIdx
          };
        }
        return item;
      });
    default:
      return state;
  }
}

export default items;