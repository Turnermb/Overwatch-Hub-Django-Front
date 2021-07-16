import React from "react"
import {Link} from "react-router-dom"

const SinglePost = ({posts, match, edit, deletePost}) => {
    const id = parseInt(match.params.pk)
    console.log(id)
    const post = posts.find((post) => post.pk === id)
    console.log(posts.pk)

    const div = {
        color: "white",
        margin: "10px auto",
        width: "80%"
    }

    const button = {
        color: "white",
        backgroundColor: "#1338be",
        border: "2px solid navy",
        display: "block",
        margin: "10px auto",
        width: "100%",
      }

    const buttonDiv = {
        width: "32%",
        float: "right",
    }

    const contentDiv = {
        width: "65%",
        float: "left",
    }

    return (
        <div style={div}>
            <div className="contentDiv" style={contentDiv}>
                <h2>{post.fields.battletag} - {post.fields.personal_sr} {post.fields.role}</h2>
                <h3>Lobby SR: {post.fields.lobby_sr}</h3>
                <h3>Replay Code: {post.fields.replay_code}</h3>
                <h3>{post.fields.details}</h3>
            </div>
            <div className="buttonDiv" style={buttonDiv}>
                <button style={button} onClick={(e) => {edit(post)}}>Edit Replay Information</button>
                <button style={button} onClick={(e) => {deletePost(post)}}>Delete Replay Information</button>
                <Link to="/">
                    <button style={button}>Back</button>
                </Link>
            </div>
        </div>
    )
}

export default SinglePost