import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { HiDownload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons";
import PageFooter from "../../PageFooter";
import { metadata } from "../../metadata";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import edsall from "../../../../Assets/Internships/sample_resume/edsall.pdf";
import "../global.css";
import "./Resume.css";

const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
    // workerSrc: "/pdf.worker.js",
};

const Resume = ({ callback, list }) => {
    const [focus, setFocus] = useState(0);
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

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
                                <HiDownload />
                            </div>
                            {/* </a> */}
                        </IconContext.Provider>
                        Download the IIITD template
                    </button>
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
                        <img src={list[focus].image} className="avatar" />
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
                                    <div className="linkedin_icon">
                                        <FaLinkedinIn className="icon" />
                                    </div>
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
                    <Document
                        file={list[focus].link}
                        onLoadSuccess={onDocumentLoadSuccess}
                        options={options}
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                scale="1.3"
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                            />
                        ))}
                    </Document>
                </div>
            </div>
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
