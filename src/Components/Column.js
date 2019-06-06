import React from 'react';
// import Item from './Item';
import ItemCotainer from '../Containers/ItemContainer';


class Column extends React.Component{
  constructor(props) {
    super(props);
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  
  handleAddItem = () => {
    const result = window.prompt('What is new item?');
    this.props.addItem(result);
  }
  
  render () {
    const{ titleColor, title, items, columnIdx } = this.props;
    
    const style = {};
    if(columnIdx === 3){
      style['marginRight'] = 16;
    }
    
    const listOfCards = items.map((item, i) => {
      return (<ItemCotainer item={item} key={i}/>);
    });
    
    return (
      <div className="Column" style={style}>
        <div className="title" style={{backgroundColor: titleColor}}>{title}</div>
        {listOfCards}
        <button className="addItem" 
        onClick={this.handleAddItem}> + Add a Card </button>
      </div>
    );
  }
}

export default Column;