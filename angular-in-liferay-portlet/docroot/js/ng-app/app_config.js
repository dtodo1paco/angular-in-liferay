/**
 * Global variables accesible for all modules to simplify configuration
 */
var PORTLET_SERVE_RESOURCE_URL;
var THE_DIV_ID;
var THE_APP_MODULE = "roles";
/**
 * Constants
 * 
 */
angular
		.module('app.config', [])
		.constant(
				'properties',
				{
					/* service url */
					resourceUrl : PORTLET_SERVE_RESOURCE_URL,
					/* pagination config */
					pagination : {
						SIZE : 6
					},
					/* routes paths */
					paths : {
						PAGINATED : '/roles/start/:start/end/:end/'
					},
					/* routes views */
					views : {
						ROLES_CARDS : '/angular-in-liferay-portlet/js/ng-app/views/roles-cards.html',
						ROLES_CAROUSEL : '/angular-in-liferay-portlet/js/ng-app/views/roles-carousel.html',
						ROLES_LIST : '/angular-in-liferay-portlet/js/ng-app/views/roles-list.html'
					}
				});