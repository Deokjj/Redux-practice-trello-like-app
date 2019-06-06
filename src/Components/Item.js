import React from 'react';

const Item = ({item, i, moveItem}) => {
  return (
    <div className="Item" key={i} columnidx={item.columnIdx}>
      {(
        item.columnIdx !== 0 ? 
        <span onClick={ ()=>{ moveItem(item.columnIdx -1)} }> ← </span> : 
        <span/>
      )}
      <p>{item.text}</p>
      {(
        item.columnIdx !== 3 ? 
        <span onClick={ ()=>{ moveItem(item.columnIdx +1)} }> → </span> : 
        <span/>
      )}
    </div>
  )
};

export default Item;