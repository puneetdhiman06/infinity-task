import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "./Components/Navbar";
import Login from "./Login";
import Customer from "./Usertype/Customer";
import Employee from "./Usertype/Employee";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/customer", element: <Customer /> },
  { path: "/employee", element: <Employee /> },
]);

export default function App() {
  return (
    <ChakraProvider>
      {localStorage.getItem("userName") && <Navbar />}
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

// logic for login
// const userName = localStorage.getItem("userName");
// const password = localStorage.getItem("password");
// const userType = localStorage.getItem("userType");

// if (!userName)
//   return (
//     <ChakraProvider>
//       <Login />
//     </ChakraProvider>
//   );
// else {
//   return (
//     <ChakraProvider>
//       <Navbar />
//       {userName === "customer" && userType === "Customer" && <Customer />}
//       {(userName === "employee1" || userName === "employee2") &&
//         userType === "Employee" && <Employee />}
//       <h1>Please Use Correct Auth for signing in</h1>
//       <Footer />
//     </ChakraProvider>
//   );
// }
