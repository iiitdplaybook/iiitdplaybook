import React from "react";
import PageFooter from "../../PageFooter";
import { metadata } from "../../metadata";
import "../global.css";
import { HiUpload } from "react-icons/hi";
import { IconContext } from "react-icons";
import VerticalSlickSlider from "../../../VerticalSlickSlider/VerticalSlickSlider";
import YTSlider from "../../../YTSlider/YTSlider";

const Preparation = ({ callback, list, video }) => {
    return (
        <div className="preparation" style={{ width: "85%", margin: "0 auto" }}>
            <div style={{ marginTop: "3.5%" }}>
                <YTSlider portraits={video} />
                <VerticalSlickSlider properties={list} />
            </div>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
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
                            Share your preparation journey
                        </button>
                    </a>
                </div>
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
