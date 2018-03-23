module.exports = function(grunt){
  grunt.initConfig({
    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'img/',
              src: ['**/*.{png,jpg,gif,jpeg}'],
              dest: 'images/build/'
          }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['imagemin'])
}
