module.exports = function(config){
  config.set({

    basePath : '',

    files : [
        'app/views/shared/*.html',
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'app/bower_components/angular-bootstrap/ui-bootstrap.min.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/views/add/controller.js',
        'app/views/add/spec.js',
        'app/views/details/controller.js',
        'app/views/details/spec.js',
        'app/views/edit/controller.js',
        'app/views/edit/spec.js',
        'app/views/home/controller.js',
        'app/views/home/spec.js',
        'app/views/success/service.js',
        'app/views/success/controller.js',
        'app/views/success/spec.js',
        'app/views/shared/directives.js',
        'app/views/shared/filters.js',
        'app/views/shared/mainService.js',
        'app/views/shared/mainController.js',
        'app/views/shared/mainSpec.js',
        'app/views/shared/filtersSpec.js',
        'app/views/shared/directivesSpec.js',
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
    },

      preprocessors: {
          'app/views/shared/*.html': ['ng-html2js']
      },

// we will be accessing this by module name later on in Jasmine
      ngHtml2JsPreprocessor: {
          moduleName: 'templates'
      }




  });
};
