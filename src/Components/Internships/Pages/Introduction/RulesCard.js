import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import "./Introduction.css";

const RulesCard = ({ card }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="rules_card">
                <img onClick={handleClickOpen} src={card.image} />
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                style={{
                    fontFamily: "Poppins, sans-serif !important",
                    margin: "0 auto",
                }}
                aria-labelledby="alert-dialog-title"
                maxWidth={false}
            >
                <DialogTitle>
                    <h2 style={{ color: "#04ABB0", textAlign: "center" }}>
                        {card.title}
                    </h2>
                </DialogTitle>
                <DialogContent dividers={false}>
                    <div style={{ display: "block" }}>
                        <div className="tips_grid">
                            {Object.keys(card.tips).map((key) => (
                                <div className="tip_card">
                                    <img
                                        src={card.tips[key]}
                                        alt={`${card.title + "_" + key}`}
                                    ></img>
                                </div>
                            ))}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default RulesCard;
