/**
 * RoleListCtrl
 * 
 */
angular.module('dtodo1paco.controllers.RoleListCtrl',
		[ 'dtodo1paco.services.RoleService', 'app.config', 'ui.format' ])
		.controller(
				'RoleListCtrl',
				[
						'$scope',
						'$filter',
						'$location',
						'results',
						'properties',
						function($scope, $filter, $location, results,
								properties) {
							/* These values are used in views for rendering */
							$scope.results = results.results;
							$scope.totalItems = results.total;
							$scope.currentPage = Math.ceil(results.start
									/ properties.pagination.SIZE) + 1;
							$scope.itemsPerPage = properties.pagination.SIZE;
							$scope.numPages = Math.ceil(results.total
									/ properties.pagination.SIZE);
							var paginationClicked = false;
							$scope.$watch('currentPage', function() {
								if (paginationClicked) {
									var formatFilter = $filter('format');
									var start = ($scope.currentPage - 1)
											* properties.pagination.SIZE;
									var end = start
											+ properties.pagination.SIZE;
									var loc = formatFilter(
											properties.paths.PAGINATED, {
												start : start,
												end : end
											});
									console.log("==> location: " + loc);
									$location.path(loc);
								}
								paginationClicked = true;
							});
						} ]);