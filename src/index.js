import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import "../src/assets/css/style.css";

import App from "./App";

// Cấu hình react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import HomeTemplates from "./HomeTemplates/HomeTemplates";
import Header from "./components/Header/Header.jsx";
import BuyTicket from "./pages/BuyTicket/BuyTicket";

// Cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

// Biến để quản lý chuyển hướng trang
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="" element={<HomeTemplates />}>
            <Route index path="" element={<Home />}></Route>
            <Route path="buyticket" element={<BuyTicket />}></Route>
            <Route path='about' element={<div>About</div>}/>
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>

//   <BrowserRouter>
//     <Routes>
//       <Route path="" element={<HomeTemplates />}>
//         <Route index path="" element={<Home />}></Route>
//         <Route path="buyticket" element={<BuyTicket />}></Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
);
