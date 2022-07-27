export const transferLibraries = () => {
	project.gulp.src(`${project.sourceFolder}/css/libs/*.css`)
		.pipe(project.gulp.dest(project.path.build.css))
	return project.gulp.src(`${project.sourceFolder}/js/libs/*.js`)
		.pipe(project.gulp.dest(project.path.build.js))
		.pipe(project.plugins.browserSync.stream())
}
