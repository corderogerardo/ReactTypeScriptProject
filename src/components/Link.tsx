import React, { useState } from "react";
import Styles from './Link.module.scss';


export default function Link() {

  const [Link] = useState("Mi primer Link");


 
  return (
      		
	<a href="/" className={Styles.Link}>
 		{Link}
	</a>

    );

  }