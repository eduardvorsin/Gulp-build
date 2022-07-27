import fonter from 'gulp-fonter';

export const otf2ttf = () => {
	return project.gulp.src(`${project.sourceFolder}/fonts/*.otf`)
		.pipe(fonter({ formats: ['ttf'] }))
		.pipe(project.gulp.dest(project.path.build.fonts))
}