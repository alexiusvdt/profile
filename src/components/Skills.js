/* eslint-disable  */
import React from 'react';

function Skills({ title, subtitle, dark, id }) {
  return(    
  <div className={"section" + (dark ? " section-dark" : "")}>
    <div className="section-content" id={id}>
    <h1>{title}</h1>
      <h1> wowee skills!</h1>
    </div>
  </div>
  )
}
// this should be a huge word cloud or list of frameworks/libs/etc to brag about

export default Skills