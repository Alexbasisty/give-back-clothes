import React from 'react';
import app from 'firebase/app';

const WhoWeHelp = () => {

 const getData = () => {
   const foundations = app.database().ref('foundations');
   foundations.on('value', data => {
     console.log(data.val());
   });
  };
 
  return (
      <div id="foundations" onClick={getData}>Hello</div>

  )
};

export default WhoWeHelp;