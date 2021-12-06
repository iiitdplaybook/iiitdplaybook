import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ResolvingQueries.css";

const ResolvingQueries = () => {
    return (
        <div>
            <Navbar
                loggedIn={localStorage.getItem("isSignedIn")}
                colorStatus={true}
            />
            <h1 className="main_heading">Resolving Queries</h1>
            <div className="introduction">
                <div className="ip_vs_btp">
                    <div className="card">
                        <div className="note">
                            <h3> Fees </h3>
                            <ul>
                                <li>
                                    <a
                                        href="mailto:varsha@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Varsha Aggarwal</u>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:admin-web@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Fee Portal Issues</u>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="note">
                            <h3> Academics/Program-related queries </h3>
                            <ul>
                                <li>
                                    <a
                                        href="mailto:admin-btech@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Admin BTech</u>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:admin-mtech@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Admin MTech</u>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:admin-mtech@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Admin PhD</u>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="note">
                            <h3> Academics/Program-related queries </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.iiitd.ac.in/admission/fees/loan-scheme"
                                        target="_blank"
                                    >
                                        <u>Loan Scheme</u>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:kapil@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Sh. Kapil Chawla</u>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="note">
                            <h3> Club Reimbursement </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.iiitd.ac.in/sa"
                                        target="_blank"
                                    >
                                        <u>Student Affairs</u>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:sonal@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Sonal Garg</u>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:ravi@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Ravi Bhasin</u>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="note">
                            <h3> Medical Leave/Emergency </h3>
                            <ul>
                                <li>
                                    <a
                                        href="mailto:admin-btech@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Admin Btech</u>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="note">
                            <h3> Scholarship/Fee Waiver </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.iiitd.ac.in/admission/btech-scholarship"
                                        target="_blank"
                                    >
                                        <u>Scholarship</u>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="note">
                            <h3> Course Advice </h3>
                            <ul>
                                <li>Seniors - Whatsapp/Instagram</li>
                                <li>
                                    <a
                                        href="https://docs.google.com/document/d/1v8EJcxPvXgtNYNFtnUjrvdiP3F5UZMM3vqw7HcDsN7A/edit?usp=sharing"
                                        target="_blank"
                                    >
                                        <u>Course reviews</u>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="note">
                            <h3> SG/CW </h3>
                            <ul>
                                <li>
                                    <a
                                        href="mailto:admin-btech@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Admin Btech</u>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="note">
                            <h3> Placement </h3>
                            <ul>
                                <li>
                                    <a
                                        href="mailto:scp@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Student Convenors for Placement</u>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:admin-placement@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Deepak Chaudhary</u>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:admin-placement2@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Sanjay Chauhan</u>
                                    </a>
                                </li>
                                <li>
                                    Offer Acceptance:
                                    <a
                                        href="mailto:admin-placement@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Aayushi Shishodia</u>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="note">
                            <h3> Hostel Allotment </h3>
                            <ul>
                                <li>
                                    <a
                                        href="mailto:ravi@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Ravi Bhasin</u>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="note">
                            <h3> IT Queries </h3>
                            <ul>
                                <li>
                                    <a
                                        href="mailto:helpdesk@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>IT Helpdesk</u>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="note">
                            <h3> PhD Fellowship </h3>
                            <ul>
                                <li>
                                    <a
                                        href="mailto:imran@iiitd.ac.in"
                                        target="_blank"
                                    >
                                        <u>Imran Khan</u>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResolvingQueries;
