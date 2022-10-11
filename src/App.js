import './App.css';
import Issues from "./components/Issues"
import NewIssues from './components/NewIssues';

function App() {

  return (
    <div className='d-flex' style={ {height:'100vh'} }>
      <Issues width="30%"/>
      <NewIssues />
    </div>
  );
}

export default App;
