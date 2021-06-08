import React from "react";
import PageFooter from "../../PageFooter";
import { metadata } from "../../metadata";
import "./Experience.css";
import "../global.css";
import YTSlider from "../../../YTSlider/YTSlider";
import Testimonials from "../../../Testimonies/TestimonialsPlacement";

const Experience = ({ callback, list, video, testimonials }) => {
    return (
        <div
            className="experience"
            style={{ width: "85%", margin: "0 auto", position: "relative" }}
        >
            <YTSlider portraits={video} />
            <div className="article_grid">
                {list.map((item) => {
                    return (
                        <div className="article_card">
                            <a href={item.url} target="_blank">
                                {item.type === "article" ? (
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <img
                                            className="article_image"
                                            src={item.image}
                                        />
                                    </div>
                                ) : (
                                    <iframe
                                        className="article_video"
                                        width="480px"
                                        height="270px"
                                        src={item.embed}
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    />
                                )}
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {item.tags.map((tag) => (
                                        <div className="article_tag">{tag}</div>
                                    ))}
                                </div>
                                <h2 className="article_title">{item.title}</h2>
                                <p className="article_author">{item.author}</p>
                                <p className="article_desc">
                                    {item.description}
                                </p>
                            </a>
                        </div>
                    );
                })}
            </div>
            <PageFooter
                settings={{
                    left: {
                        alignment: "left",
                        image: metadata["interviewTips"].image,
                        redirect: {
                            linkType: "component",
                            componentName: "interviewTips",
                        },
                        setActive: callback,
                        title: "Interview Tips",
                    },
                    right: {
                        alignment: "right",
                        colors: ["#8E4DFF", "#D6D4FF"],
                        image: metadata["experience"].image,
                        redirect: {
                            linkType: "link",
                            link: "https://iiitdplaybook.web.app/homepage",
                        },
                        title: "Research with Professors",
                    },
                }}
            />
            <Testimonials portraits={testimonials} />
        </div>
    );
};

export default Experience;
