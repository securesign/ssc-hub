// import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import { MyCode } from "../components/code";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas); // add all icons to the library, so you can use them without importing them individually.

export default {
	// re-use the default mapping
	...MDXComponents,
	MyCode,
	FAIcon: FontAwesomeIcon, // make the FontAwesomeIcon component available in MDX as <icon />.
};
