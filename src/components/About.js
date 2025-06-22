import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";
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
        <div>
          <UserContext.Consumer>
            {({loggedInUser}) =>(
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Anup kumar web series</h2>
        {/* <User name={"Anup kumar (function)"}/> */}
        <UserClass name={"first"} Location={"Delhi Class"}/>  
      </div>
    );

  }
}

export default About;