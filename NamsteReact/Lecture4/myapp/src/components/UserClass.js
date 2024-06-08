import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name: "default",
                location: "default",
            }, 
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/hasuq33")
        const json = await data.json(); 
        this.setState({userInfo: json}); 
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    componentDidUpdate(){
        console.log("component Did Update")
    }
    render(){
        const {name , location , avatar_url } = this.state.userInfo;
        return (
            <div className="user-card" style={{padding:'10px'}}>
                <img src={avatar_url} height={'200px'} width={'200px'}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: harshivjoshi1234@gmail.com</h4>
            </div>
        )
    }
}
export default UserClass;

/**
 * ---Mounting ---
 * 
 * constructor (dummy )
 * Render (dummy)
 *   <HTML dummy >
 * Component Did Mount
 *   <API Call>
 *   <this.setState> -> State Variable updated
 * --UPDATE
 *   
 *   render (API Call)
 *   <HTML new APi Data>
 *   ComponentDidUpdate Called  
 */