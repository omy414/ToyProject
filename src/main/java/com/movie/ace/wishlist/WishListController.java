package com.movie.ace.wishlist;
 
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WishListController {

	@Autowired
	private WishListDAO wishDAO;
	
	@RequestMapping(value = "/MovieDel", method = RequestMethod.GET)
	public String Moviedelete(HttpServletRequest req, HttpServletResponse res) {
		System.out.println("************************/MOVIE DELETE 들어옴***********************************");
		String memberNo = req.getParameter("member_no");
		String moviecd = req.getParameter("moviecd");
		//String memberNo = req.getParameter("member_no");
		
		WishList del_wishlist = new WishList(); 
		del_wishlist.setMoviecd(moviecd);
		del_wishlist.setMember_no(memberNo);
		System.out.println("여기까지 들어옴");
		wishDAO.delWishList(del_wishlist);
		wishDAO.getWishList(req, res,Integer.valueOf(memberNo));
		
		System.out.println("************************/MOVIE DELETE나간다****************************************************");
		return "/wishlist/Test";
	}
	
	@ResponseBody
	@RequestMapping(value = "/MovieInsert", method = RequestMethod.GET)
	public int Movieinsert(@ModelAttribute WishList movie,HttpServletRequest req, HttpServletResponse res) {
		int duplicate;
		duplicate = wishDAO.checkBeforeInsert(movie);
		
		if(duplicate == 0) {
		wishDAO.insertWishList(movie);
		System.out.println("################if 들어옴");
		System.out.println(duplicate);
		return duplicate;
		}
		else {
			System.out.println("################else 들어옴");
			System.out.println(duplicate);
			return duplicate;
		}
	}
}
	
