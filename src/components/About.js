import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from 'react';

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <p>This is a functional component</p>
//             <User name={"Tushar Maheshwari (From Functional Component)"}></User>
//             <UserClass name={"Dipali Maheshwari (From Class Based Component)"} 
//             location={"Pune"}></UserClass>
//         </div>
//     )
// }
class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("From About Us Main component constructor")
    }
    componentDidMount() {
        console.log("From About Us componentDidMount");
    }
    render() {
        console.log("From About Us Render Method");
        return (
        <div>
            <h1>About</h1>
            <p>This is a CLASS Based component</p>
            <UserContext.Consumer>
                {({loggedInUser}) => (
                   <h3>{loggedInUser}</h3>
                )}
            </UserContext.Consumer>
            <div className="flex flex-wrap">
            <User name={"Tushar Maheshwari (From Functional Component)"}></User>
            <UserClass name={"Dipali Maheshwari (From Class Based Component)"} 
            location={"Pune"}></UserClass>
            </div>
            
            {/* <UserClass name={"Dhiraj Maheshwari (From Class Based Component)"} 
            location={"Belora"}></UserClass> */}
        </div>
        )
    }
}
export default About;