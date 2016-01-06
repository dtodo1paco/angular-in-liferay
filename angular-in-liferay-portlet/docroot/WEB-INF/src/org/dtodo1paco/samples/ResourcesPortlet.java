package org.dtodo1paco.samples;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portal.model.Role;
import com.liferay.portal.model.Website;
import com.liferay.portal.service.RoleLocalServiceUtil;
import com.liferay.portal.service.WebsiteLocalServiceUtil;
import com.liferay.portal.util.PortalUtil;
import com.liferay.portlet.asset.model.AssetCategory;
import com.liferay.portlet.asset.service.AssetCategoryLocalServiceUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

public class ResourcesPortlet extends MVCPortlet {

	@Override
	public void serveResource(ResourceRequest resourceRequest,
			ResourceResponse resourceResponse) throws IOException,
			PortletException {
		HttpServletRequest httpReq = PortalUtil
				.getOriginalServletRequest(PortalUtil
						.getHttpServletRequest(resourceRequest));
		JSONObject jsonObject = JSONFactoryUtil.createJSONObject();

		String resource = ParamUtil.getString(httpReq, "resource", "default");
		int start = ParamUtil.getInteger(httpReq, "start");
		int end = ParamUtil.getInteger(httpReq, "end");

		if (_log.isDebugEnabled()) {
			_log.debug("Serving resource " + resource + " from " + start 
				+ " to " + end);
		}
		jsonObject.put("success", true);
		jsonObject.put("start", start);
		jsonObject.put("end", end);

		try {
			int total = RoleLocalServiceUtil.getRolesCount();
			List<Role> items = RoleLocalServiceUtil.getRoles(start, end);
			jsonObject.put("total",total);
			jsonObject.put("results", jsonize(items));
		} catch (SystemException e) {
			_log.error("Unable to get results", e);
		}
		PrintWriter writer = resourceResponse.getWriter();
		writer.write(jsonObject.toString());
	}

	private JSONArray jsonize(List<Role> items) {
		JSONArray jsonItems = JSONFactoryUtil.createJSONArray();
		String basePath = "/angular-in-liferay-portlet/img/";
		for (Role role : items) {
			JSONObject item = JSONFactoryUtil.createJSONObject();
			item.put("id", role.getRoleId());
			item.put("name", role.getName());
			item.put("image", basePath + role.getName().toLowerCase().replace(" ", "") + ".png");
			item.put("description", role.getDescriptionCurrentLanguageId());
			item.put("createDate", role.getCreateDate());
			if (_log.isDebugEnabled()){
				_log.debug("Putting item in results: " + item);
			}
			jsonItems.put(item);
		}
		return jsonItems;
	}

	private static final Log _log = LogFactoryUtil
			.getLog(ResourcesPortlet.class);
}
