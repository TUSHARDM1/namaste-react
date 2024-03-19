import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 1,
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "Dummy_Photo"
            }
        };
        console.log(this.props.name + " From UserClass Constructor")
    }
    async componentDidMount() {
        console.log(this.props.name + "From UserClass componentDidMount");
        const data = await fetch("https://api.github.com/users/TUSHARDM");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
    }
    componentDidUpdate() {
        console.log("Component Updated!")
    }
    render() {
       // const {name, location} = this.props;
        const {count, count2, userInfo} = this.state;
        const {name, location, avatar_url} = userInfo;
        console.log(name + " From UserClass Render");
        return (
            <div className="user-card">
               <h2>Count = {count}</h2>
               <h2>Count2 = {count2}</h2>
               <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 1
                })
               }}>Increase Count</button>
               <h3>Name: {name}</h3>
               <h4>Location: {location}</h4>
               <h5>Contact: DipaliTM</h5>
               <img src={avatar_url} />
            </div>
        ) 
    }   
}

export default UserClass;