import React, { useState } from "react";

export default function Link() {

  const [Link] = useState("Mi primer Link");
 
  return (
      		
	<a href="/">
 		{Link}
	</a>

    );

  }