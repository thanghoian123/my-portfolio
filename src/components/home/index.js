import React from 'react';
import './style.css';

function Home(props) {
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
        </div>
    );
}

export default Home;