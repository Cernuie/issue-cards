import './App.css';
import Issues from "./components/Issues"

function App() {
  let issues = [
    {
      index: 0,
      name: "Issue 1",
      assigned_to: ['name1', 'name2'],
      issue: "Bug 1",
      priority: "High"
    },
    {
      index: 1,
      name: "Issue 2",
      assigned_to: ['name3', 'name4'],
      issue: "Bug 2",
      priority: "Low"
    }
  ]
  return (
    <div className="App">
      <Issues issues={issues}/>
    </div>
  );
}

export default App;
