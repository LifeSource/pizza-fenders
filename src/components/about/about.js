import React from "react";

class About extends React.Component {

    constructor() {
        super();
        
    }

    render() {

        return (
            <div className="about-page">
                <h1>About Pizza Fenders</h1>
                <br />
                <h3>Background</h3>
                Pizza fenders is a demo web application used to show-case the capabilities
                of Facebook's ReactJS UI library to build a full fledge real-time data driven application. It was built with the Node platform and data are stored in MongoDB. There were 
                four goals in mind when building this application:

                <br />
                <br />
                <h3>Goals:</h3>
                <ol>
                    <li>Create a React Yeoman Generator for ReactJS base development.</li>
                    <li>Learn ReactJS by building an application with it.</li>
                    <li>To use this application as a portfolio item.</li>
                    <li>Lastly to challenge myself and hone my web front-end development skills in visual design and coding.</li>
                </ol>
                    
                <h3>Requirements:</h3>
                Below are the requirements for this application while fictious but can actually be real world business cases:
                <ul>
                    <li>There is a simple menu that list the pizzas available.</li>
                    <li>The application has a simple invoicing system that displays the ordered item from the menu.</li>
                </ul>
            </div>  
        );
    }
}

export default About;
