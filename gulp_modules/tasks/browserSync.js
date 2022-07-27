export const browserSync = () => {
	project.plugins.browserSync.init({
		server: {
			baseDir: `${project.productionFolder}/`
		},
		notify: false,
		// port: 3000,
		ghostMode: false,
		browser: "chrome",
	});
}