package com.movie.ace.member;

import javax.inject.Inject;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;

@Service
public class MemberDAO implements MemberMapper{
	
	@Inject
	SqlSession sqlSession;

	@Override
	public int checkOurMember(MemberVo vo) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("member.checkOurMember", vo);
	}
}
