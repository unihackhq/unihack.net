"use client";

import { useContext } from "react";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import styles from "./styles.module.css";
import { MobileNavContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "@/components/logo";
import Link from "next/link";

interface NavItem {
	name: string;
	link: string;
}

interface Props {
	items: NavItem[];
}

const MobileNavInnerMenu = ({ items }: Props) => {
	const { closeMenu } = useContext(MobileNavContext);
	useLockBodyScroll();

	const onClick = () => {
		closeMenu();
	};

	return (
		<div
			id="mobile-navigation"
			className={styles.mobileNavOverlay}
			role="dialog"
		>
			<div className={styles.mobileNavHeader}>
				<Link onClick={onClick} prefetch={false} href="/">
					<Logo />
				</Link>
				<button
					className={styles.closeButton}
					onClick={closeMenu}
					aria-label="Close mobile menu"
				>
					<FontAwesomeIcon icon={faClose} aria-label="Close mobile menu" />
				</button>
			</div>
			<h6 className="sr-only">Navigation</h6>
			<ul>
				{items.map((item, index) => {
					return (
						<li key={index}>
							<Link onClick={onClick} prefetch={false} href={item.link}>
								{item.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export const MobileNavMenu = ({ items }: Props) => {
	const { isOpen } = useContext(MobileNavContext);
	return isOpen ? <MobileNavInnerMenu items={items} /> : null;
};
