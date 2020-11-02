import React, { useEffect, useState } from 'react';
import './style.css';

function Home(props) {
    const {projects,pageNumbers,trimmedData,pagination} = props;

    const ele = trimmedData.map((item, index) => {
        return (
            <div className="project-item" key={index}>
                <div className="project-item-inner outer-shadow">
                    <div className="project-img">
                        <a href="#">View project</a>
                        <img src="https://firebasestorage.googleapis.com/v0/b/image-file-upload.appspot.com/o/IMG_20200223_093745.jpg?alt=media&token=cd0836c5-d183-47be-b0f9-2aa2f46131f5" alt="" />
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.full_name} </p>
                </div>
            </div>
        )
    })
    return (
        <div>
            <section className="home-section section">
                <div className="effect-wrap">
                    <div className="effect effect-1"></div>
                    <div className="effect effect-3"></div>
                    <div className="effect effect-4"></div>
                    <div className="effect effect-5">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row full-screen align-items-center">
                        <div className="home-text">
                            <p>Hello</p>
                            <h2>I'm Thang Pham</h2>
                            <h1>Web Designer & Developer </h1>
                            <a href="#" className="btn-1 outer-shadow">More About Me</a>
                        </div>
                        <div className="home-img">
                            <div className="img-box">
                                <img className="outer-shadow" src="https://firebasestorage.googleapis.com/v0/b/image-file-upload.appspot.com/o/IMG_20200223_093745.jpg?alt=media&token=cd0836c5-d183-47be-b0f9-2aa2f46131f5" alt="" />
                            </div>
                            <div className="contact-box">
                                <h1>Name: Pham Manh Thang</h1>
                                <h1>Phone : +84 769144735</h1>
                                <h1>Gmail: kuthang32@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section section">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2 data-heading="Main Info">About me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-img">
                            <div className="img-box">
                                <img className="outer-shadow" src="https://firebasestorage.googleapis.com/v0/b/image-file-upload.appspot.com/o/received_1624742091025698.jpeg?alt=media&token=c2cfe386-240c-41cb-9ce5-8f3ab83d0630" alt="" />
                            </div>
                            <div className="social-links">
                                <a className="outer-shadow" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a className="outer-shadow" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a className="outer-shadow" href="#"><i className="fa fa-google" aria-hidden="true"></i></a>
                                <a className="outer-shadow" href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="about-info">
                            <p><span>Hi! My name's Thang. I'm a Web Developer & Designer</span> of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a
                            type specimen book.</p>
                            <p>It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.</p>
                            <a href="cv.pdf" className="outer-shadow btn-1">Download CV</a>
                            <a href="cv.pdf" className="outer-shadow btn-1">Hire me</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-tags">
                            <span className="tag-item outer-shadow active" data-target=".skills">Skills</span>
                            <span className="tag-item outer-shadow " data-target=".experience">Experience</span>
                            <span className="tag-item outer-shadow " data-target=".education">Education</span>
                            <span className="tag-item outer-shadow " data-target=".projects">Projects</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="projects tag-content">
                            <div className="row">

                                {ele}


                                <div className="pagination">
                                    {/* <div className="button active"></div>
                                    <div className="button"></div>
                                    <div className="button"></div>
                                    <div className="button"></div> */}
                                    {pageNumbers.map((item, index) => {
                                        return (
                                            <div className="button" key={index} onClick={()=>pagination(item)}>{item}</div>
                                        )
                                    })}
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="row">
                        <div className="skills tag-content active">
                            <div className="row">
                                <div className="skill-item">
                                    <p>Html</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(50% - 14px)' }}>
                                            <span>50%</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="skill-item">
                                    <p>Css</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(50% - 14px)' }}>
                                            <span>50%</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="skill-item">
                                    <p>Javascript</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(70% - 14px)' }}>
                                            <span>70%</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="skill-item">
                                    <p>Bootstrap</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(60% - 14px)' }}>
                                            <span>60%</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="skill-item">
                                    <p>ReactJS</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(50% - 14px)' }}>
                                            <span>50%</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="experience tag-content">
                            <div className="row">
                                <div className="timeline">
                                    <div className="row">
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-briefcase icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Fullstack Developer</h3>
                                                <h4>Company name</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-briefcase icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Fullstack Developer</h3>
                                                <h4>Company name</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-briefcase icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Fullstack Developer</h3>
                                                <h4>Company name</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-briefcase icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Fullstack Developer</h3>
                                                <h4>Company name</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="education tag-content">
                            <div className="row">
                                <div className="timeline">
                                    <div className="row">
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-graduation-cap icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Student of</h3>
                                                <h4>Duy Tan University</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-graduation-cap icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Student of</h3>
                                                <h4>Duy Tan University</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-graduation-cap icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Student of</h3>
                                                <h4>Duy Tan University</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-graduation-cap icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Student of</h3>
                                                <h4>Duy Tan University</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* service section */}
            <section className="service-section section">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2 data-heading="Services">What i do</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="service-item">
                            <div className="service-item-inner outer-shadow">
                                <div className="icon outer-shadow">
                                    <i className="fa fa-mobile" aria-hidden="true"></i>
                                </div>
                                <h3>Responsive Design</h3>
                                <p>It has survived not only five centuries,
                                but also the leap into electronic typesetting</p>

                            </div>
                        </div>

                        <div className="service-item">
                            <div className="service-item-inner outer-shadow">
                                <div className="icon outer-shadow ">
                                    <i className="fa fa-desktop" aria-hidden="true"></i>
                                </div>
                                <h3>Web Design</h3>
                                <p>It has survived not only five centuries,
                                but also the leap into electronic typesetting</p>
                            </div>
                        </div>

                        <div className="service-item">
                            <div className="service-item-inner outer-shadow">
                                <div className="icon outer-shadow ">
                                    <i className="fa fa-mobile" aria-hidden="true"></i>
                                </div>
                                <h3>Graphic Design</h3>
                                <p>It has survived not only five centuries,
                                but also the leap into electronic typesetting</p>
                            </div>
                        </div>

                        <div className="service-item">
                            <div className="service-item-inner outer-shadow">
                                <div className="icon outer-shadow ">
                                    <i className="fa fa-mobile" aria-hidden="true"></i>
                                </div>
                                <h3>Clean Code</h3>
                                <p>It has survived not only five centuries,
                                but also the leap into electronic typesetting</p>
                            </div>
                        </div>

                        <div className="service-item">
                            <div className="service-item-inner outer-shadow">
                                <div className="icon outer-shadow ">
                                    <i className="fa fa-mobile" aria-hidden="true"></i>
                                </div>
                                <h3>SEO Marketing</h3>
                                <p>It has survived not only five centuries,
                                but also the leap into electronic typesetting</p>
                            </div>
                        </div>

                        <div className="service-item">
                            <div className="service-item-inner outer-shadow">
                                <div className="icon outer-shadow ">
                                    <i className="fa fa-mobile" aria-hidden="true"></i>
                                </div>
                                <h3>Great Support</h3>
                                <p>It has survived not only five centuries,
                                but also the leap into electronic typesetting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="portfolio-section section">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2 data-heading="Portfolio">Latest Works</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="portfolio-item">
                            <div className="portfolio-item-inner outer-shadow">
                                <div className="portfolio-img">
                                    <a href="#">View project</a>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/image-file-upload.appspot.com/o/IMG_20200223_093745.jpg?alt=media&token=cd0836c5-d183-47be-b0f9-2aa2f46131f5" alt="" />
                                </div>
                                <h3>Lorem, ipsum dolor sit amet</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>

                            </div>

                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-item-inner outer-shadow">
                                <div className="portfolio-img">
                                    <a href="#">View project</a>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/image-file-upload.appspot.com/o/IMG_20200223_093745.jpg?alt=media&token=cd0836c5-d183-47be-b0f9-2aa2f46131f5" alt="" />
                                </div>
                                <h3>Lorem, ipsum dolor sit amet</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>

                            </div>

                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-item-inner outer-shadow">
                                <div className="portfolio-img">
                                    <a href="#">View project</a>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/image-file-upload.appspot.com/o/IMG_20200223_093745.jpg?alt=media&token=cd0836c5-d183-47be-b0f9-2aa2f46131f5" alt="" />
                                </div>
                                <h3>Lorem, ipsum dolor sit amet</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-item-inner outer-shadow">
                                <div className="portfolio-img">
                                    <a href="#">View project</a>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/image-file-upload.appspot.com/o/IMG_20200223_093745.jpg?alt=media&token=cd0836c5-d183-47be-b0f9-2aa2f46131f5" alt="" />
                                </div>
                                <h3>Lorem, ipsum dolor sit amet</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className="portfolio-popup">
                            <div className="popup-content">
                                <div className="close-tag outer-shadow">
                                    &times;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;