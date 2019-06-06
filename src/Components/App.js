import React from 'react';
import ColumnContainer from '../Containers/ColumnContainer';

// #8E6E9E #39A59C #344759 #E8741E
class App extends React.Component{
  
  render () {
    return (
      <div className="App">
        <div className="ColumnsWrapper">
          <ColumnContainer 
          title='To Do'
          titleColor="#8E6E9E"
          columnIdx= {0}
          />
          <ColumnContainer 
          title='In Progress'
          titleColor="#39A59C"
          columnIdx= {1}
          />
          <ColumnContainer 
          title='Staging'
          titleColor="#344759"
          columnIdx= {2}
          />
          <ColumnContainer 
          title='Done'
          titleColor="#E8741E"
          columnIdx= {3}
          />
        </div>
      </div>
    );
  }
}

export default App;
