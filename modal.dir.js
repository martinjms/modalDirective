angular.module('modal', [])

.directive('modal', ['modalService', function(modalService){
    return {
        transclude: true,
        replace: true,
        scope: {
            'modalId': '@',
            'modalClass': '@',
        },
        controller: function($scope, $element, $timeout){
            $scope.modalService = modalService;

            $scope.modalService.addModal($scope.modalId, $scope.modalClass);


        },
        templateUrl: 'modal/modal.tmpl.html'
        // template: '<div ng-class="modal-overlay { \'on\': showModal, \'off\' : !showModal }" id="{{ }}"><div id="{{modalId}}" class="modal modal-off" ng-transclude></div><div class="modal-overlay" ng-click="hideModal()"></div></div>'

    };
}]);