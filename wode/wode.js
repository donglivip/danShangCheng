mui.init();


	var cell=document.getElementsByClassName("mui-table-view-cell");
	
	var div_img=document.getElementsByClassName("div_img02");
	
		//我的订单
		cell[0].addEventListener("tap",function(){
				dui.jump('../dingdan/dingdan.html','dingdan');	
		})
		
		
		
		
		//会员充值
		cell[1].addEventListener("tap",function(){
				dui.jump('../chongzhi/chongzhi.html','chongzhi');	
		})
		
		
		//我的收藏
		cell[2].addEventListener("tap",function(){
				dui.jump('../shoucang/shoucang.html','shoucang');	
		})
		
		
		//收货地址
		cell[3].addEventListener("tap",function(){
				dui.jump('../shouhuodizhi/shouhuodizhi.html','shouhuodizhi');	
		})
		
		
		//设置代发货地址
		cell[4].addEventListener("tap",function(){
				dui.jump('../fahuodizhi/fahuodizhi.html','fahuodizhi');	
		})
		
		
		//关于我们
		cell[5].addEventListener("tap",function(){
				dui.jump('../guanyu/guanyu.html','guanyu');	
		})


		//关于我们
		cell[6].addEventListener("tap",function(){
				dui.jump('../modsss/modsss.html','modsss');	
		})

		
		//到设置中心
		
		div_img[0].addEventListener("tap",function(){
			dui.jump('../info/info.html','info');
		})