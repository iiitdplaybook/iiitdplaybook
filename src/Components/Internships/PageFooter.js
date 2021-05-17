import React from "react";
import NavCard from "./NavCard";
import { useMediaQuery } from "react-responsive";

const PageFooter = ({ settings }) => {
    const isMobile = useMediaQuery({ query: `(max-width: 600px)` });
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                width: "100%",
            }}
        >
            <div
                style={{
                    margin: "80px",
                    width: "50%",
                    border: "2px solid #04ABB082",
                }}
            ></div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent:
                        window.innerWidth > 600 ? "space-between" : "center",
                    width: "100%",
                    marginBottom: "60px",
                    flexWrap: "wrap",
                }}
            >
                {isMobile ? (
                    <>
                        <NavCard {...settings.right} />
                        <NavCard {...settings.left} />
                    </>
                ) : (
                    <>
                        <NavCard {...settings.left} />
                        <NavCard {...settings.right} />
                    </>
                )}
                {/* <img
          src='https://media1.giphy.com/media/9PvkZLdw8C8hzq5R0O/source.gif'
          style={{ width: '200px' }}
        /> */}
            </div>
        </div>
    );
};

export default PageFooter;
