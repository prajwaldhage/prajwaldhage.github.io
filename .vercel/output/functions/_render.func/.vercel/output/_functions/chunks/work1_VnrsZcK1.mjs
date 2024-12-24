/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_COX4CqO0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>As a Web Development Intern, I gained practical experience with HTML, CSS, and JavaScript, building responsive websites. I also used Git and GitHub for version control and collaboration, enhancing my ability to work in a team and manage code effectively. This internship reinforced my skills in front-end development and real-world project workflows.</p>";

				const frontmatter = {"title":"Web Development Intern","date":"1 Jan 2024 - 31 Jan 2024","url":"will be updated soon","location":"Remote","org":"Prodigy Infotech","tags":["HTML","CSS","Javascript","Git/Github"]};
				const file = "/Users/prajwaldhage/Documents/Projects/portfolio/prajwaldhage.github.io/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\nAs a Web Development Intern, I gained practical experience with HTML, CSS, and JavaScript, building responsive websites. I also used Git and GitHub for version control and collaboration, enhancing my ability to work in a team and manage code effectively. This internship reinforced my skills in front-end development and real-world project workflows.\n";
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
