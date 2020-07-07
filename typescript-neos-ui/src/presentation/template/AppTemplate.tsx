import React, { ReactNode } from "react";

import Button from "@neos-project/react-ui-components/lib-esm/Button";

interface AppTemplateProps {
	children?: ReactNode;
}

export default function AppTemplate(props: AppTemplateProps) {
	return (
		<>
			<a id="top"></a>
			<header>HEADER</header>
			<main>
				{props.children}
				<Button>To the top</Button>
			</main>
			<footer>FOOTER</footer>
		</>
	);
}
