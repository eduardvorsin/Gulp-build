export const sourceFolder = '#source';
export const productionFolder = 'production';

export const path = {
	src: {
		//для работы с pug, html: [`${sourceFolder}/pug/*.pug`, `!${sourceFolder}/pug/_*.pug`],
		html: [`${sourceFolder}/html/**/*.html`, `!${sourceFolder}/html/**/_*.html`],
		scss: [`${sourceFolder}/scss/*.scss`, `!${sourceFolder}/scss/_*.scss`],
		js: `${sourceFolder}/js/main.js`,
		images: `${sourceFolder}/images/**/*.+(png|jpg|gif|ico|svg|webp)`,
		fonts: `${sourceFolder}/fonts/*.+(woff|woff2|ttf|otf)`,
	},
	watch: {
		//для работы с pug, html: `${sourceFolder}/pug/**/*.pug`,
		html: `${sourceFolder}/html/**/*.html`,
		scss: `${sourceFolder}/scss/**/*.scss`,
		js: `${sourceFolder}/js/**/*.js`,
	},
	build: {
		html: `${productionFolder}/`,
		css: `${productionFolder}/css`,
		js: `${productionFolder}/js`,
		images: `${productionFolder}/images`,
		fonts: `${productionFolder}/fonts`,
	},
}
