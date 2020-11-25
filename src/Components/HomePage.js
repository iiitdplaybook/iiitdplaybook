import React from 'react';
import firebase from 'firebase';
import { useStateValue } from '../StateProvider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import tanjiro from '../Assets/tanjiro.jpg'

import Marquee from "react-marquee-slider";
import times from "lodash/times";


function HomePage() {

    const [{user, isSignedIn, userName}] = useStateValue()

    // const Reviews = () => (
    //     <Marquee key={key} velocity={25} scatterRandomly minScale={0.7}>
    //       {times(5, String).map(id => (
    //         <Box key={`marquee-example-review-${id}`} scale={scale}>
    //           <Review scale={scale}>
    //             <Avatar scale={scale}>
    //               <img src="https://randomuser.me/api/portraits/women/68.jpg" />
    //             </Avatar>
    //             <Content scale={scale}>
    //               <p>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    //                 incididunt ut labore et dolore magna aliqua.
    //               </p>
    //             </Content>
    //           </Review>
    //         </Box>
    //       ))}
    //     </Marquee>
    //   );
      
    return (
        <div className='homePage'>
            <Card className='homePageCard' variant="outlined">
                <CardContent>
                    <Typography className='textCard' color="textSecondary" gutterBottom>
                    change of College Life
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
