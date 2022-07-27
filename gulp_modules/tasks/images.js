import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

export const images = () => {
	return project.gulp.src(project.path.src.images)
		.pipe(project.plugins.gulpIf(
			project.isBuild,
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.mozjpeg({ quality: 75, progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({
					plugins: [
						{ removeViewBox: true },
						{ cleanupIDs: false }
					]
				})
			]),
		))
		.pipe(project.gulp.dest(project.path.build.images))
		.pipe(project.gulp.src(project.path.src.images))
		.pipe(project.plugins.gulpIf(
			project.isBuild,
			webp({ quality: 75 }),
		))
		.pipe(project.gulp.dest(project.path.build.images))
}