import React from 'react';

export default function Layout ({
  children,
  direction = 'vertical',
  width,
  height,
  maxWidth,
  minWidth,
  minHeight,
  padding,
  wrap,
  style,
  ...rest
}) {
  const flexDirection = direction === 'vertical'
    ? 'column'
    : 'row';

  const _style = {
    display: 'flex',
    padding: padding || 'inherit',
    flexDirection,
    alignItems: 'stretch',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    width,
    height,
    minHeight,
    maxWidth,
    minWidth,
    ...style
  }

  if (wrap) {
    _style.flexWrap = 'wrap';
    _style.alignItems = 'stretch';
  }

  return (<div {...rest} style={_style}>{children}</div>);
}
