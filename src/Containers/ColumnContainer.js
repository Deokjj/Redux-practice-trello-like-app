import { connect } from 'react-redux';
import Column from '../Components/Column';
import { addItem } from '../actions';

const getItemsForColumn = ( items ,columnIdx ) => {
  return items.filter(item => item.columnIdx === columnIdx);
};

const mapStateToProps = (state,ownProps) => ({
  items: getItemsForColumn( state.items, ownProps.columnIdx)
});

const mapDispatchToProps = (dispatch, ownProps) =>({
  addItem: text => dispatch(addItem(text, ownProps.columnIdx)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Column);