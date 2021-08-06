import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { HiUpload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons";
import PageFooter from "../../PageFooter";
import { metadata } from "../../metadata";
import PdfViewer from "./pdfViewer";
import "../global.css";
import "./Resume.css";
import Testimonials from "../../../Testimonies/TestimonialsPlacement";

const Resume = ({ callback, list, testimonials }) => {
    const [focus, setFocus] = useState(0);
    const slidesNum =
        window.innerWidth < 600
            ? Math.min(1, list.length)
            : Math.min(4, list.length);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: slidesNum,
        speed: 500,
        arrows: window.innerWidth < 600 ? false : true,
        focusOnSelect: true,
        dots: true,
        beforeChange: (current, next) => setFocus(next),
    };

    return (
        <div className="resume">
            <div className="upper_container">
                <p className="page_title">
                    As recommended by students, for students.
                </p>
                <div style={{ width: "auto", marginTop: "40px" }}>
                    <a
                        href={"https://forms.gle/tW6YTaeDzXV6FKif6"}
                        target="_blank"
                    >
                        <button className="download">
                            <IconContext.Provider
                                value={{
                                    color: "#03ccac",
                                    display: "inline",
                                    marginRight: "5px",
                                }}
                            >
                                {/* <a href={list[focus].linkedin}> */}
                                <div className="icon">
                                    <HiUpload />
                                </div>
                                {/* </a> */}
                            </IconContext.Provider>
                            Share your resume
                        </button>
                    </a>
                </div>
            </div>
            <div className="resume_slider">
                <Slider {...settings}>
                    {list.map((item, index) => (
                        <div className="container">
                            <img
                                className={
                                    focus === index
                                        ? "resume_img active"
                                        : "resume_img"
                                }
                                src={item.cover}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="resume_details">
                <div className="profile">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img
                            src={list[focus].image}
                            className="resume_avatar"
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                flex: "1",
                            }}
                        >
                            <div className="header">
                                <h1>{list[focus].name}</h1>
                                <IconContext.Provider
                                    value={{
                                        color: "black",
                                        display: "inline",
                                    }}
                                >
                                    <a
                                        href={list[focus].linkedin}
                                        target="_blank"
                                        className="linkedin_link"
                                    >
                                        <div className="linkedin_icon">
                                            <FaLinkedinIn className="icon" />
                                        </div>
                                    </a>
                                </IconContext.Provider>
                            </div>
                            <div className="batch">
                                Batch of {list[focus].batch}
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        The resume below worked for:
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                        }}
                    >
                        {list[focus].tags.map((item) => (
                            <div className="company_tag">{item}</div>
                        ))}
                    </div>
                </div>
                <div className="full_resume">
                    {/* <img src={list[focus].link} /> */}
                    <PdfViewer file={list[focus].link} />
                </div>
            </div>
            <Testimonials portraits={testimonials} />
            <PageFooter
                settings={{
                    left: {
                        alignment: "left",
                        image: metadata["introduction"].image,
                        redirect: {
                            linkType: "component",
                            componentName: "introduction",
                        },
                        setActive: callback,
                        title: "Introduction",
                    },
                    right: {
                        alignment: "right",
                        image: metadata["preparation"].image,
                        redirect: {
                            linkType: "component",
                            componentName: "preparation",
                        },
                        setActive: callback,
                        title: "Get started with internship preparation",
                    },
                }}
            />
        </div>
    );
};

export default Resume;
