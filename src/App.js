// Components
import AllPosts from "./pages/AllPosts"
import SinglePost from "./pages/SinglePost"
import Form from "./pages/Form"
import Header from "./components/header"
import Footer from "./components/footer"

// React and Hooks
import React, {useState, useEffect} from "react"

// Route and Switch
import {Route, Switch} from "react-router-dom"

// Other
import './App.css';

function App() {

  //////////
  // State and other variables
  //////////

  // API URL
  const url = "https://overwatchhubmt.herokuapp.com/posts/"

  // State to hold posts
  const [posts, setPosts] = useState([])

  //////////
  // Functions
  //////////

  const getPosts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPosts(data)
  }

  //////////
  // Use Effects
  //////////

  useEffect(() => {
    getPosts()
  }, [])
  
  //////////
  // Returned JSX
  //////////

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/posts" render={(routerProps) => <AllPosts {...routerProps} posts={posts}/>}/>
        <Route path="/post/:id" render={(routerProps) => <SinglePost {...routerProps} posts={posts}/>}/>
        <Route path="/new" render={(routerProps) => <Form {...routerProps}/>}/>
        <Route path="/edit" render={(routerProps) => <Form {...routerProps}/>}/>
      </Switch>
    </div>
  );
}

export default App;
