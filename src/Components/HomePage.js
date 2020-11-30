/** @format */

import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function HomePage() {
    return (
        <div className="homePage">
            <Card className="homePageCard" variant="outlined">
                <CardContent>
                    <Typography
                        className="textCard"
                        color="textSecondary"
                        gutterBottom
                    >
                        Phases of College Life
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default HomePage;
