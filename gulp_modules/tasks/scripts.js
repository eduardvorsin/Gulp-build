import webpack from 'webpack';
import webpackStream from 'webpack-stream';

export const scripts = () => {
	return project.gulp.src(project.path.src.js, { sourcemaps: project.isDev })
		.pipe(webpackStream({
			mode: project.isBuild ? 'production' : 'development',
			output: {
				filename: 'main.min.js',
			},
			module: {
				rules: [
					{
						test: /\.m?js$/,
						exclude: /(node_modules|bower_components)/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env'],
								plugins: ["@babel/plugin-transform-runtime"]
							}
						}
					},
				]
			},
		}))
		.pipe(project.gulp.dest(project.path.build.js, { sourcemaps: '.' }))
		.pipe(project.plugins.browserSync.stream())
}