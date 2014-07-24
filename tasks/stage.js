module.exports = function (grunt) {
    grunt.config(['replace', 'prepStageDeploy'], {
        src: ['tmp/*/**.*', 'tmp/*/half_wide/**.*'],
        overwrite: true,
        replacements: [{
            from: '<%= env.local.domain %>',
            to:   '<%= env.stage.domain %>'
        }, {
            from: '<%= env.local.domainStatic %>',
            to:   '<%= env.stage.domainStatic %>'
        }]
    });
    grunt.config(['copy', 'stageDeploy'], {
        files: [
            {expand: true, cwd: 'tmp', src: ['**'], dest: '<%= env.stage.mount %>/news/special/<%= config.year %>/newsspec_<%= config.project_number %>/content'}
        ]
    });
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');
};