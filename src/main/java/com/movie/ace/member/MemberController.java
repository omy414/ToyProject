package com.movie.ace.member;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MemberController {
	
	@Inject
	MemberMapper memberMapper;
	
	@Autowired
	MemberService memberService;
	
	private String referer;
	@RequestMapping(value="/loginModalPage", method = RequestMethod.GET)
	public String loginModalURL(HttpServletRequest request) throws Exception{
		HttpSession session = request.getSession(true);
		System.out.println("들어옴");
		session.setAttribute("referer", request.getHeader("referer"));
		return "/member/loginModalPage";
	}
	
	
	@RequestMapping(value = "/login.do", method = RequestMethod.POST)
	public ModelAndView findMemberList(MemberVo memberVo, HttpServletRequest request) {
		
		HttpSession session = request.getSession(true);
		
		ModelAndView mv = new ModelAndView();
		referer = (String) session.getAttribute("referer");
		System.out.println(referer);
		System.out.println(referer.substring(referer.lastIndexOf("/")+1));
		String check = referer.substring(referer.lastIndexOf("/")+1);
		
		int a = memberService.loginCheck(memberVo);
		
		if(a == 1) {
			session.setAttribute("ok", memberVo.getMemberId());
		}else {
			
		}
		
		
		if(check != null) {
			mv.setViewName("home");
		}else {
			mv.setViewName("home");
		}
		
		System.out.println(mv.getViewName());
		return mv;
	}
}
