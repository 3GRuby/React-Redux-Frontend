import React, { useEffect } from 'react'
import Navitem from '../Navbar/Navitem'
import Item from '../Item/Item'
import { useDispatch,  } from 'react-redux'
import { fetchItems } from '../../Redux/Actions/action'

export default function Home() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch])

    return (
        <div>
            <Navitem/>
            <Item/> 
        </div>
    );
}


