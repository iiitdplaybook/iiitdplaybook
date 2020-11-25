import React from 'react';
import firebase from 'firebase';
import { useStateValue } from '../StateProvider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import tanjiro from '../Assets/tanjiro.jpg'


function HomePage() {

    const [{user, isSignedIn, userName}] = useStateValue()

    return (
        <div className='homePage'>
            <Card className='homePageCard' variant="outlined">
                <CardContent>
                    <Typography className='textCard' color="textSecondary" gutterBottom>
                    Phases of College Life
                    </Typography> 
                </CardContent>
            </Card>
        </div>

        


        // <div>
        //     {/* <h1>Hello {user?.displayName}!!</h1> */}
        //     {/* <h1>Hello {userName}!!</h1> */}
        //     {/* <h1>Hello {firebase.auth().currentUser.displayName}!!</h1> */}            
        // </div>
    )
}

export default HomePage
