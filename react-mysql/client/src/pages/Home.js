import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);

  // let history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      // console.log(response.data)
      setListOfPosts(response.data)
    })
  }, []);
  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div
            className='post'
            onClick={() => {
              // history.push(`/post/${value.id}`);
              window.location.href = `/post/${value.id}`
            }}
            key={value.id}>
            <div className='title'>{value.title}</div>
            <div className='body'>{value.postText}</div>
            <div className='footer'>{value.username}</div>
          </div>
        )
      })}</div>
  )
}

export default Home

// onClick = {() => { window.location.href = "/createpost" }}
