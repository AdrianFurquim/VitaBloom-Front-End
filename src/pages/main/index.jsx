import { Outlet } from "react-router-dom"
import Navbar from "../../components/layout/Navbar"
import Footer from "../../components/layout/Footer"

export default function Main() {

    return(
        <>
            <Navbar/>
            <Outlet /> 
            <Footer/>
        </>
    )
}