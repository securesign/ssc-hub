import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { Redirect } from "@docusaurus/router";
import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<Heading
					as="h1"
					className="hero__title"
				>
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/software-supply-chain-security"
					>
						Software Supply Chain Security in 5min ⏱️
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title} | Public notes on software supply chain security`}
			description="Learn about securing your code from design to delivery <head />"
		>
			<HomepageHeader />
			<main>
				{/*<Redirect to="/software-supply-chain-security" />;*/}
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
