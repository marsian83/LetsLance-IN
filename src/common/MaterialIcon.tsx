import React, { useEffect, useRef } from "react";

interface MaterialIconProps {
  codepoint: string;
  className?: string;
  style?:
    | React.StyleHTMLAttributes<HTMLSpanElement>
    | React.CSSProperties
    | undefined;
}

export default function MaterialIcon(props: MaterialIconProps) {
  const ref = useRef() as React.MutableRefObject<HTMLSpanElement>;

  useEffect(() => {
    ref.current.innerHTML = `&#x${props.codepoint};`;
  });

  return (
    <span
      className={`material-icons ${props.className}`}
      ref={ref}
      style={props.style}
    />
  );
}
