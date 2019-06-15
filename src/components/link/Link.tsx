import React, { useState } from "react";
import Styles from './Link.module.scss';

export default function Link() {

  const [Link] = useState("Link component");
 
  return (
      		
	<a href="/" className={Styles.Link}>
 		{Link}
	</a>

    );

  }