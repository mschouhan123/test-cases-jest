import logo from './logo.svg';
import './App.css';
import CommentForm from './component/CommentForm';
import CommetList from './component/CommentList';
import { useState } from 'react';
function App() {
  const [comments, setComments] = useState([]);
//     const comments = [
//     {id: 1, text: "nice pic"}, 
//     {id: 2, text: "comment List"}
// ];
  return (
    <div>
      <CommentForm setComments={setComments}/>
      <CommetList allcomments={comments}/>
    </div>
  );
}

export default App;
