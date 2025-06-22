import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
// Import Page from "./component/file.name"
//Chunking
//Code Splitting
//Dynamic Boundling
//Lazy Loading
//On demand Loading
//dynamic import

const About = lazy(()=> import("./components/About"));


const AppLayout =()=>{

    
    const [userName, setUserName] = useState();

    //authentication
    useEffect(()=>{
        //Make an API call and send username and pasword
        const data = {
            name: "Anup kumar"
        };
        setUserName(data.name);
    }, []);

    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div  className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
    );
};

const appRouter= createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element:(
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About/>
                    </Suspense>
                )
            },
            {
                path:"contact",
                element: <Contact />
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            },
        ],
        errorElement: <Error />,
    },
    
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter}/>);