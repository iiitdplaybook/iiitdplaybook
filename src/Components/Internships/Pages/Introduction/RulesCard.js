import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import "./Introduction.css";

const RulesCard = ({ card }) => {
    useEffect(() => {
        console.log(`url('${card.image}')`);
    }, [card.image]);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="rules_card">
                <img onClick={handleClickOpen} src={card.image} />
                <p>{card.title}</p>
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
                    <h3 style={{ color: "#04ABB0", textAlign: "center" }}>
                        {card.title}
                    </h3>
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
