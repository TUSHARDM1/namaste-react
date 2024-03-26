import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import "../output.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from './components/Error';
import Mentor from "./components/Mentor";
import ProductDetails from "./components/ProductDetail";
import Mentee from "./components/Mentee";
import Cart from "./components/Cart";
import CartProductDetails from "./components/CartProductDetails";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// const heading = React.createElement("h1", {id: "heading", className: "heading"}, "Hello from React code!");
// console.log("Heading => ",heading);
// React code is first of all object which is then rendered to create HTML Element besically
// React.createElement ==> Object ==> HTMLElement(render)

const root = ReactDOM.createRoot(document.getElementById("root"));

// const parent = React.createElement("div", {id: "parent"}, 
//     React.createElement("div", {id: "children"}, 
//        [
//         React.createElement("h1", {className: "heading"}, "I am H1 Tag Tushar 😄 🚀"),
//         React.createElement("h2", {}, "I am H2 Tag")
//         ] 
//     )
// );
// console.log("Parent Div => ",parent);
// var simpleVariable = "Hello Tushar Maheshwari";
// // React JSX Element
// const helloMessage = (<h1 id="heading" className="my-class">
//     Hello Tushar Maheshwari!
//     </h1>);
// // React Functional Component
//  StandardHeading = () => {
//     return <h1>I am Functional Component simple!</h1>
//  };
//  StandardHeading4 = () => {
//     return <h1>I am Functional Component injected as a function!</h1>
//  };
// // React Functional Component2
//  StandardHeading2 = () => (<h1>I am Functional Component injected!</h1>);
//  StandardHeading3 = () => (
//     <div className="container">
//         <p>{simpleVariable}</p>
//         {StandardHeading4()}
//         <StandardHeading></StandardHeading>
//         <StandardHeading2 />
//         <h2>I am Functional Component own!</h2>
//     </div>
//     );

// console.log("helloMessage =>", helloMessage);
// // root.render(parent);
// root.render(<StandardHeading/>);
// root.render(<StandardHeading3/>);
// root.render(heading);





const ContactLazyPage = lazy(()=> import("./components/Contact"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(()=> {
    const data = {
      name: "Tushar M",
    }
    setUserName(data.name);
  }, [])
    return (
      <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
          <div className="container">
              <Header></Header>
              <Outlet></Outlet>
          </div>
        </UserContext.Provider> 
      </Provider>
    )
}




const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/mentor",
        element: <Mentor></Mentor>
      },
      {
        path: "/mentee",
        element: <Mentee></Mentee>
      },
      // { Loaded as lazy load
      //   path: "/contact",
      //   element: <Contact></Contact>
      // },
      {
        path: "/contact",
        element: <Suspense fallback={<h1>Loading....!</h1>}>
                    <ContactLazyPage></ContactLazyPage>
                  </Suspense>
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      },
      {
        path: "/product-details/:userId",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/cart-product-details/:productId",
        element: <CartProductDetails></CartProductDetails>
      }
    ],
    errorElement: <Error></Error>
  },
  
])

root.render(<RouterProvider router={appRouter}/>)