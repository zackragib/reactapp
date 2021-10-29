import React , {useEffect} from 'react'
import { Button, Row, Col } from 'react-bootstrap' 
import { useSelector, useDispatch } from 'react-redux'
import { addSomeData, subSomeData, addDataBy5, resetCounter } from '../actions/addAction'
import { productList } from '../actions/getProductAction'
import ProductItem from '../components/ProductItem'

function Homepage() {

    const myData = useSelector((state)=> state.addData)
    const dispatch = useDispatch();
 

    

    useEffect(() => {
        
        dispatch(productList())
     
    }, [dispatch])
 

    const checkoutHandler = () => {
        dispatch(addSomeData())
    }

    const dataBy5Handler = () => {
        dispatch(addDataBy5())
    }

    const resetHandler = () => {
        dispatch(resetCounter())
    }

    const productddd = useSelector(state => state.productList)
    const {products} = productddd
  
   
    return (
        <div >
            <Row>
                <Col md={5}>
                    <div className='redCol py-4 px-4'>
                <h1>Redux Library Test</h1>
                <button onClick={()=>dispatch(subSomeData())}  variant='info' type='button' className='btn btn-pill btn-info btn-block'>Sub</button>
                <h2>My Current Data is {myData}</h2>
                <button onClick={checkoutHandler}  variant='info' type='button' className='btn btn-pill btn-danger btn-block'>Add</button>
                <button onClick={dataBy5Handler}  variant='info' type='button' className='btn btn-pill btn-danger btn-block'>Add 5</button>
                <br/>
                <button onClick={resetHandler}  variant='info' type='button' className='btn btn-pill btn-primary btn-block'>Reset Counter</button>
                </div>
                </Col>
        
                <Col md={7}>
                    <h2>Here is product</h2>
                    {
                         products.map(prod =>(
                            <ProductItem key={prod._id} product={prod}/>
                            ))
                    }
                    <button className='btn btn-primary'> Boots </button>
                </Col>
            
                </Row>
        </div>
    )
}

export default Homepage
