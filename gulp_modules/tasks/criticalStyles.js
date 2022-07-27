import critical from 'critical';
const criticalTask = critical.stream;

export const criticalStyles = () => {
	return project.gulp.src(project.path.src.html)
		.pipe(project.plugins.fileInclude())
		.pipe(criticalTask({
			base: `${project.productionFolder}/`,
			src: "*.html",
			inline: true,
			css: [`${project.productionFolder}/css/*.min.css`],
		}))
		.pipe(project.plugins.rename({ dirname: '' }))
		.pipe(project.gulp.dest(`${project.productionFolder}/critical-html/`))
		.pipe(project.plugins.browserSync.stream())
}