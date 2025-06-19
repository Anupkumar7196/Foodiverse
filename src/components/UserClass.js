 import React from "react";

 class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state ={
            userInfo:{
                name: "Dummy",
                Location: "Default",
                avatar_url: "http://dummy-photo",
            }
        }
        // console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount(){
        // console.log(this.props.name+ "Child component Did mount");
        const data = await fetch("https://api.github.com/users/AnupKumar7196");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log(json);
    }

    render(){
        // console.log(this.props.name + "Child Render");
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2> Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: anupk7196@gmail.com</h4>
            </div>
            );
    }
 }


export default UserClass;