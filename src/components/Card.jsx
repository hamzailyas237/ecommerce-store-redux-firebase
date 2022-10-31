

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RemoveToCartAction, SelectedItemAction } from '../store/actions/ProductActions';

function ProductCard(props) {

  const dispatch = useDispatch()
  const selectItem = () => {
    dispatch(SelectedItemAction(props.product))
  }
 
  const removeFromCart = () => {
    dispatch(RemoveToCartAction(props.product))
  }

  return (
    <div>
      <Card className="card-container" style={{paddingBottom: props.removeItem ? '30px' : '0px'}}>
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
      </Card>

    </div>
  );
}

export default ProductCard;