
<%
	/**
 * This view is just to initialize global values and render the angularJS div
 */
%>


<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %><%@
taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %><%@
taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %><%@
taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %><%@
taglib uri="http://liferay.com/tld/util" prefix="liferay-util" %>
<portlet:defineObjects />

This is the
<b>Angular UI Portlet</b>
portlet.

<script type="text/javascript">
	PORTLET_SERVE_RESOURCE_URL = '<portlet:resourceURL />';

	THE_DIV_ID = "angular-div"
</script>

<div id="angular-div">
	<h2>Liferay Roles</h2>
	<div ng-view></div>
</div>
