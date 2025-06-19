import { useEffect, useState } from "react";
const User = ({name}) => {
    const [count] = useState(0);
    const [count1] = useState(1);

    useEffect(()=>{
        //api call
    }, []);

    async function getUserInfo(){
     
    }

    return (
    <div className="user-card">
        <h1>Count: {count}</h1>
        <h1>Count: {count1}</h1>
        <h2> Name: {name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: anupk7196@gmail.com</h4>
    </div>
    );
};
export default User;