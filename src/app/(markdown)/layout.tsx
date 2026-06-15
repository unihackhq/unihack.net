import React from "react";

import styles from "./styles.module.css";
import { PageContent } from "@/components/page-content";

export default function MarkdownPageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className={styles.background} />
			<PageContent className={styles.container}>{children}</PageContent>
		</>
	);
}
