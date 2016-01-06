/**
 * RoleService
 * 
 */

angular.module('dtodo1paco.services.RoleService',
		[ 'ngResource', 'app.config' ]).factory(
		'RoleService',
		[ '$resource', 'properties', function($resource, properties) {
			return $resource(properties.resourceUrl, {}, {
				query : {
					method : 'GET',
					isArray : false,
					params : {
						serve_resource_action : 'list'
					}
				}
			});
		} ]);
