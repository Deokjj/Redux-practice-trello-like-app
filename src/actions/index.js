let id = 0;

export const addItem = (text, columnIdx) =>  ({
  type: 'ADD_ITEM',
  id: id++,
  text: text,
  columnIdx: columnIdx
});

export const moveItem = (id,newColumnIdx) => ({
  type: 'MOVE_ITEM',
  id: id,
  columnIdx: newColumnIdx
});