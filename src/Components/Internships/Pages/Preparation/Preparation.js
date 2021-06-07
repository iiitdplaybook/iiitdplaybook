import React from "react";
import PageFooter from "../../PageFooter";
import { metadata } from "../../metadata";
import "../global.css";
import VerticalSlickSlider from "../../../VerticalSlickSlider/VerticalSlickSlider";
import YTSlider from "../../../YTSlider/YTSlider";

const Preparation = ({ callback, list, video }) => {
    return (
        <div className="preparation" style={{ width: "85%", margin: "0 auto" }}>
            <div style={{ marginTop: "3.5%" }}>
                <YTSlider portraits={video} />
                <VerticalSlickSlider properties={list} />
            </div>
            <PageFooter
                settings={{
                    left: {
                        alignment: "left",
                        image: metadata["resume"].image,
                        redirect: {
                            linkType: "component",
                            componentName: "resume",
                        },
                        setActive: callback,
                        title: "Build Your Resume",
                    },
                    right: {
                        alignment: "right",
                        image: metadata["interviewTips"].image,
                        redirect: {
                            linkType: "component",
                            componentName: "interviewTips",
                        },
                        setActive: callback,
                        title: "Interview Tips",
                    },
                }}
            />
        </div>
    );
};

export default Preparation;
