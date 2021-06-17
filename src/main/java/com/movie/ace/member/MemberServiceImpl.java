package com.movie.ace.member;

import javax.inject.Inject;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService{
	
	@Inject
	MemberMapper memberMapper;
	
	@Override
	public int loginCheck(MemberVo memberVo, HttpSession session) {
		// TODO Auto-generated method stub
		System.out.println(memberVo.getMemberId());
		System.out.println(memberVo.getMemberPw());
		String id = memberVo.getMemberId();
		String pw = memberVo.getMemberPw();
		
		int a = 0;
		try {
			a = memberMapper.checkOurMember(memberVo);
			System.out.println("체크: "+ a);
			
			if(a == 1) {
				session.setAttribute("user", memberVo.getMemberId());
			}else {
				session.setAttribute("user", "");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			session.setAttribute("user", "");
			e.printStackTrace();
		}
		
		return a;
	}
}
