import React from 'react';
import { useStateValue } from '../StateProvider';

function HomePage() {

    const [{user}] = useStateValue()

    return (
        <div>
            <h1>Hello {user?.displayName}!!</h1>
        </div>
    )
}

export default HomePage
