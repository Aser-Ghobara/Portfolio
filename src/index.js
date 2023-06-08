// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <GoogleOAuthProvider clientId="688418329243-7mcs416aea796tim10g6qeca8mm6h9t5.apps.googleusercontent.com">
//       <React.StrictMode>
//         <BrowserRouter  >
//           <Routes>
//             <Route path="/" element={<App />} />
//            {/*} <Route element={<Layout />}>
//               <Route path="/" element={<Empty />} />
//               <Route path="/notes" element={<Empty />} />
//               <Route
//                 path="/notes/:noteId/edit"
//                 element={<WriteBox edit={true}/>}
//               />
//               <Route path="/notes/:noteId" element={<WriteBox edit={false} />} />
      
//               <Route path="*" element={<Empty />} />
//             </Route>
//              */}
//           </Routes>
//         </BrowserRouter>
//       </React.StrictMode>
//     </GoogleOAuthProvider>
//   </>,
// );

// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);


