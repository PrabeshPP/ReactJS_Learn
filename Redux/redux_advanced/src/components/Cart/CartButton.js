import classes from './CartButton.module.css';
import { useDispatch ,useSelector} from 'react-redux';
import { showCartActions } from '../../Store/UI';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const totalQuant=useSelector(state=>state.cart.totalQuantity)
  const onSubmit=()=>{
    dispatch(showCartActions.onShowCart());
  }
  return (
    <button className={classes.button} onClick={onSubmit}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuant}</span>
    </button>
  );
};

export default CartButton;
