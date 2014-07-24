module.exports = function (grunt) {

    var contentIsSafeToDeploy = false;

    // deploying to previewint
    grunt.registerTask('previewint', ['shell:checkMounts', 'stage_checklist', 'prepDeploy', 'replace:prepPreviewIntDeploy', 'copy:intDeploy', 'clean:main']);

    grunt.config(['copy', 'obitDeploy'], {
        files: [
            {expand: true, cwd: 'tmp', src: ['**'], dest: '<%= env.obits.mount %>/<%= config.year %>/newsspec_<%= config.project_number %>/content'}
        ]
    });
    grunt.registerTask('obit',      ['shell:checkMounts', 'stage_checklist', 'prepDeploy', 'replace:prepLiveDeploy'/* this is deliberate */, 'copy:obitDeploy', 'clean:main']);

    // deploying to live. Be careful!
    if (contentIsSafeToDeploy) {
        grunt.registerTask('previewstage', ['shell:checkMounts', 'stage_checklist', 'prepDeploy', 'replace:prepPreviewStageDeploy', 'copy:stageDeploy', 'clean:main']);
        grunt.registerTask('stage', ['shell:checkMounts', 'stage_checklist', 'prepDeploy', 'replace:prepStageDeploy', 'copy:stageDeploy', 'clean:main']);
        grunt.registerTask('previewlive', ['project_checklist', 'checkStage', 'prepDeploy', 'replace:prepLiveDeploy', 'copy:liveDeploy', 'clean:main']);
        grunt.registerTask('live', ['stage_checklist', 'checkStage', 'prepDeploy', 'replace:prepLiveDeploy', 'copy:liveDeploy', 'clean:main']);
    }
};