'use strict';

/**
 * @ngdoc overview
 * @name webappApp
 * @description
 * # webappApp
 *
 * Main module of the application.
 */
angular
    .module('webappApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'angular-loading-bar',
        'ui.router',
        'oc.lazyLoad',
        'ui.bootstrap'
    ])
    .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            debug:false,
            events:true,
        });

        $urlRouterProvider.otherwise('/dashboard/home');

        $stateProvider
            .state('dashboard', {
                url:'/dashboard',
                templateUrl: 'views/dashboard/main.html',
                resolve: {
                    loadMyDirectives:function($$animateJs,$ocLazyLoad){
                        return $ocLazyLoad.load(
                            {
                                name:'webappApp',
                                files:[
                                    'scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js',
                                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                                ]
                            }),
                            $ocLazyLoad.load(
                                {
                                    name:'toggle-switch',
                                    files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                        "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                    ]
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngAnimate',
                                    files:['bower_components/angular-animate/angular-animate.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngCookies',
                                    files:['bower_components/angular-cookies/angular-cookies.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngResource',
                                    files:['bower_components/angular-resource/angular-resource.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngSanitize',
                                    files:['bower_components/angular-sanitize/angular-sanitize.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngTouch',
                                    files:['bower_components/angular-touch/angular-touch.js']
                                });
                    }
                }
            })
            .state('teacher', {
                url:'/teacher',
                templateUrl: 'views/dashboard/main.html',
                resolve: {
                    loadMyDirectives:function($$animateJs,$ocLazyLoad){
                        return $ocLazyLoad.load(
                            {
                                name:'webappApp',
                                files:[
                                    'scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js',
                                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                                ]
                            }),
                            $ocLazyLoad.load(
                                {
                                    name:'toggle-switch',
                                    files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                        "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                    ]
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngAnimate',
                                    files:['bower_components/angular-animate/angular-animate.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngCookies',
                                    files:['bower_components/angular-cookies/angular-cookies.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngResource',
                                    files:['bower_components/angular-resource/angular-resource.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngSanitize',
                                    files:['bower_components/angular-sanitize/angular-sanitize.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngTouch',
                                    files:['bower_components/angular-touch/angular-touch.js']
                                });
                    }
                }
            })
            .state('teacher.index',{
                url:'/index',
                templateUrl: 'views/teacher/index.html',
                controller: 'TeacherIndexCtrl'
            })
            .state('teacher.add',{
                url:'/add',
                templateUrl: 'views/teacher/add.html',
                controller: 'TeacherAddCtrl'
            })
            .state('teacher.edit',{
                url:'/edit/:id',
                templateUrl: 'views/teacher/edit.html',
                controller: 'TeacherEditCtrl'
            })
            .state('student', {
                url:'/student',
                templateUrl: 'views/dashboard/main.html',
                resolve: {
                    loadMyDirectives:function($$animateJs,$ocLazyLoad){
                        return $ocLazyLoad.load(
                            {
                                name:'webappApp',
                                files:[
                                    'scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js',
                                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                                ]
                            }),
                            $ocLazyLoad.load(
                                {
                                    name:'toggle-switch',
                                    files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                        "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                    ]
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngAnimate',
                                    files:['bower_components/angular-animate/angular-animate.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngCookies',
                                    files:['bower_components/angular-cookies/angular-cookies.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngResource',
                                    files:['bower_components/angular-resource/angular-resource.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngSanitize',
                                    files:['bower_components/angular-sanitize/angular-sanitize.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngTouch',
                                    files:['bower_components/angular-touch/angular-touch.js']
                                });
                    }
                }
            })
            .state('student.index',{
                url:'/student',
                templateUrl: 'views/student/index.html',
            })
            .state('dashboard.klass',{
                url:'/klass',
                templateUrl: 'views/klass/index.html',
            })
            .state('course', {
                url:'/course',
                templateUrl: 'views/dashboard/main.html',
                resolve: {
                    loadMyDirectives:function($$animateJs,$ocLazyLoad){
                        return $ocLazyLoad.load(
                            {
                                name:'webappApp',
                                files:[
                                    'scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js',
                                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                                ]
                            }),
                            $ocLazyLoad.load(
                                {
                                    name:'toggle-switch',
                                    files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                        "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                    ]
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngAnimate',
                                    files:['bower_components/angular-animate/angular-animate.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngCookies',
                                    files:['bower_components/angular-cookies/angular-cookies.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngResource',
                                    files:['bower_components/angular-resource/angular-resource.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngSanitize',
                                    files:['bower_components/angular-sanitize/angular-sanitize.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngTouch',
                                    files:['bower_components/angular-touch/angular-touch.js']
                                });
                    }
                }
            })
            .state('course.index',{
                url:'/index',
                templateUrl: 'views/course/index.html',
                controller: 'CourseIndexCtrl'
            })
            .state('course.edit',{
                url:'/edit',
                templateUrl: 'views/course/index.html',
                controller: 'CourseEditCtrl'
            })
            .state('dashboard.user',{
                url:'/user',
                templateUrl: 'views/user/index.html',
            })
            .state('dashboard.laboratory',{
                url:'/laboratory',
                templateUrl: 'views/laboratory/index.html',
            })
            .state('dashboard.academy',{
                url:'/academy',
                templateUrl: 'views/academy/index.html',
            })
            .state('dashboard.term',{
                url:'/term',
                templateUrl: 'views/term/index.html',
                controller: 'TermIndexCtrl'
            })
            .state('dashboard.home',{
                url:'/home',
                controller: 'MainCtrl',
                templateUrl:'views/dashboard/home.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'webappApp',
                            files:[
                                'scripts/controllers/main.js',
                                'scripts/directives/timeline/timeline.js',
                                'scripts/directives/notifications/notifications.js',
                                'scripts/directives/chat/chat.js',
                                'scripts/directives/dashboard/stats/stats.js'
                            ]
                        });
                    }
                }
            })
            .state('dashboard.form',{
                templateUrl:'views/form.html',
                url:'/form'
            })
            .state('dashboard.blank',{
                templateUrl:'views/pages/blank.html',
                url:'/blank'
            })
            .state('login',{
                templateUrl:'views/pages/login.html',
                url:'/login'
            })
            .state('dashboard.chart',{
                templateUrl:'views/chart.html',
                url:'/chart',
                controller:'ChartCtrl',
                resolve: {
                    loadMyFile:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'chart.js',
                            files:[
                                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                                'bower_components/angular-chart.js/dist/angular-chart.css'
                            ]
                        }),
                            $ocLazyLoad.load({
                                name:'sbAdminApp',
                                files:['scripts/controllers/chartContoller.js']
                            });
                    }
                }
            })
            .state('dashboard.table',{
                templateUrl:'views/table.html',
                url:'/table'
            })
            .state('dashboard.panels-wells',{
                templateUrl:'views/ui-elements/panels-wells.html',
                url:'/panels-wells'
            })
            .state('dashboard.buttons',{
                templateUrl:'views/ui-elements/buttons.html',
                url:'/buttons'
            })
            .state('dashboard.notifications',{
                templateUrl:'views/ui-elements/notifications.html',
                url:'/notifications'
            })
            .state('dashboard.typography',{
                templateUrl:'views/ui-elements/typography.html',
                url:'/typography'
            })
            .state('dashboard.icons',{
                templateUrl:'views/ui-elements/icons.html',
                url:'/icons'
            })
            .state('dashboard.grid',{
                templateUrl:'views/ui-elements/grid.html',
                url:'/grid'
            });
    }]);