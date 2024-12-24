/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_COX4CqO0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This was my 1st overwhelming project. Never thought could make it! and completed it during my semester exams! Dont ask me about my Results :)</p>";

				const frontmatter = {"title":"Running Macintosh Sequoia on my HP Laptop","date":"12/2024 - Present","url":"will be updated soon","url_name":"will be updated soon"};
				const file = "/Users/prajwaldhage/Documents/Projects/portfolio/prajwaldhage.github.io/src/pages/blogs/home-mmouzo.md";
				const url = "/blogs/home-mmouzo";
				function rawContent() {
					return "\nThis was my 1st overwhelming project. Never thought could make it! and completed it during my semester exams! Dont ask me about my Results :)\n";
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
