import React, { useCallback } from 'react'
import { BsFillBagCheckFill } from "react-icons/bs";
import {BsLightningChargeFill} from "react-icons/bs"
import {BsLightningCharge} from "react-icons/bs"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { rootStateType } from '../../Redux/Reducers';
import { Link } from 'react-router-dom';
import { getHandleEvent , toggleTheme ,filteredByCategory, sortByValue} from '../../Redux/Actions/action';

export default function Navitem() {

  const { cart } = useSelector((state: rootStateType) => state.productReducer)
  const theme = useSelector((state:rootStateType)=> state.productReducer.theme)

  const dispatch = useDispatch();
  const handleEvent = useCallback((event:React.ChangeEvent<HTMLInputElement>)=>{
    let newKeyword =  event.target.value
    dispatch(getHandleEvent(newKeyword))
  }, [dispatch])

  const handleChangeValue = (event:React.ChangeEvent<HTMLSelectElement>)=>{
    dispatch(filteredByCategory(event.target.value));
  };

  const handleSortValue = (event:React.ChangeEvent<HTMLSelectElement>)=>{
    dispatch(sortByValue(event.target.value))
  }

  return (
    <div className='nav-background'>
    <Navbar bg={theme} variant="light" className='navbar-bd' >
      <Container>
        <Navbar.Brand href="#home">SHOP</Navbar.Brand>
        <Nav className="me-auto">
        <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleEvent}
          />
         
          <select  title="CATEGORY"  onChange={handleChangeValue}>
          <option value="All">All ITEM</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery" >jewelery</option>
          <option value="electronics" >electronics</option>
          <option  value="women's clothing">women's clothing</option>
        </select>
        <select  title="sort"  onChange={handleSortValue}> {/* sort option */}
         <option value="default">default</option>
          <option value="Z-A">A-Z</option>
          <option value="price">Price</option>
          <option value="rating" >Rating</option>
         
        </select>
        </Nav> 
        <div className='Toggle'>
        {theme === "light" ? <BsLightningCharge onClick={()=>dispatch(toggleTheme())}/> : <BsLightningChargeFill onClick={()=>dispatch(toggleTheme())}/>}
        </div>
        <Link to={"/cart"} style={{ textDecoration: "none" }}><BsFillBagCheckFill className="cart-icon"/></Link>
        {cart.length === 0 ? <div className='cart-value-zero'>{cart.length}</div> : <div className='cart-value'>{cart.length}</div> }
      </Container>
    </Navbar>
    </div>
  )
}
