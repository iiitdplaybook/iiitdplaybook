// import React, { useState, useEffect } from "react";
import React from "react";
import PageFooter from "../../PageFooter";
import { metadata } from "../../metadata";
import "../global.css";
import TextCard from "../../../TextCard/TextCard";
import { fetchCP } from "../../fetchData";
import Testimonials from "../../../Testimonies/TestimonialsPlacement";

const InterviewTips = ({ callback, list, testimonials }) => {
    return (
        <div
            className="interview_tips"
            style={{ width: "85%", margin: "0 auto" }}
        >
            <TextCard props={list.slice(0, Math.min(4, list.length))} />
            <Testimonials portraits={testimonials} />
            <TextCard props={list.slice(4, list.length)} />

            <PageFooter
                settings={{
                    left: {
                        alignment: "left",
                        image: metadata["preparation"].image,
                        redirect: {
                            linkType: "component",
                            componentName: "preparation",
                        },
                        setActive: callback,
                        title: "Get started with internship preparation",
                    },
                    right: {
                        alignment: "right",
                        image: metadata["experience"].image,
                        redirect: {
                            linkType: "component",
                            componentName: "experience",
                        },
                        setActive: callback,
                        title: "During Internship",
                    },
                }}
            />
        </div>
    );
};

export default InterviewTips;
