import React from 'react'



import RowPost from '../RowPost/RowPost';

import NavBar from '../NavBar/NavBar';

import {horror,comedy} from "../../urls"


function Movies() {
    return (
        <div>
<NavBar/>

<RowPost url={comedy} title='Comedy' isSmall/>
<RowPost url={horror} title='Romance' isSmall/>

        </div>
    )
}

export default Movies
