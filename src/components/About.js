import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component{
  constructor(props){
    super(props);

    console.log("Parent Constructor");
  }
  
  componentDidMount(){
    console.log("Parent component Did Mount");
    
  }
  render(){
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Anup kumar web series</h2>
        {/* <User name={"Anup kumar (function)"}/> */}
        <UserClass name={"first"} Location={"Delhi Class"}/>  
      </div>
    );

  }
}

export default About;