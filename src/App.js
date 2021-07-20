// Components
import AllPosts from "./pages/AllPosts"
import SinglePost from "./pages/SinglePost"
import Form from "./pages/Form"
import Header from "./components/header"

// React and Hooks
import React, {useState, useEffect} from "react"

// Route and Switch
import {Route, Switch, Link} from "react-router-dom"

// Other
import './App.css';

function App(props) {

  //////////
  // State and other variables
  //////////

  // API URL
  const url = "https://overwatchhubdjango.herokuapp.com/"

  // State to hold posts for new
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

  // State to hold posts for edit
  const [targetPost, setTargetPost] = useState(nullPost)

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

  const getTargetPost = async (post) => {
    setTargetPost(post)
    props.history.push("/edit")
  }

  const updatePost = async (formData) => {
    const response = await fetch(url + [targetPost.pk], {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    getPosts()
  }

  const deletePost = async (post) => {
    const response = await fetch(url + post.pk, {
      method: "delete"
    })

    getPosts()
    props.history.push("/")
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
    margin: "10px auto",
    width: "20%"
  }
  
  const plusDiv = {
    fontSize: "20px",
    float: "left"
  }

  //////////
  // Returned JSX
  //////////

  return (
    <div className="App">
      <Header/>
      <Link to="/new"><button style={button}><div style={plusDiv}>+</div> Add New Replay</button></Link>
      <Switch>
        <Route exact path="/" render={(routerProps) => <AllPosts {...routerProps} posts={posts}/>}/>
        <Route path="/post/:id" render={(routerProps) => <SinglePost {...routerProps} posts={posts} edit={getTargetPost} deletePost={deletePost}/>}/>
        <Route path="/new" render={(routerProps) => <Form {...routerProps} initialPost={nullPost} handleSubmit={addPosts}/>}/>
        <Route path="/edit" render={(routerProps) => <Form {...routerProps} initialPost={targetPost} handleSubmit={updatePost} />}/>
      </Switch>
    </div>
  );
}

export default App;
