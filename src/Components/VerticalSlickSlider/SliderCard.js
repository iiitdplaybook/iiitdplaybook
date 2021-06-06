import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Link,
} from "@material-ui/core";
import "./SliderCard.css";

export default function SliderCard({ cardsData }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="slider-card">
                <div className="slider-info">
                    <div className="slider-img-info">
                        <img
                            src={cardsData.profilePic}
                            className="slider-image"
                        />
                        <div className="slider-title">
                            <h2 className="title"> {cardsData.name}</h2>
                            <p className="occ">{cardsData.designation}</p>
                            <p className="org"> {cardsData.organisation}</p>
                        </div>
                    </div>
                    <a
                        className="fa fa-linkedin fa-lg slider-icon"
                        href={cardsData.linkedin}
                        target="_blank"
                    ></a>
                </div>
                <div className="slider-tips"> {cardsData.tipsShort} </div>
                <div className="slider-button">
                    <Button onClick={handleClickOpen}>Read More</Button>
                </div>
            </div>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    style={{ marginBottom: "1em" }}
                >
                    <DialogTitle>
                        <div className="slider-info">
                            <div className="slider-img-info">
                                <img
                                    src={cardsData.profilePic}
                                    className="slider-image"
                                />
                                <div className="slider-title">
                                    <h2 className="title"> {cardsData.name}</h2>
                                    <p className="occ">
                                        {cardsData.designation}
                                    </p>
                                    <p className="org">
                                        {" "}
                                        {cardsData.organisation}
                                    </p>
                                </div>
                            </div>
                            <a
                                className="fa fa-linkedin fa-lg slider-icon"
                                href={cardsData.linkedin}
                                target="_blank"
                            ></a>
                        </div>
                    </DialogTitle>
                    <DialogContent style={{ marginBottom: "2em" }}>
                        <div className="slider-tips">
                            <span>{cardsData.tipsLong}</span>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}
