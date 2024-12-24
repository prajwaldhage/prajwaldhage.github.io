/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_COX4CqO0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Hey, I’m Prajwal, an 19-year-old student at OSSU. I’m passionate about making projects—though I have a habit of starting them, getting halfway through, and then moving on to the next big thing! I love experimenting with new ideas and tackling challenging tasks, especially when it comes to computers. I’m most active on Discord, so feel free to ping me there if you want to chat or collaborate. Check out my portfolio to see what I’ve been working on (and maybe left unfinished!).</p>";

				const frontmatter = {"title":"about","name":"Prajwal Dhage","designation":"CS Student!","location":"Pune, India","pronouns":"he/him","website":"will be updated soon"};
				const file = "/Users/prajwaldhage/Documents/Projects/portfolio/prajwaldhage.github.io/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\nHey, I’m Prajwal, an 19-year-old student at OSSU. I’m passionate about making projects—though I have a habit of starting them, getting halfway through, and then moving on to the next big thing! I love experimenting with new ideas and tackling challenging tasks, especially when it comes to computers. I’m most active on Discord, so feel free to ping me there if you want to chat or collaborate. Check out my portfolio to see what I’ve been working on (and maybe left unfinished!).";
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

export { _page as _, compiledContent as c, frontmatter as f };
