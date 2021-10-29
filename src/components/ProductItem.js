import React from 'react'
import { Card } from 'react-bootstrap'




function ProductItem({product}) {

 

    return (
        <Card className="my-3 p-3 rounded">
           <Card.Body>
           <Card.Title className= 'redCol'>{product.name}</Card.Title>
           <Card.Text>{product.description}</Card.Text>
           </Card.Body>
        </Card>
    )
}

export default ProductItem
