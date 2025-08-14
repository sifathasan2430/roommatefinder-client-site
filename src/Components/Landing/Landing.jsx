import React from 'react';
import { Helmet } from 'react-helmet';

const Landing = () => {
    return (
         <Helmet>
        <title>RoomFinder</title>
        <meta name="description" content="Find rooms easily across the city!" />
       <link rel="icon" type="image/svg+xml+png" href='/logo.png' />
      </Helmet>
    );
};

export default Landing;