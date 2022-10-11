import './App.css';
import React, { useState, useEffect } from 'react'
import Issues from "./components/Issues"
import NewIssues from './components/NewIssues';
import axios from 'axios';

function App() {
  const [issues, setIssues] = useState([
    {
      id: 0,
      issue_name: "Issue 1",
      assigned_to: 'Name 1',
      description: "Bug 1",
      priority: "High"
    },
    {
      id: 1,
      issue_name: "Issue 2",
      assigned_to: 'Name 3',
      description: "Bug 2",
      priority: "Low"
    }
  ])

  useEffect(() => {
    const url = 'http://localhost:4444/api/issues'
    axios.get(url).then((res) => {
      setIssues(res.data.response)
    }).catch((e) => console.log(e))
  }, [])

  return (
    <div className='d-flex' style={ {height:'100vh'} }>
      <Issues width="30%" issues={issues}/>
      <NewIssues />
    </div>
  );
}

export default App;
