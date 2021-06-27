// Components
import AllPosts from "./pages/AllPosts"
import SinglePost from "./pages/SinglePost"
import Form from "./pages/Form"
import Header from "./components/header"
import Footer from "./components/footer"

// React and Hooks
import React, {useState, useEffect} from "react"

// Route and Switch
import {Route, Switch, Link} from "react-router-dom"

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

  // Null post
  const nullPost = {
    battletag: "",
    personal_sr: "",
    role: "",
    lobby_sr: "",
    replay_code: "",
    details: "",
  }

  //////////
  // Functions
  //////////

  const getPosts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPosts(data)
  }

  const addPosts = async (newPost) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    })

    getPosts()
  }

  //////////
  // Use Effects
  //////////

  useEffect(() => {
    getPosts()
  }, [])

  //////////
  // Styling
  //////////

  const button = {
    color: "white",
    backgroundColor: "#1338be",
    border: "2px solid navy",
    display: "block",
    margin: "10px auto"
  }
  
  //////////
  // Returned JSX
  //////////

  return (
    <div className="App">
      <Header/>
      <Link to="/new"><button style={button}>Add New Replay</button></Link>
      <Switch>
        <Route exact path="/posts" render={(routerProps) => <AllPosts {...routerProps} posts={posts}/>}/>
        <Route path="/post/:id" render={(routerProps) => <SinglePost {...routerProps} posts={posts}/>}/>
        <Route path="/new" render={(routerProps) => <Form {...routerProps} initialPost={nullPost} handleSubmit={addPosts} buttonLabel="Add New Replay"/>}/>
        <Route path="/edit" render={(routerProps) => <Form {...routerProps}/>}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
