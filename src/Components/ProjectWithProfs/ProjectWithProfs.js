import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ProjectWithProfs.css";

const ProjectWithProfs = () => {
    return (
        <div>
            <Navbar
                loggedIn={localStorage.getItem("isSignedIn")}
                colorStatus={true}
            />
            <h1 className="main_heading">Project with Professors</h1>
            <div className="introduction">
                <h1 className="heading">How to get a Project?</h1>
                <div className="card">
                    <ol>
                        <li>
                            Read about the professor's interests and research
                            fields through the college website or the
                            professor's website. Then mail them asking about
                            vacancies for projects in the professor's field you
                            are most interested in.
                        </li>
                        <li>
                            Reply to emails from professors asking for students
                            interested in project opportunities.
                        </li>
                        <li>
                            Asking a professor to continue your course project
                            as an IP/BTP with them.
                        </li>
                        <li>
                            Asking seniors/friends who are currently working on
                            some projects with professors if they have a vacancy
                            or need another student for their project.
                        </li>
                    </ol>
                </div>
                <div className="ip_vs_btp">
                    <div className="card">
                        <h1>IP</h1>
                        <ul>
                            <li>
                                An IP requires around 10 hours of effort per
                                week
                            </li>
                            <li>
                                You work on the project with the professor. You
                                sync up with them weekly or biweekly or however
                                else you all agree to.
                            </li>
                            <li>
                                The project is evaluated only by the professor
                                in charge unless the professor wants to present
                                to external evaluators or a panel.
                            </li>
                            <li>
                                A complete thesis is not needed to be submitted,
                                but the professor may or may not ask for a brief
                                research paper.
                            </li>
                        </ul>
                        <img src="https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/rvi_research.png" />
                    </div>
                    <div className="vs">v/s</div>
                    <div className="card">
                        <h1>BTP</h1>
                        <ul>
                            <li>
                                A complete thesis/report is required and its
                                format can be found{" "}
                                <a
                                    href="https://www.iiitd.ac.in/academics/btech/btp"
                                    target="_blank"
                                >
                                    <u>here</u>
                                </a>
                                .
                            </li>
                            <li>
                                A minimum of 2 regular consecutive semesters
                                (Example: Monsoon and Winter) commitment is
                                required, which translates to 8 credits.
                            </li>
                            <li>
                                BTP is evaluated by professors other than the
                                project advisor.
                            </li>
                            <li>
                                BTP needs to be presented to the evaluators
                                during the BTP presentations that take place
                                towards the end of the semester.
                            </li>
                        </ul>
                        <img src="https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/rvi_internship.png" />
                    </div>
                </div>
                <h1 className="heading">Things to Keep in Mind?</h1>
                <div className="card">
                    <ol>
                        <li>
                            Ask the professor about his/her expectations from
                            the project such as research paper, external
                            evaluation, panel presentation.
                        </li>
                        <li>
                            Do not opt for a project in the field you are not
                            interested in, especially in the case of a BTP. A
                            BTP requires a minimum of 2 semesters' worth of
                            commitment, so it is better to work on something you
                            want to rather than for the sake of doing a project.
                        </li>
                        <li>
                            Be open with the professor regarding your progress.
                        </li>
                        <li>
                            Ask for help from the professor whenever and
                            wherever required.
                        </li>
                    </ol>
                    <div className="note">
                        <h3> Note </h3>
                        <ul>
                            <li>
                                <a
                                    href="https://www.iiitd.ac.in/academics/btech/btp"
                                    target="_blank"
                                >
                                    <u>BTP Guidelines</u>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.iiitd.ac.in/placement/summer-internships"
                                    target="_blank"
                                >
                                    <u>IIITD Summer Research Internships</u>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectWithProfs;
