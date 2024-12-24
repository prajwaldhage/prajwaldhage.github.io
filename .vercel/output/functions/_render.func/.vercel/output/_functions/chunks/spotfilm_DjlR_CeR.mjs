/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_COX4CqO0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Debug Bull is a Python-based software testing tool designed to analyze Python code for various quality metrics. It helps developers ensure their code is clean, efficient, and maintainable by providing insights into errors, code complexity, line count, comment coverage, readability, and more. This tool is useful for both individual developers and teams looking to maintain high code quality throughout their projects.</p>";

				const frontmatter = {"title":"Debug Bull","url":"will be updated soon","tags":["python","software-testing","GUI"],"date":2024};
				const file = "/Users/prajwaldhage/Documents/Projects/portfolio/prajwaldhage.github.io/src/pages/projects/spotfilm.md";
				const url = "/projects/spotfilm";
				function rawContent() {
					return "\nDebug Bull is a Python-based software testing tool designed to analyze Python code for various quality metrics. It helps developers ensure their code is clean, efficient, and maintainable by providing insights into errors, code complexity, line count, comment coverage, readability, and more. This tool is useful for both individual developers and teams looking to maintain high code quality throughout their projects.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
