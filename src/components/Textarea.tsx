import React, { useState } from "react";
import '../App.css';

export default function Textarea() {

  const [Textarea] = useState("Write here");
      
  return (
      		
		<textarea className="TextArea">
 			{Textarea}
		</textarea>

    );

  }