import React, { useState, useEffect } from 'react';
import Styles from './Link.module.scss';

export default function Link() {

 const [Link, setLink] = useState("Componente Link");
 
  return (
      		
	<a href="/" className={Styles.Link} >
 		{Link}
	</a>

    );

  }