import React from 'react';
import Link from '../Link';
const isExternal = require("is-url-external");


/**
 * Link that also works for external URL's
 */
const LinkDuo = (props: any) => {
  let data = props.url;

  const doSomething = (evt: any) => {
    console.log("evt ", evt);
    props.onClick(evt.target);
  };
  // size
  // placeholder
  // onBlurred
  // error / true - false
  // disabled
  // extraClassNames

  // TextInput
  // Error

  // Form House

  return (isExternal(props.to))
      ?
        <a
          href={props.to}
          {...props}
        />
      : <Link data={props.data || ''} onClick={evt => doSomething(evt)} />;
};

export default LinkDuo;
