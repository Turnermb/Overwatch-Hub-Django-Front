import React from "react"
import Post from "../components/post"

const AllPosts = (props) => {

    const img = {
        height: "2%",
        width: "2.5%",
    }

    const h1 = {
        fontFamily: "Play, Sans Serif",
        color: "white",
        display: "inline-block",
        width: "90%",
    }

    const loaded = () => {
        return props.posts.map((post) => <Post post={post} key={post.id}/>)
    }

    const loading = () => {
        return <h1 style={h1}>L<img style={img} src="https://www.seekpng.com/png/full/13-134284_the-largest-collection-of-overwatch-shirts-hoodies-overwatch.png" alt="Overwatch Logo"/>ADING...</h1>
    }

    return (
        <div>{props.posts && props.posts instanceof Array ? loaded() : loading()}</div>
    )
}

export default AllPosts