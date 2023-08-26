import React from "react";

export default function RichText({ content, ...rest }) {
  const str = content?.replace(
    /<a\s+href=/gi,
    '<a target="_blank" rel="noopener" href='
  );

  return (
    <div
      className=''
      dangerouslySetInnerHTML={{
        __html: str ?? "",
      }}
      {...rest}
    />
  );
}