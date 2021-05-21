import React, { useState, useEffect } from "react";
import PageFooter from "../../PageFooter";
import { metadata } from "../../metadata";
import "../global.css";
import "./Introduction.css";
import Testimonials from "../../../Testimonies/TestimonialsPlacement";
import Slider from "react-slick";
// import pic1 from "../../../../Assets/Internships/rules/pic1.png";
// import pic2 from "../../../../Assets/Internships/rules/pic2.png";
// import pic3 from "../../../../Assets/Internships/rules/pic3.png";
import RulesCard from "./RulesCard";
import { fetchCP } from "../../fetchData";

const Introduction = ({ callback }) => {
    const [cpList, setCpList] = useState([]);

    useEffect(() => {
        fetchCP({ setCpList });
    });

    const rulesCards = [
        {
            image: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/aa156e0d/src/Assets/Internships/Internship_rules/internship_rule.png",
            title: "Internship Rules",
            tips: {
                tip1: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/739a8083/src/Assets/Internships/Internship_rules/intership_rule1.png",
                tip2: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/739a8083/src/Assets/Internships/Internship_rules/intership_rule2.png",
                tip3: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/739a8083/src/Assets/Internships/Internship_rules/intership_rule3.png",
                tip4: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/739a8083/src/Assets/Internships/Internship_rules/intership_rule4.png",
                tip5: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/739a8083/src/Assets/Internships/Internship_rules/intership_rule5.png",
            },
        },
        {
            image: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/aa156e0d/src/Assets/Internships/Placement_rules/placement_rule.png",
            title: "Placement Rules",
            tips: {
                tip1: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/739a8083/src/Assets/Internships/Placement_rules/placement_rule1.png",
                tip2: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/739a8083/src/Assets/Internships/Placement_rules/placement_rule2.png",
                tip3: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/739a8083/src/Assets/Internships/Placement_rules/placement_rule3.png",
                tip4: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/739a8083/src/Assets/Internships/Placement_rules/placement_rule4.png",
                tip5: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/739a8083/src/Assets/Internships/Placement_rules/placement_rule5.png",
                tip6: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/739a8083/src/Assets/Internships/Placement_rules/placement_rule6.png",
                tip7: "https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/739a8083/src/Assets/Internships/Placement_rules/placement_rule7.png",
            },
        },
    ];

    const slidesNum =
        window.innerWidth < 600
            ? Math.min(1, rulesCards.length)
            : Math.min(3, rulesCards.length);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: slidesNum,
        speed: 600,
        arrows: window.innerWidth < 600 ? false : true,
        dots: true,
    };

    return (
        <div className="introduction">
            <h1 className="heading">Why Internship?</h1>
            <div className="card">
                <ol>
                    <li>
                        It is a great way to apply classroom knowledge to the
                        real world. It helps one explore different career paths
                        and specializations that may suit them.
                    </li>
                    <li>
                        It gives you experience in the career field. This helps
                        you prepare for what to expect from a job in a similar
                        field, increases confidence in skills and gives you an
                        edge over others.
                    </li>
                    <li>
                        Internships provide a great environment to meet
                        professionals in the career field you want to pursue, as
                        well as other interns who have similar interests.
                    </li>
                    <li>
                        It can provide students with the soft skills needed in
                        the workplace and in leadership positions
                    </li>
                    <li>
                        Internships help students learn all about workplace
                        culture, employee relations, and leadership structure,
                        which should help them onboard in their first
                        professional job with more ease than if they haven’t had
                        professional experience.
                    </li>
                    <li>
                        Most organizations and jobs that you apply to following
                        graduation want employees to have some sort of
                        professional experience.
                    </li>
                    <li>
                        Internships provide opportunities for receiving feedback
                        from someone who works in your desired field on a daily
                        basis.
                    </li>
                    <li>
                        You can learn from the best during an internship. People
                        will be watching over you and working closely with you
                        on projects so that you have someone to look up to and a
                        goal to work towards.
                    </li>
                </ol>
            </div>
            <div className="rules_reg">
                <h1 className="heading">Rules and Regulations</h1>
                <Slider {...settings}>
                    {rulesCards.map((card) => (
                        <RulesCard card={card} />
                    ))}
                </Slider>
            </div>
            <h1 className="heading">Is CP important?</h1>
            <Testimonials portraits={cpList} />
            <div className="research_vs_internship">
                <div className="card">
                    <h1>Internship</h1>
                    <ul>
                        <li>
                            If you wish to pursue a job after graduation, then a
                            corporate internship would be recommended over a
                            research one.
                        </li>
                        <li>
                            It gives you industry experience and helps you build
                            connections. It teaches you how it is to work in a
                            team and spend long hours at work.
                        </li>
                        <li>
                            If you are seeking real industry-experience and
                            aspire to get a job soon after, choose industrial
                            training.
                        </li>
                    </ul>
                    <img src="https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/rvi_research.png" />
                </div>
                <div className="vs">v/s</div>
                <div className="card">
                    <h1>Research</h1>
                    <ul>
                        <li>
                            If you wish to pursue a Masters degree after
                            graduation, then a research internship would be
                            recommended over a corporate one.
                        </li>
                        <li>
                            It is comparatively tough to achieve but can help
                            you enhance your learnings. A successfully completed
                            research internship has a lot of value and it
                            establishes you as someone who has the commitment to
                            approaching a project and completing it on your own.
                        </li>
                        <li>
                            If you are a person who loves getting deep into a
                            subject, exploring new stuff and are self-motivated,
                            choose research internships.
                        </li>
                    </ul>
                    <img src="https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/internships/src/Assets/Internships/rvi_internship.png" />
                </div>
            </div>
            <PageFooter
                settings={{
                    left: {
                        alignment: "left",
                        colors: ["#236FDC", " #43AEDA"],
                        image: metadata["preparation"].image,
                        redirect: {
                            linkType: "link",
                            link: "https://iiitdplaybook.web.app/homepage",
                        },
                        title: "Research with Professors",
                    },
                    right: {
                        alignment: "right",
                        image: metadata["resume"].image,
                        redirect: {
                            linkType: "component",
                            componentName: "resume",
                        },
                        setActive: callback,
                        title: "Build Your Resume",
                    },
                }}
            />
        </div>
    );
};

export default Introduction;
