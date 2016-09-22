myapp.config(['$stateProvider', '$urlRouterProvider', config]);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'client/components/tabs/tabs.html',
            controller: 'TabsCtrl as tabs'
        })
        .state('app.content', {
            url: '/content',
            views: {
                'tab-one': {
                    templateUrl: 'client/components/content/content.html',
                    controller: 'ContentCtrl as content'
                }
            }
        });
    $urlRouterProvider.otherwise('/app/content');
}