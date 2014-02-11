// Generated on 2013-12-20 using generator-webapp 0.4.6
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // Configurable paths
            app: 'app',
            dist: '../'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            jade: {
                files: ['{.tmp,<%= yeoman.app %>}/{,*/}*.jade'],
                tasks: ['jade']
            },
            coffee: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
                tasks: ['copy:coffee', 'coffee:dist']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '{.tmp,<%= yeoman.app %>}/{,*/}*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>',
                    livereload: false
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            options: { force: true },
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*',
                        '!<%= yeoman.dist %>/source'
                    ]
                }]
            },
            server: '.tmp',
            partials: '<%= yeoman.dist %>/partials'
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },


        // Mocha testing framework configuration options
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },



        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '<%= yeoman.app %>/images',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: '<%= yeoman.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.app %>/images'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['> 1%', 'last 2 versions', 'ff >= 24', 'ie 7', 'ie 8']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        'bower-install': {
            app: {
                html: '<%= yeoman.app %>/index.html',
                ignorePath: '<%= yeoman.app %>/'
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                        '<%= yeoman.dist %>/styles/fonts/{,*/}*.*'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>'
            },
            html: '.tmp/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= yeoman.dist %>']
            },
            html: ['.tmp/{,*/}*.html'],
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    dot: true,
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    dot: true,
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: false,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '.tmp',
                    src: '{,*/}*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/vendors.css': [
                        '<%= yeoman.dist %>/styles/vendor.css'
                    ],
                    '<%= yeoman.dist %>/styles/plugins.css': [
                        '<%= yeoman.dist %>/bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css'
                    ],
                    '<%= yeoman.dist %>/styles/main.css': [
                        '<%= yeoman.dist %>/styles/main.css'
                    ]
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/scripts/plugins.js': [
                        '<%= yeoman.dist %>/bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
                        '<%= yeoman.dist %>/bower_components/jquery-colorbox/jquery.colorbox-min.js',
                        '<%= yeoman.dist %>/bower_components/jquery.smooth-scroll/jquery.smooth-scroll.min.js',
                        '<%= yeoman.dist %>/bower_components/retinajs/src/retina.js',
                        '<%= yeoman.dist %>/bower_components/sass-bootstrap/js/affix.js',
                        '<%= yeoman.dist %>/bower_components/sass-bootstrap/js/alert.js',
                        '<%= yeoman.dist %>/bower_components/sass-bootstrap/js/dropdown.js',
                        '<%= yeoman.dist %>/bower_components/sass-bootstrap/js/tooltip.js',
                        '<%= yeoman.dist %>/bower_components/sass-bootstrap/js/modal.js',
                        '<%= yeoman.dist %>/bower_components/sass-bootstrap/js/transition.js',
                        '<%= yeoman.dist %>/bower_components/sass-bootstrap/js/button.js',
                        '<%= yeoman.dist %>/bower_components/sass-bootstrap/js/popover.js',
                        '<%= yeoman.dist %>/bower_components/sass-bootstrap/js/carousel.js',
                        '<%= yeoman.dist %>/bower_components/sass-bootstrap/js/scrollspy.js',
                        '<%= yeoman.dist %>/bower_components/sass-bootstrap/js/collapse.js',
                        '<%= yeoman.dist %>/bower_components/sass-bootstrap/js/tab.js',
                        '<%= yeoman.dist %>/bower_components/fastclick/lib/fastclick.js',
                    ],
                    '<%= yeoman.dist %>/scripts/main.js': [
                        '<%= yeoman.dist %>/scripts/smoothscroll.js',
                        '<%= yeoman.dist %>/scripts/main.js'
                    ],
                    '<%= yeoman.dist %>/scripts/vendor.js': [
                        '<%= yeoman.dist %>/bower_components/jquery/jquery.js'
                    ]
                }
            }
        },
        concat: {
            dist: {}
        },


        // Copies remaining files to places other tasks can use
        copy: {
            coffee: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    dest: '.tmp/scripts',
                    src: '**/*.coffee'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '*.vcf',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*',
                        'bower_components/**',
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '.tmp/styles/',
                    dest: '<%= yeoman.dist %>/styles',
                    src: '{,*/}*.{css,png}'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '.tmp/scripts/',
                    dest: '<%= yeoman.dist %>/scripts',
                    src: '{,*/}*.js'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/scripts/',
                    dest: '<%= yeoman.dist %>/scripts',
                    src: '{,*/}*.js'
                }]
            },
            styles: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/styles',
                    dest: '.tmp/styles/',
                    src: '{,*/}*.{css,png}'
                },
                /* Copy sprites too */
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/images',
                    dest: '.tmp/images/',
                    src: '{,*/}*.{gif,jpeg,jpg,png}'
                }]
            }
        },


        // Generates a custom Modernizr build that includes only the tests you
        // reference in your app
        modernizr: {
            devFile: '<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
            outputFile: '<%= yeoman.dist %>/bower_components/modernizr/modernizr.js',
            files: [
                '<%= yeoman.dist %>/scripts/{,*/}*.js',
                '<%= yeoman.dist %>/styles/{,*/}*.css',
                '!<%= yeoman.dist %>/scripts/vendor/*'
            ],
            uglify: true
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'compass:server',
                'copy:styles',
                'copy:coffee',
                'coffee:dist'
            ],
            test: [
                'copy:styles',
                'copy:coffee',
                'coffee:dist'
            ],
            dist: [
                'copy:styles',
                'copy:coffee',
                'coffee:dist',
            ]
        },

        // Compile jade templates
        jade: {
            dist: {
                options: {
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '.tmp',
                    src: '{,*/}*.jade',
                    ext: '.html'
                }]
            }
        },

        // Compile coffeescript
        coffee: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            }
        },
    });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'jade',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', function(target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'autoprefixer',
            ]);
        }

        grunt.task.run([
            'connect:test',
            'mocha'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'compass',
        'concurrent:dist',
        'imagemin:dist',
        'svgmin:dist',
        'jade',
        'autoprefixer',
        'copy:dist',
        'modernizr',
        //'rev',
        'usemin',
        'concat',
        'cssmin',
        'uglify',
        'htmlmin',
        'clean:partials'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
