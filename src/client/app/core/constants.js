(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('TOKEN_KEY',{
			myToken: 'ClientToken'
		})
		.constant('AUTH_EVENTS',{
			notAuthenticated: 'auth-not-authenticated'
		});
}());