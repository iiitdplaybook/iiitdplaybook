import React, { useState } from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    CardMedia,
    Link,
    Button,
} from "@material-ui/core";
import { GoVerified } from "react-icons/go";
import { IconContext } from "react-icons";

import { makeStyles } from "@material-ui/core/styles";
import { truncate } from "lodash";
import "./QnA.css";

function QnACard({ card, colors }) {
    const cardHeight = 250;
    const cardWidth = cardHeight * (2.5 / 3);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const useStyles = makeStyles({
        root: {
            display: "inline-block",
            maxWidth: cardWidth,
            minWidth: cardWidth,
            maxHeight: cardHeight,
            background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
            borderRadius: 10,
        },
        actionArea: {
            width: cardWidth,
            height: cardHeight,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
        },
        content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        question: {
            fontSize: "20px",
            color: "#fff",
            fontWeight: "900",
            textAlign: "center",
            fontFamily: '"Poppins", "sans-serif"',
        },
        cardImg: {
            margin: "10px",
            objectFit: "cover",
            width: "90%",
            height: "55%",
            borderRadius: "8px",
        },
        // dialog: {
        //   fontFamily: 'Poppins, sans-serif !important',
        //   margin: '0 auto',
        // },
        dialogText: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        title: {
            paddingTop: "10px",
            fontFamily: "Poppins, sans-serif !important",
            fontWeight: "700 !important",
            textAlign: "center",
            color: "#000",
        },
        subtitle: {
            fontFamily: "Poppins, sans-serif !important",
            fontSize: "11px",
            textAlign: "center",
            color: "#3FADA8",
        },
        answer: {
            fontFamily: "Poppins, sans-serif !important",
            width: "500px",
            position: "relative",
            background: "#fff",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px 25px",
            color: "#000",
            fontSize: "12px",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
                textDecoration: "none !important",
                background: "#eeeeee",
            },
            ["@media (max-width:600px)"]: {
                width: "100%",
            },
        },
        link: {
            textDecoration: "none",
            color: "#000",
            opacity: "1",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            "&:hover": {
                textDecoration: "none",
            },
            ["@media (max-width:600px)"]: {
                flexDirection: "column",
            },
        },
        answerImage: {
            display: "block",
            objectFit: "cover",
            maxWidth: "100%",
            maxHeight: "95px",
            height: "auto",
            borderRadius: "8px",
            marginRight: "5px",
            ["@media (max-width:600px)"]: {
                flexDirection: "column",
            },
        },
        divider: {
            padding: "5px",
            maxWidth: "350px",
            height: "100%",
            alignSelf: "stretch",
        },
        verified: {
            position: "absolute",
            top: "10px",
            right: "10px",
        },
        invisible: {
            visibility: "hidden !important",
        },
        button: {
            textAlign: "center",
            margin: "30px 0 15px 0",
            background: "#fff",
            padding: "20px",
            border: "none",
            color: "#000",
            fontSize: "14px",
            lineHeight: "1.5",
            fontFamily: "Poppins, sans-serif !important",
            boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            textTransform: "none",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
                background: "#eeeeee",
            },
        },
    });
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root} onClick={handleClickOpen}>
                <CardActionArea className={classes.actionArea}>
                    <CardMedia
                        src={card.cover_image}
                        component="img"
                        className={classes.cardImg}
                    />
                    <CardContent className={classes.content}>
                        <Typography
                            className={classes.question}
                            style={{ whiteSpace: "pre-line" }}
                        >
                            {card.question}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
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
                    <h3 className={classes.title}>{card.question}</h3>
                    <IconContext.Provider value={{ color: "#3FADA8" }}>
                        <div className={classes.subtitle}>
                            <GoVerified style={{ marginRight: "5px" }} />
                            Verified by IIITDians
                        </div>
                    </IconContext.Provider>
                </DialogTitle>
                <DialogContent
                    className={classes.dialogContent}
                    dividers={false}
                >
                    <DialogContentText className={classes.dialogText}>
                        {card.answers.map((ans, id) => (
                            <div className={classes.answer}>
                                <Link
                                    key={id}
                                    href={ans.link}
                                    target="_blank"
                                    className={classes.link}
                                >
                                    <img
                                        src={ans.image}
                                        className={classes.answerImage}
                                    />
                                    <div className={classes.divider}>
                                        <div>
                                            <h4
                                                style={{
                                                    color: "#FF5F5F",
                                                    fontSize: "13px",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                {ans.heading}
                                            </h4>
                                            <p>
                                                {ans.description}
                                                <br />
                                            </p>
                                        </div>
                                        <div>
                                            <IconContext.Provider
                                                value={{ color: "#3FADA8" }}
                                            >
                                                <div
                                                    className={
                                                        ans.verified === "True"
                                                            ? classes.verified
                                                            : classes.invisible
                                                    }
                                                >
                                                    <GoVerified />
                                                </div>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        <button className={classes.button}>
                            <h4 style={{ color: "#21BAEF", fontSize: "16px" }}>
                                Subscribe Now
                            </h4>
                            <p>Get bi-weekly learnings right in your inbox</p>
                        </button>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default QnACard;
