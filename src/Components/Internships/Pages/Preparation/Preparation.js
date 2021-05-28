import React from "react";
import PageFooter from "../../PageFooter";
import { metadata } from "../../metadata";
import "../global.css";

const Preparation = ({ callback }) => {
    return (
        <div className="preparation" style={{ width: "85%", margin: "0 auto" }}>
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
