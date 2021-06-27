import React, {useState} from "react"

const Form = ({initialPost, handleSubmit, buttonLabel, history}) => {
    // Initiate form with initialPost state
    const [formData, setFormData] = useState(initialPost)

    // Handle Change function
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }   

    // Handle Submit function
    const handleSubmission = (e) => {
        e.preventDefault()
        handleSubmit(formData)
        history.push("/posts")
    }
    
    const input = {  
        margin: "0 auto",
        color: "white",
        width: "15%",
        height: "7%",
        display: "block",
        border: "none",
        borderBottom: "2px solid rgba(255, 255, 255, .5)"
    }
    
    const button = {
        color: "white",
        backgroundColor: "#1338be",
        border: "2px solid navy",
        display: "block",
        margin: "10px auto"
    }

    const label = {
        color: "white",
        textAlign: "center",
        margin: "10px auto",
        paddingTop: "5px"
    }

    return (
        <form onSubmit={handleSubmission}>
            <label style={label}>Battletag</label>
            <input style={input} type="text" onChange={handleChange} value={formData.battletag} name="battletag"/>
            <label style={label}>Personal SR</label>
            <input style={input} type="text" onChange={handleChange} value={formData.personal_sr} name="personal_sr"/>
            <label style={label}>Role</label> 
            <input style={input} type="text" onChange={handleChange} value={formData.role} name="role"/>
            <label style={label}>Lobby SR</label>
            <input style={input} type="text" onChange={handleChange} value={formData.lobby_sr} name="lobby_sr"/>
            <label style={label}>Replay Code</label>
            <input style={input} type="text" onChange={handleChange} value={formData.replay_code} name="replay_code"/>
            <label style={label}>Details</label>
            <input style={input} type="text" onChange={handleChange} value={formData.details} name="details"/>
            <input style={button} type="submit" value={buttonLabel}/>
        </form>
    )
}

export default Form