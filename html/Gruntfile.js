module.exports = function(grunt) {

  const sass = require('node-sass');
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //minificando arquivos (css e js)
    uglify: {
      my_target: {
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    },
    minifyHtml: {
        options: {
            cdata: true
        },
        dist: {
            files: {
                'public/index.html': 'index.html'
            }
        }
    },
    //compilando o css
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'css/main.min.css': 'scss/main.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ['scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
    //movendo arquivos do node_modules
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/material-design-icons/iconfont',
            src: '**',
            dest: 'fonts/material-design/'
          },
          {
            expand: true,
            cwd: 'node_modules/simplebar/dist',
            src: 'simplebar.min.js',
            dest: 'js/'
          },
          {
            expand: true,
            cwd: 'node_modules/simplebar/dist',
            src: 'simplebar.min.css',
            dest: 'css/'
          },
          {
            expand: true,
            cwd: 'node_modules/countup.js/dist', 
            src: 'countUp.min.js',
            dest: 'js/'
          },
          {
            expand: true,
            cwd: 'node_modules/axios/dist', 
            src: 'axios.min.js',
            dest: 'js/'
          }
        ]
      },
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('build', ['sass', 'copy']);
  grunt.registerTask('moveFiles', ['copy']);
  grunt.registerTask('watchCSS', ['watch']);
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('minify', ['minifyHtml']);

};