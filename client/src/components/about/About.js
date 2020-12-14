import React, {Fragment, useEffect} from "react";

const About = ({}) => {
    useEffect(() => {}, []);
    return(
        //1. ation to import the posts
        //2. loop through all the posts. 
        <Fragment>
            <h1>About</h1>
            <div>
                <p>
                    Here at Brox we want to see how the latest information technology can be used and applied.
                    We want you to know what state current tech is at, so you don't get lost in the raging waters of progress.

                </p>
                <p>
                    We want to talk about serious work without taking ourselves too seriously. 
                    Knowledge can be empowering, but also scary. Keep up with us and we'll help you understand why things might be changing so fast. 
                    
                </p>
            </div>
        </Fragment>
    )
}

export default About;