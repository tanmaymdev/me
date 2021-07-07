import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a developer at a leading Investment Bank. Love solving real world problems using technology. My experience as developer in Financial Market domain made me realise how much of an impact a simple line of code can make <i>(well no one likes tech glitches in billions of $ transactions :) )</i>. Into Software and Web devlopment for a living. My new found interest is harnessing the power of data using Machine learning alogrithms, still in the exploration phase excited to learn more about it.</p>
                    <p>Apart from the above I like to explore "Homo Sapiens's <i>(The apparent wise men)</i>journey through history" and "The Cosmos <i>(Earth is round period)</i>"</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience in building WebApps using JavaScript,React,HTML,CSS</p>
                    <br/>
                    <br/>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Full Stack Development</h3>
                    <p>Well versed and expierenced in full stack development using ReactJS,SpringBoot,NodeJs and PostgreSQL</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Problem Solving</h3>
                    <p>Provide Technological Solutions For Real World Problems</p>
                    <br/>
                    <br/>
                </div>
                </div>
            </div>
            </div>
            </div>
            </section>
      </div>
    )
  }
}