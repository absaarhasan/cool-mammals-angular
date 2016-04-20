
module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        ngAnnotate:{
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    'tmp/min-safe/directives.js': ['app/views/shared/directives.js'],
                    'tmp/min-safe/filters.js': ['app/views/shared/filters.js'],
                    'tmp/min-safe/mainService.js': ['app/views/shared/mainService.js'],
                    'tmp/min-safe/mainController.js': ['app/views/shared/mainController.js'],
                    'tmp/min-safe/homeController.js': ['app/views/home/controller.js'],
                    'tmp/min-safe/detailsController.js': ['app/views/details/controller.js'],
                    'tmp/min-safe/addController.js': ['app/views/add/controller.js'],
                    'tmp/min-safe/successController.js': ['app/views/success/controller.js'],
                    'tmp/min-safe/successService.js': ['app/views/success/service.js'],
                    'tmp/min-safe/editController.js': ['app/views/edit/controller.js'],
                    'tmp/min-safe/app.js': ['app/app.js']
                }
            }
        },
        concat:{
            scripts: {
                src: 'tmp/min-safe/*.js',
                dest: 'tmp/main.js'
            }
        },
        uglify:{
            scripts: {
                files: {
                    'app/assets/js/main.js' : 'tmp/main.js'
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "tmp/main.css": "less/main.less" // destination file and source file
                }
            }
        },
        cssmin: {
            development: {
                files: {
                    'app/assets/css/main.css': ['tmp/main.css']
                }
            }

        },
        watch: {
            scripts: {
                files: ['app/**/*.js'],
                tasks: ['ngAnnotate','concat', 'uglify'],

                options: {
                    spawn: false
                }
            },
            styles: {
                files: ['less/**/*.less'], // which files to watch
                tasks: ['less', 'cssmin'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', ['less', 'cssmin', 'ngAnnotate' , 'concat' , 'uglify' ,'watch']);
};