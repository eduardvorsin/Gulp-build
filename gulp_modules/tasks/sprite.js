import svgSprite from 'gulp-svg-sprite';

export const sprite = () => {
	return project.gulp.src(`${project.sourceFolder}/images/icons/*.svg`)
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: `../icons/sprite.svg`,
					example: true,
				}
			}
		}))
		.pipe(project.gulp.dest(`${project.sourceFolder}/images`))
}