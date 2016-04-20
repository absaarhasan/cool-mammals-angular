module.exports = function(config){
  config.set({

    basePath : '',

    files : [
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'app/bower_components/angular-bootstrap/ui-bootstrap.min.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/views/add/controller.js',
        'app/views/details/controller.js',
        'app/views/edit/controller.js',
        'app/views/home/controller.js',
        'app/views/home/spec.js',
        'app/views/success/service.js',
        'app/views/success/controller.js',
        'app/views/shared/directives.js',
        'app/views/shared/filters.js',
        'app/views/shared/mainController.js',
        'app/app.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
