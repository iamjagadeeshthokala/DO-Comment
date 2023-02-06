import Comment from "./components/Comment";
import axios from 'axios'
import { useEffect, useState } from "react";
import AddComment from "./components/AddComment";

let url="http://localhost:3000"
function App() {
  let [comments,setComments]=useState([])
  async function getComments(){
    let result=await axios.get(`${url}/comments`)
    setComments(result.data)
  }

  async function postComment(data){
    let result=await axios.post(`${url}/comments`,data)
    getComments()
  }

  useEffect(()=>{
    getComments()
  },[])
  return (
    <>
      <header>Hello world</header>
      <main>
        {comments.map((e)=>(<Comment comment={e} />))}
        <div>
          <button>Add comment</button>
        </div>
        <AddComment postComment={postComment} />
      </main>
    </>
  );
}

export default App;