import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/Loader'
import { Row } from 'react-bootstrap'
import StudentInfo from '../components/StudentInfo'

function Func() {

    const studentList = useSelector((state) => state.studentList)
    let { students, error, loading } = studentList
    
    const dispatch = useDispatch()
    const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
  };
    const [items, setItems] = useState([...students])
    const a = ['a','a', 'a', 'a', 'a']
    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
      dispatch({type:'SayHI'})
        setTimeout(() => {
          const a = ['a', 'a', 'a', 'a', 'a']
          
          setItems(prevItem => {
            return [...prevItem, ...a]
          })

        }, 2000);
      };
    return (
        <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<Loader/>}
        >
          <Row>
          {items.map((i, index) => (
            
              <StudentInfo key={index} student={i}/>
              
          ))}
          </Row>
            </InfiniteScroll>
            </div>
    )
}

export default Func
