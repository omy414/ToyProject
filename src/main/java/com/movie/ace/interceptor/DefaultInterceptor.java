package com.movie.ace.interceptor;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.util.PathMatcher;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.servlet.view.AbstractView;
import org.springframework.web.servlet.view.UrlBasedViewResolver;


public class DefaultInterceptor extends HandlerInterceptorAdapter {
	private PathMatcher pathMatcher;

	private String prefix;

	private String suffix;

	private Map<String, String> mappings;

	private HashMap<String, String> localeMappings;

	private List<String> authList;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
		String url = request.getAttribute("org.springframework.web.servlet.HandlerMapping.pathWithinHandlerMapping").toString();
		String uri = request.getRequestURI();
		String requestUrl = request.getRequestURL().toString();
		String serverNm = request.getServerName();
		HttpSession session = request.getSession();
		
		if(session.getAttribute("user") == null || session.getAttribute("user") == "") {
			System.out.println("체크22");
			response.sendRedirect("/");
			return false;
		}else {
			String user = session.getAttribute("user").toString();
			System.out.println(user);
		}
		
		request.setAttribute("contextPath", request.getContextPath());
		request.setAttribute("REQUEST_URL", uri.replace(request.getContextPath(), ""));
		request.setAttribute("FULL_REQUEST_URL", uri);
		request.setAttribute("SERVER_NAME", request.getServerName());
		request.setAttribute("timeStamp",System.currentTimeMillis());
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
		super.postHandle(request, response, handler, modelAndView);
	}

	public PathMatcher getPathMatcher() {
		return pathMatcher;
	}

	public void setPathMatcher(PathMatcher pathMatcher) {
		this.pathMatcher = pathMatcher;
	}

	public HashMap<String, String> getLocaleMappings() {
		return localeMappings;
	}

	public void setLocaleMappings(HashMap<String, String> localeMappings) {
		this.localeMappings = localeMappings;
	}

	public String getPrefix() {
		return prefix;
	}

	public void setPrefix(String prefix) {
		this.prefix = prefix;
	}

	public String getSuffix() {
		return suffix;
	}

	public void setSuffix(String suffix) {
		this.suffix = suffix;
	}

	public Map<String, String> getMappings() {
		return mappings;
	}

	public void setMappings(Map<String, String> mappings) {
		this.mappings = mappings;
	}

	public List<String> getAuthList(){
		return authList;
	}

	public void setAuthList(List<String> authList){
		this.authList=authList;
	}
   
}