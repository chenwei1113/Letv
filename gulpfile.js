//引包
var gulp = require("gulp");
var sass = require("gulp-sass");
//建任务
gulp.task("copy-html",function(){
	gulp.src("html/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Letv\\html"));
});
gulp.task("copy-img",function(){
	gulp.src("img/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Letv\\img"));
});
gulp.task("sassfile",function(){
	gulp.src("sass/**/*")
		.pipe(sass())
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Letv\\css"));
});
//gulp.task("copy-font",function(){
//	gulp.src("font/**/*")
//		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Letv\\font"));
//});
gulp.task("copy-js",function(){
	gulp.src("js/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Letv\\js"));
});
//gulp.task("copy-php",function(){
//	gulp.src("php/**/*")
//		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Letv\\php"));
//});
gulp.task("sassfilelocal",function(){
	gulp.src("sass/**/*")
		.pipe(sass())
		.pipe(gulp.dest("css"));
});
//监听
gulp.task("watchall",function(){
	gulp.watch("html/**/*",["copy-html"]);
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("js/**/*",["copy-js"]);
	//gulp.watch("php/**/*",["copy-php"]);
	gulp.watch("sass/**/*",["sassfile"]);
	//gulp.watch("font/**/*",["copy-font"]);
	gulp.watch("sass/**/*",["sassfilelocal"]);
});
