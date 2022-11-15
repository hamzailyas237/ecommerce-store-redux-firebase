

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AcceptProductAction,
  RemoveProductFromAdminPanelAction,
  RemoveToCartAction,
  SelectedItemAction,

} from '../store/actions/ProductActions';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/Firebase';

function ProductCard(props) {

  const dispatch = useDispatch()
  const selectItem = () => {
    dispatch(SelectedItemAction(props.product))
  }

  const removeFromCart = () => {
    dispatch(RemoveToCartAction(props.product))
  }

  const approveProduct = async () => {
    dispatch(AcceptProductAction(props.product))
    const docRef = await addDoc(collection(db, "Products"), props.product);
  }

  const rejectProduct = () => {
    dispatch(RemoveProductFromAdminPanelAction(props.product))
    // alert('Your Ad is Rejected')
  }



  return (
    <div>
      <Card className="card-container" style={{ paddingBottom: props.removeItem ? '30px' : '0px' }}>
        <Link to="/selectedItem" onClick={selectItem}>
          <Card.Img variant="top" style={{ height: '150px', width: '100px', margin: '0 auto' }}
            src={props.product.image ? props.product.image : null} />

          <Card.Body>
            <Card.Text> {props.product.title}</Card.Text>
            <small> {props.product.price}$</small> <br /> <br />
          </Card.Body>
        </Link>

        {props.removeItem ?
          <Button onClick={removeFromCart} className='remove-from-cart-btn' variant="primary">Remove</Button>
          :
          null
        }

        {props.productToApprove ?
          <div>
            <Button onClick={approveProduct} style={{ margin: '5px' }} variant="primary">Accept</Button>
            <Button onClick={rejectProduct} style={{ margin: '5px' }} variant="primary">Reject</Button>
          </div>
          :
          null
        }
      </Card>

    </div>
  );
}

export default ProductCard;