angular.module('dtodo1paco.controllers.RoleCarouselCtrl',
		[ 'dtodo1paco.services.RoleService', 'app.config', 'ui.format' ])
		.controller(
				'RoleCarouselCtrl',
				[
						'$scope',
						'$filter',
						'$location',
						'results',
						'properties',
						function($scope, $filter, $location, results,
								properties) {
							// Setup our Controller instance as the view-model.
							var vm = this;
							// This is the value we will be "watching".
							var total = results.total;

							var slides = $scope.slides = [];
							$scope.myInterval = 5000;
							$scope.noWrapSlides = false;
							$scope.addSlide = function($text, $image) {
								console.log("ADding slide: " + $text);
								var newWidth = 600 + slides.length + 1;
								slides.push({
									image : $image,
									text : $text
								});
							};
							$scope.results = results.results.results;
							for ( var result in results) {
								console.log("result is: " + result);
								$scope.addSlide(result.text, result.image);
							}
							$scope.$watch(function watchTotal(scope) {
								return (vm.total);
							}, function handleTotalChange(newValue, oldValue) {
								console.log("TotalResults changed:", newValue);
							});
						} ]);