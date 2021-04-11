import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
			<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/irri.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="">Intelligent Irrigation System</a></h3>
											<span>Designed an “IOT based Intelligent Irrigation System” to provide the solution for the incessant water shortage problem in India’s agricultural system, this may seem a trivial problem for first world countries but for a country like India where 56% out 130 Billion people work in the agricultural sector it is a serious predicament.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/dash.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">ReactJs and Spring Boot based Excel DashBoard</a></h3>
											<span>Specifically for Business users and Project Managers handling big projects. In todays day and age no body likes number . Data representation through Pie-Charts/Graphs etc. is need of the hour. This tool helps users input a excel sheet and extract graphs/charts out of it as per user customised requirement</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/xmlimg.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Java based csv to xml converter</a></h3>
											<span>Just like JSON, XML is the languange of information transfer. ETL systems transferring data by mode of csv file transfer creates issue for other system in consuming it. This tools provides an easy and convient way convert the csv to the specifed xml format so that other systems can consume data seem lessly</span>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 04</a></h3>
											<span>Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
						</div>
						{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
					</div>
				</section>
      </div>
    )
  }
}
