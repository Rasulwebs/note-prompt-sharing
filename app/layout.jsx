import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
          <ToastContainer
            position='top-center'
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
            transition={"Bounce"}
          />
    </body>
  </html>
);

export default RootLayout;
