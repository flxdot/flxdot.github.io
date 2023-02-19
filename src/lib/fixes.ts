/* This function allow to mark all <a> tags as external if they don't contain
an <svg> or <img> tag. This is required, because the support of the :has() pseudo
selector is very limited and not available in some browsers (e.g. Firefox) as of 
Feb 2023.

If support was there this could be solved via CSS:

a[href^="http"]:not(:has(svg, img))::after
*/
export function markExternalLinks() {
	Array.from(document.getElementsByTagName('a'))
		.filter((e: HTMLAnchorElement) => {
			return e.href.startsWith('http');
		})
		.forEach((e: HTMLAnchorElement) => {
			const childImages = e.getElementsByTagName('svg');
			if (childImages.length == 0) {
				e.classList.add('external');
			}
		});
}
