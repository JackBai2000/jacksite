import React from 'react';
import FireLevel from "../images/firelevel.png"
import PlayScreen from "../images/playscreen.png"
import NextLevel from "../images/nextlevel.png"
import Pengu from "../images/pengucharacter.png"
import IceLevel from "../images/icelevel.png"
import PenguPaper from "../images/pengupaper.png"

class PastProjects extends React.Component{


    render(){
        return (
    <div>

		<title>Past Projects</title>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>


					<header id="header">
						<nav>
						</nav>
					</header>
					<nav id="menu">
						<div className="inner">
							<h2>Menu</h2>
							<ul className="links">
								<li><a href="MainPage">Home</a></li>
								<li><a href="PastProjects">Past Projects</a></li>
								<li><a href="WorkExperience">Work Experience</a></li>
								<li><a href="Hobbies">Hobbies</a></li>
							</ul>
							<a href="#" className="close">Close</a>
						</div>
					</nav>
					
					<section id="wrapper">
						<header>
							<div className="inner">
								<h2>Past Projects</h2>
								<p>This section is insert good text please help anybody</p>
							</div>
						</header>
							<div className="wrapper">
								<div className="inner">
					


					<section id = "wrapper alt spotlight style2">
							<header>
								<h3 className="major">Pengu In Trouble</h3>
								<div className = "content">
								<p>This project was created using Unity and C# scripts as an interactive and immersive method to experience game development.</p>
								<a className = "image"> <img src = {IceLevel} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "100%"} }/></a>
								</div>
							</header>
						</section>

					<section id = "wrapper alt spotlight style 2">
							<header>
								<h3 className = "major">Pengu Paper</h3>
								<div className = "content">
								<p>This project was created as an introduction to some basic HTML, CSS, and JS elements.</p>
								<a className = "image"> <img src = {PenguPaper} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "100%"} }/> </a>
								</div>
							</header>
					</section>

					<section id = "footer">
						<header>
							<h3 className = "major">Coming Soon!</h3>
						</header>
					</section>

            </div>
            </div>

            <div>
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
            </div>
     
	    </section>
        </div>
    );
    }
};

export default PastProjects;