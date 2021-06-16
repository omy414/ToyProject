package com.movie.ace.member;

public class MemberVo {
	private String memberId;
	private String memberPw;
	
	
	public String getMemberId() {
		return memberId;
	}
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	public String getMemberPw() {
		return memberPw;
	}
	public void setMemberPw(String memberPw) {
		this.memberPw = memberPw;
	}
	@Override
	public String toString() {
		return "MemberVo [memberId=" + memberId + ", memberPw=" + memberPw + "]";
	}
	public MemberVo (String memberId, String memberPw) {
		super();
		this.memberId = memberId;
		this.memberPw = memberPw;
	}
	public MemberVo () {
		super();
		// TODO Auto-generated constructor stub
	}

	
}
