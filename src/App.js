import React, { useEffect, useState } from "react";
import axios from "axios";
//import logo from './logo.svg';
import './App.css';

function App() {
  const main_url = "http://localhost:3000";
  const [commits, setCommits] = useState([]);


  const getCommits = () => {
    axios
       .get(main_url + "/api/v1/github/get_commits/tuxrick/FTF_test_api")
       .then((resp) => {
         setCommits(resp.data.data);
       });
  };

  useState(() => {
    getCommits();
  }, []);



  return (
    <div className="App">
        
        {
          /*
            <img src={logo} className="App-logo" alt="logo" />
          */
        }
        
        {commits.map((commit, index) =>
          <div key={index}>
            <p>{commit.commit.author.name}</p>
            <p>{commit.commit.author.email}</p>
            <p>{commit.commit.message}</p>
          </div>
        )}

        {
          /*
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>          
          */
        }
    </div>
  );
}

export default App;
