import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { FiChevronsDown } from "react-icons/fi";
import { IconContext } from "react-icons";
import { metadata } from "./metadata";
import {
    fetchResume,
    fetchExperience,
    fetchTips,
    fetchPreparation,
    fetchExpVideos,
    fetchPrepVideos,
    fetchExpTest,
    fetchResumeTest,
    fetchtipsTest,
} from "./fetchData";
import "./Internships.css";

function Internships() {
    const [active, setActive] = useState("introduction");
    const [component, setComponent] = useState(
        <metadata.introduction.component />
    );

    const [resumeList, setResumeList] = useState([]);
    const [expList, setExpList] = useState([]);
    const [tipsList, setTipsList] = useState([]);
    const [prepList, setPrepList] = useState([]);
    const [expVideos, setExpVideos] = useState([]);
    const [prepVideos, setPrepVideos] = useState([]);
    const [resumeTest, setResumeTest] = useState([]);
    const [expTest, setExpTest] = useState([]);
    const [tipsTest, setTipsTest] = useState([]);

    useEffect(() => {
        fetchResume({ setResumeList });
        fetchExperience({ setExpList });
        fetchTips({ setTipsList });
        fetchPreparation({ setPrepList });
        fetchExpVideos({ setExpVideos });
        fetchPrepVideos({ setPrepVideos });
        fetchExpTest({ setExpTest });
        fetchResumeTest({ setResumeTest });
        fetchtipsTest({ setTipsTest });
    }, []);

    useEffect(() => {
        metadata.resume.list = resumeList;
        metadata.experience.list = expList;
        metadata.experience.video = expVideos;
        metadata.preparation.list = prepList;
        metadata.preparation.video = prepVideos;
        metadata.interviewTips.list = tipsList;
        metadata.resume.testimonials = resumeTest;
        metadata.experience.testimonials = expTest;
        metadata.interviewTips.testimonials = tipsTest;
        const x = metadata[active];
        setComponent(
            <x.component
                callback={callback}
                list={x.list}
                video={x.video}
                testimonials={x.testimonials}
            />
        );
    }, [
        active,
        resumeList,
        expList,
        prepList,
        tipsList,
        expVideos,
        prepVideos,
        tipsTest,
        expTest,
        resumeTest,
    ]);

    const callback = (value) => {
        setActive(value);
    };

    return (
        <div className="internship_page">
            <Navbar loggedIn={true} colorStatus={false} stickyCond={true} />
            <div className="navigation">
                <h1 className="nav_heading">
                    One stop guide for your internships
                </h1>
                <div className="nav_divider">
                    <div className="nav_button_container">
                        {Object.keys(metadata).map((key) => {
                            const page = metadata[key];
                            const cls =
                                active === key
                                    ? "nav_button active"
                                    : "nav_button";
                            return (
                                <button
                                    className={cls}
                                    onClick={() => setActive(key)}
                                >
                                    {page.title}
                                </button>
                            );
                        })}
                    </div>
                    <div className="nav_illustration">
                        <img src={metadata[active].image} />
                    </div>
                    <div className="scroll_arrow bounce">
                        <IconContext.Provider value={{ color: "#FFF" }}>
                            <div>
                                <FiChevronsDown />
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            {component}
        </div>
    );
}

export default Internships;
