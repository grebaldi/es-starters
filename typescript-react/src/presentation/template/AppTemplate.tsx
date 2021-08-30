import React, { ReactNode } from "react";

import Button from "../atom/Button";

interface AppTemplateProps {
  children?: ReactNode
}

export default function AppTemplate(props: AppTemplateProps) {
  return (
    <>
      <a id="top"></a>
      <header>HEADER</header>
      <main>
        {props.children}
        <Button type="link" href="#top" alignment="center">
          To the top
        </Button>
      </main>
      <footer>FOOTER</footer>
    </>
  );
}
