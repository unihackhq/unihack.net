import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import { mergeClassNames } from "@/utils/classnames";

interface ButtonProps {
	href: string;
	text: string;
	className?: any;
}

export const Button: React.FC<ButtonProps> = ({ href, text, className }) => {
	return (
		<a href={href} className={mergeClassNames(styles.button, className)}>
			{text}
			<FontAwesomeIcon icon={faArrowRight} />
		</a>
	);
};
