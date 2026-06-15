import React from "react";
import Link from "next/link";
import { Logo } from "../logo";
import styles from "./core.module.css";
import { mergeClassNames } from "@/utils/classnames";
import { MobileNavButton } from "./mobile-nav/button";
import { MobileNavMenu } from "./mobile-nav/menu";
import { MobileNavContextProvider } from "./mobile-nav/context";
import { NavShell } from "./shell";

interface HeaderProps {
	logo?: React.ReactNode;
}

interface NavItem {
	name: string;
	link: string;
}

interface NavigationProps extends React.HTMLAttributes<HTMLUListElement> {
	items: NavItem[];
}

export const DefaultLogo = () => {
	return (
		<>
			<Logo />
			<span>UNIHACK</span>
		</>
	);
};

export const Navigation = ({ items, className }: NavigationProps) => {
	return (
		<ul className={mergeClassNames(styles.navLinks, className)}>
			{items.map((item, index) => (
				<li key={index}>
					<Link href={item.link}>{item.name}</Link>
				</li>
			))}
		</ul>
	);
};

export const Header = ({ logo }: HeaderProps) => {
	return (
		<NavShell>
			<MobileNavContextProvider>
				<MobileNavMenu
					items={[
						{
							name: "Sponsor UNIHACK 2027",
							link: "/sponsor",
						},
						{
							name: "Event FAQs",
							link: "/faqs",
						},
						{
							name: "About Us",
							link: "/about",
						},
					]}
				/>
				<header className={styles.header}>
					<nav>
						<div className={styles.navLeft}>
							<MobileNavButton />
							<Navigation
								items={[
									{
										name: "FAQs",
										link: "/faqs",
									},
									{
										name: "Sponsor",
										link: "/sponsor",
									},
								]}
							/>
						</div>
						<Link href="/" aria-label="UNIHACK Home" className={styles.logo}>
							{logo || <DefaultLogo />}
						</Link>
						<div className={styles.navRight}>
							<Navigation
								items={[
									{
										name: "About",
										link: "/about",
									},
								]}
							/>
						</div>
					</nav>
				</header>
			</MobileNavContextProvider>
		</NavShell>
	);
};
