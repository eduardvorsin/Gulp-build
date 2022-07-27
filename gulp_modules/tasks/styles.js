import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'autoprefixer';
import gulpPostcss from 'gulp-postcss';
import customProperties from 'postcss-custom-properties';
import sortMediaQueries from 'postcss-sort-media-queries';
import csso from 'gulp-csso';

const sass = gulpSass(dartSass);

export const styles = () => {
	return project.gulp.src(project.path.src.scss, { sourcemaps: project.isDev })
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(gulpPostcss([
			customProperties(),
			sortMediaQueries({ sort: 'mobile-first' }),
		]))
		.pipe(project.plugins.gulpIf(
			project.isBuild,
			gulpPostcss([
				autoprefixer(),
			]),
		))
		.pipe(project.gulp.dest(project.path.build.css))
		.pipe(csso())
		.pipe(project.plugins.rename({ extname: ".min.css" }))
		.pipe(project.gulp.dest(project.path.build.css, { sourcemaps: '.' }))
		.pipe(project.plugins.browserSync.stream())

}