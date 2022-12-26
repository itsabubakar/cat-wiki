import { useState } from "react"
import Breeds from "./Breeds"
import Header from "./Header"
import Hero from "./Hero"
import WhyCat from "./WhyCat"

const Home = () => {
    return (
        <div className="mt-5">
            <Header />
            <Hero />
            <Breeds />
            <WhyCat />
        </div>
    )
}
export default Home