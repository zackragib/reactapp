import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/Loader'
import { useSelector, useDispatch } from 'react-redux'

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};


const a = ['a','a', 'a', 'a', 'a']

class InfinitePage extends Component {
  state = {
    items: ['a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d']
  };

  

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat([...a])
      });
    }, 2000);
  };

  render() {
    return (
      <>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<Loader/>}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      </>
    );
  }

}

  
  export default InfinitePage;
