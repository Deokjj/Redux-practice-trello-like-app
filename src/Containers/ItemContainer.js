import { connect } from 'react-redux';
import Item from '../Components/Item';
import { moveItem } from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
    moveItem: newColumnIdx => dispatch(moveItem(ownProps.item.id, newColumnIdx))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Item);