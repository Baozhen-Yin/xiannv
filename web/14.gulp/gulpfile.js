//1.使用npm install gulp下载gulp库文件
//2.在项目根目录下建立gulpfile.js文件
//3.重构项目的文件夹结构 src目录放置源代码文件 dist目录放置构建后文件
//4.在gulpfile.js目录下编写任务
//5.在命令行工具中执行gulp任务


//1.项目上线 HTML CSS JS文件压缩合并
//2.语法转换（es6，less...)
//3.公共文件抽离
//4.修改文件浏览器自动刷新

//gulp提供的方法（五个）
//gulp.task()  建立gulp任务
//gulp.src()  获取任务要处理的文件
//gulp.dest()  输出文件
//gulp.watch() 监控文件的变化


//gulp插件
//1.gulp-htmlmin :html文件压缩
//2.gulp-csso 压缩css 
//3.gulp-babel Javascript语法转换  ES6转化成ES5之类
//4.gulp-less less语法转换
//5.gulp-uglify 压缩混淆javascript
//6.gulp-file-include 公共文件包含
//7.browsersync 浏览器实时同步

//引用gulp模块
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const fileinclude = require('gulp-file-include')
const less = require('gulp-less')
const csso = require('gulp-csso')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')



//使用gulp.task()方法建立任务  task(当前要建立任务的名字，回调函数)
gulp.task('first', (done) => {
    console.log('执行我第一个gulp任务');
    //获取要处理的文件
    gulp.src('./css/base.css')
        //将处理后的文件输出到dist目录  pipe需要将处理的代码放进来 就会自动去执行
        .pipe(gulp.dest('./dist/css'))
    done()
});

//执行任务 因为用node将会执行整个文件 我不只需要执行这个代码块first任务
// cmd 执行 gulp first  (first式文件名称)

//html任务 
//1.做文件html中代码的压缩操作
//2.抽取html文件中公共代码
gulp.task('htmlmin', (done) => {
    gulp.src('./src/*.html')
        //2.抽取html文件中公共代码
        .pipe(fileinclude())
        //压缩html文件中的代码
        .pipe(htmlmin({ collapseWhitespace: true }))
        //输出处理之后的文件 到dist文件夹
        .pipe(gulp.dest('./dist'))
        //PS C:\Users\Kiwi\Desktop\YBZ\xiannv\web\14.gulp> gulp minify   
        //文件已经压缩成功
    done()
})

//css任务
//1.less语法转化
//2.css代码压缩

gulp.task('cssmin', (done) => {
    //选择css的所有less与css文件
    gulp.src(['./src/css/*.less', './src/css/*.css'])
        //将less转化成css语法
        .pipe(less())
        .pipe(csso()) //压缩
        //处理结果进行输出
        .pipe(gulp.dest('./dist/css'))
    done()
});

//js任务 
//1.ES6代码转化
//2.代码压缩
gulp.task('jsmin', (done) => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            //可以判断当前代码的运行环境 将代码转换为当前运行环境所支持的代码 ES5-ES6
            presets: ['@babel/env']
        }))
        .pipe(uglify()) //转换好的进行压缩
        .pipe(gulp.dest('./dist/js')) //输出到目标文件夹
    done()
})

//拷贝文件夹
gulp.task('copy', (done) => {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('./dist/images'))
    gulp.src('./src/lib/*')
        .pipe(gulp.dest('./dist/lib'))
    done()
})

//构建任务 (当我们执行default任务时他必须依次执行后面的htmlmin这些任务)
//不要用Gulp3的方式指定依赖任务，你需要使用gulp.series和gulp.parallel，因为gulp任务现在只有两个参数。
//gulp.series：按照顺序执行
//gulp.paralle：可以并行计算
//代码开发完成之后 想要把代码变成构建之后的代码 执行default即可
gulp.task('default', gulp.series('htmlmin', 'cssmin', 'jsmin', 'copy', function(done) {
    done()
}));