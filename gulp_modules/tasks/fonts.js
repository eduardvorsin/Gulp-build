import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';

export const fonts = () => {
	project.gulp.src(project.path.src.fonts)
		.pipe(ttf2woff())
		.pipe(project.gulp.dest(project.path.build.fonts))
	return project.gulp.src(project.path.src.fonts)
		.pipe(ttf2woff2())
		.pipe(project.gulp.dest(project.path.build.fonts))
}