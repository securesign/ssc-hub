import { AnnotationHandler, HighlightedCode, Pre } from "codehike/code";
import { callout } from "./annotations/callout";
import { wordWrap } from "./annotations/word-wrap";

export async function MyCode({ codeblock }: { codeblock: HighlightedCode }) {
	return (
		<div>
			<Pre
				code={codeblock}
				// handlers={[bgHandler, borderHandler, callout, wordWrap]}
				// handlers={[bgHandler, borderHandler, callout, focus, wordWrap]}
				handlers={[callout]}
				style={{ background: "#212121", color: "#fafafa" }}
			/>
		</div>
	);
}

const borderHandler: AnnotationHandler = {
	name: "border",
	Block: ({ annotation, children }) => (
		<div style={{ border: "1px solid red" }}>{children}</div>
	),
};

const bgHandler: AnnotationHandler = {
	name: "bg",
	Inline: ({ annotation, children }) => (
		<span style={{ background: "#2d26" }}>{children}</span>
	),
};
