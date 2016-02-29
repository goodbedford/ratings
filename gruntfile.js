module.exports = function(grunt) {
    "use strict";

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        jshint: {
            files: {
                src: ["app/js/**/*.js"]
            }
        },
        clean: ["app/dist/**/*"],
        sass: {
            dist: {
                files: {
                    "app/css/styles.css": "app/sass/**/*.scss"
                }
            },
            options: {
                sourceMap: true
            }
        },
        uglify: {
            dist: {
                files: {
                    "app/dist/js/package.min.js": ["node_modules/jquery/dist/jquery.min.js",
                                                   "node_modules/bootstrap/dist/js/bootstrap.min.js", "app/js/**/*.js"]
                }
            },
            options: {
                sourceMap: true
            }
        },
        cssmin: {
            dist: {
                files: {
                    "app/dist/css/styles.min.css": ["app/css/paper.css",
                                                    "app/css/styles.css"]
                }
            }
        }
    });

    //start default task
    grunt.registerTask("default", ["jshint", "clean", "sass", "uglify", "cssmin"])

};