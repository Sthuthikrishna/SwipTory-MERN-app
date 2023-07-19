import React from "react";
import './home.css';


const Home = () => {

    return (
        <>
            <div className="navbar" bg="light">
                <div className="nav-top">
                    <h1 href="#home">SwipTory</h1>
                    <a className="register" href="/register" >Register</a>
                    <a className="signin" href="/signin">Signin</a>
                </div>
            </div>

            <div className="home">
                <div className="home-container">
                    <div className="category">
                        <a className="all" href='/homepg' >All</a>
                        <a className="food" href='/food'>Food</a>
                        <a className="hf" href='/health'>Health & Fitness</a>
                        <a className="travel" href='/travel'>Travel</a>
                        <a className="movie" href='/movie'>Movie</a>
                        <a className="edu" href='/education'>Education</a>

                    </div>
                    <div>
                        stories
                    </div>


                </div>

            </div>
        </>
    )
}
export default Home
