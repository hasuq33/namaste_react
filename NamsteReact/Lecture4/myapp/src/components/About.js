import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
            <UserClass name={"Harshiv Joshi Class"} location={"Kapdvanj Class"}/>
            <h1>About US</h1>
            <h2>This is Namaste React web series</h2>
        </div>
        )
    }
}

/*
 - Parent Constructor Called
 - Parent Render Called

    - Harshiv User Class constrictor Called
    - Harshiv User Class Render Called

    - Elon User Class constrictor Called
    - Elon User Class Render Called

    <DOM UPPDATED- IN SINGLSE BATCH> 
    Note: Here First Render Phase completed and then commit phase started it will be executed DOM manipulation
    which is most expensive part of any website rendering 
    - Harshiv CompoenentDid Mount Called
    - Elon CompoenentDid Mount Called
 - Parent ComponentDidMount Called
 */

export default About;