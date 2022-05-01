import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import Home from "./Home"
import {Navbar} from "./Navbar"
import {AddData} from "./AddData"
export const Routers = () =>{
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/create"} element={<AddData/>}></Route>
        </Routes>
        </>
    )
}