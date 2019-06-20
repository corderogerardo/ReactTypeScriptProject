import React, {useState} from 'react';
import Styles from './Link.module.scss';

const Link = (props: any) => {
    let data: string = props.data;
    //1. State Management
    const [urlState, setLink] = useState("Componente Link");
    //2. functions eventsps
    const onClick = (evt:any) => {
        props.onClick(evt.target.value)
    };
    // size
    // placeholder
    // onBlur
    // error / true - false
    // disabled
    // extraClassNames

    // TextInput
    // Error

    // Form House
    // default styles
    const styles: any = {
    link: {
        border: '1px solid red'
    }
    };
  return <a href={data} onClick={evt => onClick(evt)} className={(Styles) ? Styles.Link : styles.link}>{Link} </a>

};

export default Link;
