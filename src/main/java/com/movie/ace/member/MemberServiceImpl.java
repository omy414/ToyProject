package com.movie.ace.member;

import javax.inject.Inject;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService{
	
	@Inject
	MemberMapper memberMapper;
	
	@Override
	public int loginCheck(MemberVo memberVo) {
		// TODO Auto-generated method stub
		System.out.println(memberVo.getMemberId());
		System.out.println(memberVo.getMemberPw());
		String id = memberVo.getMemberId();
		String pw = memberVo.getMemberPw();
		
		int a = 0;
		try {
			a = memberMapper.checkOurMember(memberVo);
			System.out.println("체크: "+ a);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return a;
	}
}
