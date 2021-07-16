import React from "react"
import {Link} from "react-router-dom"

const Post = ({post}) => {
    const div = {
        textAlign: "center",
        borderTop: "1px solid rgba(255, 255, 255, .5)",
        borderBottom: "1px solid rgba(255, 255, 255, .5)",
        margin: "10px auto",
        width: "80%"
    }

    return (
        <div className="postLinks" style={div}>
            <Link to={`/post/${post.pk}`}>
                <h4>{post.fields.personal_sr} {post.fields.role} - {post.fields.details}</h4>
            </Link>
            
        </div>
    )
}

export default Post