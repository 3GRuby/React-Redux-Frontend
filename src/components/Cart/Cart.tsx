import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rootStateType } from '../../Redux/Reducers'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { removeItem, removeAllItem } from '../../Redux/Actions/action';

export default function Cart() {

  const dispatch = useDispatch()
  const { cart } = useSelector((state: rootStateType) => state.productReducer);

  return (

    <Container>
      <div className='container-class'>
        <h1 className='header'>Shopping Cart</h1>
        <Table responsive="sm">
          <thead>
            <tr>
              <th></th>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((Items) => (
              <tr>
                <td><img src={Items.image} alt="imagetag" className='img-cart' /></td>
                <td>{Items.title}</td>
                <td>{"$" + Items.price}</td>
                <td><Button variant="danger" size="sm" onClick={() => dispatch(removeItem(Items))} >Remove</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className='cart-btn-box'>
          <Button className='back-btn' variant="outline-info" size="sm">
            <Link to="/" style={{ textDecoration: "none" }}>Continue Shopping</Link></Button>
          <Button className='empty-btn' variant="outline-info" size="sm" onClick={() => dispatch(removeAllItem())}>Empty Cart</Button>
        </div>
      </div>
    </Container>
  )
}
