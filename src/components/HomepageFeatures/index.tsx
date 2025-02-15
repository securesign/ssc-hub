import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: ReactNode;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Security Fundamentals",
		// Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: <>Learning software security shouldn't cost you the earth.</>,
	},
	{
		title: "Best Practices",
		// Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				Straightforward tutorials for hardening your organization's security
				posture.
			</>
		),
	},
	{
		title: "Compliance",
		// Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: <>Learn about SLSA, policy enforcement, and more.</>,
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				{/*<Svg*/}
				{/*	className={styles.featureSvg}*/}
				{/*	role="img"*/}
				{/*/>*/}
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature
							key={idx}
							{...props}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
