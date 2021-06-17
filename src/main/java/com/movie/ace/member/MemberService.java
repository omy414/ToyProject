package com.movie.ace.member;

import javax.servlet.http.HttpSession;

public interface MemberService {
	
	int loginCheck(MemberVo memberVo, HttpSession session);
}
