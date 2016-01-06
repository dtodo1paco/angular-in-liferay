/**
 * Application
 * 
 */
angular
		.module(
				'roles',
				[ 'ngRoute', 'app.config',
						'dtodo1paco.controllers.RoleListCtrl',
						'dtodo1paco.services.RoleService', 'ui.bootstrap' ])
		.config(
				[
						'$routeProvider',
						'properties',
						function($routeProvider, properties) {
							$routeProvider
									.when(
											'/',
											{
												controller : 'RoleListCtrl',
												templateUrl : properties.views.ROLES_CARDS,
												resolve : {
													results : [
															'RoleService',
															function(
																	RoleService) {
																var data = RoleService
																		.query({
																			start : 0,
																			end : properties.pagination.SIZE
																		});
																return data.$promise;
															} ]
												}
											})
									.when(
											properties.paths.PAGINATED,
											{
												controller : 'RoleListCtrl',
												templateUrl : properties.views.ROLES_CARDS,
												resolve : {
													results : [
															'RoleService',
															'$route',
															function(
																	RoleService,
																	$route) {
																var data = RoleService
																		.query({
																			start : $route.current.params.start,
																			end : $route.current.params.end
																		});
																return data.$promise;
															} ]
												}
											}).otherwise({
										redirectTo : '/'
									});
						} ]);
