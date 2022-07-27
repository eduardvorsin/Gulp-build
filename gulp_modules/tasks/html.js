import htmlmin from 'gulp-htmlmin';
import gulpPug from 'gulp-pug';

export const html = () => {
	return project.gulp.src(project.path.src.html, { nodir: true })
		.pipe(project.plugins.fileInclude())
		.pipe(project.plugins.gulpIf(
			project.isBuild,
			htmlmin({ collapseWhitespace: true })))
		.pipe(project.plugins.rename({ dirname: '' }))
		.pipe(project.gulp.dest(project.path.build.html))
		.pipe(project.plugins.browserSync.stream())
}

//* pug
// export const html = () => {
// 	return project.gulp.src(project.path.src.html)
// 		.pipe(gulpPug({}))
// 		.pipe(project.gulp.dest(project.path.build.html))
// 		.pipe(project.plugins.browserSync.stream())
// }