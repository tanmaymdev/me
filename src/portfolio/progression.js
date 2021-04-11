import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Developer at Standard Chartered GBS-India <span>  Jun'19-present</span></h2>
                        <p>Essaying the role of Full Stack Developer in Technology and Innovation Unit for Financial Markets Domain</p><p>Part of Razor Project Development Squad, Razor is multi-year delivery project aimed to increase the automation and agility of post-trade life cycle in various markets across the globe</p><p>Working on leading development technologies and frameworks like ReactJS, Spring Boot, AWS, etc.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor of Technology from Vellore Institute of Technology <span>  2015-2019</span></h2>
                        <p>I did my Undergraduate studies at the prestigious Vellore Institute of Technology (VIT) where I qualified for my Bachelor’s education specializing in Electrical and Electronics Engineering. My passion towards engineering and consistent academic performance helped me earn 5th rank in my class of 180 excellent students</p>
                        <p>I took courses on "Problem Solving and Programming", "Objest Oriented Programming" complimenting it with MOOCs from Coursera on "Java Programming"</p>
                        <p>I was able to explore more than it was taught in the classroom. Apart from the prescribed fundamental data structures, I went ahead to understand more about the advanced data structures like Linked List, Graphs, Trees (AVL), etc</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Research and Publications</h2>
                        <p>MALTESAS - International Symposium on Technology Management and Emerging Technologies (ISTMET)-2018      <br/><span>Tanmay, M., Aditya, P., Saroj, K.S. and Swathika, O.G., 2018. Hybrid Boruvkas –Floyd Warshall Algorithm for Identification of Shortest Path to Clear Fault in Reconfigurable Microgrid. Lecture Notes in Technology Management and Emerging Technologies, pp.44-48.</span></p>
                        <p>This was a beautiful amalgamation of Electrical Engineering and Computer Science. We took an Electrical engineering problem and applied computer science concepts to solve it. The paper proposed a hybrid Borvuka’s-Floyd Warshall’s Algorithm for identifying active DG’s, loads, and main grid in the network. The algorithms find the shortest path to clear the fault by identifying the cheapest path between faulted point and utility grid. In this way healthy portion of system is isolated from faulted portion</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
