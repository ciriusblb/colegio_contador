(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('rtWidgetHeader', rtWidgetHeader);
    function rtWidgetHeader () {
        var directive = {
            scope: {
                'title': '@',
                'subtitle': '@',
                'rightText': '@',
                'allowCollapse': '@',
                'bg':'@'
            },
            templateUrl: 'app/widgets/rtWidgetHeader/rtWidgetHeader.html',
            restrict: 'E'
        };
        return directive;
    }
})();
