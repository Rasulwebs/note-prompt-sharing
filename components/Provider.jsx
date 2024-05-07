"use client";

import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Provider = ({ children, session }) => (
  <SessionProvider session={session}>
    <ToastContainer 
     position="top-center"
     autoClose={2000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="colored"
    />
    {children}
  </SessionProvider>
);

export default Provider;
