
import { sourceFolder, productionFolder, path } from './gulp_modules/path.js';
import { plugins } from './gulp_modules/plugins.js';
import gulp from 'gulp';

global.project = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	gulp,
	plugins,
	path,
	sourceFolder,
	productionFolder
}

import { browserSync } from './gulp_modules/tasks/browserSync.js';
import { html } from './gulp_modules/tasks/html.js';
import { styles } from './gulp_modules/tasks/styles.js';
import { scripts } from './gulp_modules/tasks/scripts.js';
import { transferLibraries } from './gulp_modules/tasks/transferLibraries.js';
import { images } from './gulp_modules/tasks/images.js';
import { fonts } from './gulp_modules/tasks/fonts.js';
import { clean } from './gulp_modules/tasks/clean.js';
export { sprite } from './gulp_modules/tasks/sprite.js';
export { otf2ttf } from './gulp_modules/tasks/otf2ttf.js';
export { criticalStyles } from './gulp_modules/tasks/criticalStyles.js';

const watching = () => {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.scss], styles);
	gulp.watch([path.watch.js], scripts);
};

const dev = gulp.parallel(
	gulp.series(
		clean,
		gulp.parallel(
			html,
			styles,
			scripts,
			fonts,
			transferLibraries,
			images
		)
	),
	watching,
	browserSync
);
export const build = gulp.parallel(
	gulp.series(
		clean,
		gulp.parallel(
			html,
			styles,
			scripts,
			fonts,
			transferLibraries,
			images
		)
	),
);

export default dev;