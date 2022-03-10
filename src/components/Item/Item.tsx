import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
import { useSelector, useDispatch } from 'react-redux'
import { rootStateType } from '../../Redux/Reducers'
import { addToCart } from '../../Redux/Actions/action'

export default function Item() {

    const { filtereProduct } = useSelector(
        (state: rootStateType) => state.productReducer
    );

    const theme = useSelector((state: rootStateType) => state.productReducer.theme)

    const dispatch = useDispatch();

    return (
        <div className={"bg-" + theme}  >
            <Container fluid="md"  >
                <br />
                <Row >
                    {filtereProduct.map((product) => (

                        <Col xs={12} md={4} lg={3}><Card style={{ width: '20rem', }} key={product.id} className="text-center">
                            <Card.Body style={{ width: '20rem', height: '25rem' }}>
                                <Card.Img variant="top" src={product.image} style={{ width: '10rem', height: '12rem' }} className="text-center" />
                                <Card.Title className="text-center" >{product.title}</Card.Title>
                                <Card.Text className="text-center">
                                    {product.category}
                                </Card.Text>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Price :{product.price}$</ListGroupItem>
                                    <ListGroupItem>Rating :{product.rating.rate}Stars</ListGroupItem>
                                    <ListGroupItem>Stock: {product.rating.count}</ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                            <Button variant="outline-dark" onClick={() => dispatch(addToCart(product))}>Add to Bag</Button>
                        </Card>
                            <br />
                        </Col>

                    ))}
                </Row>
            </Container>
        </div>

    )
}
