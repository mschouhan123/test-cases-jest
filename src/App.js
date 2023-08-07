import logo from './logo.svg';
import './App.css';
import CommentForm from './component/CommentForm';
import CommetList from './component/CommentList';
function App() {
  const comments = [];
//     const comments = [
//     {id: 1, text: "nice pic"}, 
//     {id: 2, text: "comment List"}
// ];
  return (
    <div>
      <CommentForm />
      <CommetList allcomments={comments}/>
    </div>
  );
}

export default App;
