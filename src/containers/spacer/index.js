import React from 'react';

export default function Spacer ({
  size,
  children,
  style,
  ...rest
}) {
  const _style = {
    flexGrow: typeof size === 'undefined' ? 1 : size,
    ...style
  }

  return (<div {...rest} style={_style}>{children}</div>);
}
