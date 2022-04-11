import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { showCartActions } from '../../Store/cart';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const onSubmit=()=>{
    dispatch(showCartActions.onShowCart());
  }
  return (
    <button className={classes.button} onClick={onSubmit}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
