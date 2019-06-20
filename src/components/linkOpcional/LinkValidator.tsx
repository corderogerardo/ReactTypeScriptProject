
import * as React from 'react';
import { Link as LinkImport } from 'react-router-dom';
import validator from 'validator';

type PropsFlowType = {
  to: string | Object,
};

const Link = ({
  to,
  ...otherProps
}: PropsFlowType): React.Node => (
  validator.isURL(to)
    ? (
      <a
        href={to}
        {...otherProps}
      />
    ) : (
      <LinkImport
        to={to}
        {...otherProps}
      />
    )
);

export default Link;