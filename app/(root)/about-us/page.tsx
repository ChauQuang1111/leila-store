import Image from "next/image";

const aboutus=()=>{
    return (
        <div>
<div className="wapper">
	<div className="header-bg page-heading">
      <div className="overlay"></div>
      <div className="heading-content text-center">
        <div className="container">
          <h1 className="page-title color-white">About us</h1>
          <nav className="woocommerce-breadcrumb">
			<a href="">Home</a>
			About
		   </nav>
        </div>
      </div>
    </div>
    <main className="site-main  main-container no-sidebar">
		<div className="container">
		  	<div id="content" role="main">    
		    	<div className="row">
		      		<div className="main-content col-sm-12">
				        <h1 className="text-center upper color-dark margin-bottom-60">ABOUT US</h1>
				        <p>We're a team of creative and make amazing site in ecommerce from Unite States. We love colour pastel,highlight and simple, its make our design look so awesome</p>
				        <p>
						Discover the latest trends in fashion at Leila Store Shop, your go-to destination for stylish and affordable clothing. From chic dresses to cozy sweaters, we've got everything you need to look your best this season!
						</p>
						<h3>LEILA-STORE</h3>
						<p>
						At Leila Store Shop, we are always dedicated to providing enthusiastic and helpful support to all our customers, bringing them high-quality products and ensuring their satisfaction..</p>
				        <div className="row">
				          <div className="col-sm-4 col-xs-12">
				            <h3 className="text-center upper"> WORLDWIDE DELIVERY</h3>
				             <p className="text-center">Free delivery on all online order</p>
				          </div>
				          <div className="col-sm-4 col-xs-12">
				            <h3 className="text-center upper">FREE GIFT CARD</h3>
				             <p className="text-center">Gift cards are free. Claim them now!</p>
				          </div>
				          <div className="col-sm-4 col-xs-12">
				            <h3 className="text-center upper">RETURN EXCHANGE</h3>
				             <p className="text-center">30 Days money back guarantee!</p>
				          </div>
				        </div>
				        <div className="about-footer">
				        	<div className="share">
						        <label>Share:</label>
						        <br/>
					            <a target="_blank" href="#"><i className="fa fa-facebook"></i></a>
					            <a target="_blank" href="#"><i className="fa fa-twitter"></i></a>                                
					            <a target="_blank" href="#"><i className="fa fa-pinterest"></i></a>
					            <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a>
				            </div>
					    </div>

		        		<br/>
		        		<div className="about-widget">
					        <div className="row">
					          <h1 className="upper text-center">OUR TEAM</h1>
					          	<div className="item col-sm-4 col-xs-12">
						          	<div className="image"><Image src="/ourteam1.jpg" alt="team01" width={100} height={100}/></div>
						          	<div className="box-info">
										<div className="name">Christiana Q</div>
										<div className="info">CEO-founder</div>
									</div>
					          	</div>
					          	<div className="item col-sm-4 col-xs-12">
					          		<div className="image"><Image src="/ourteam2.jpg" alt="team02" width={100} height={100}/></div>
					          		<div className="box-info">
										<div className="name">ANNABELLA JOLIE</div>
										<div className="info">Art Director/Founder Leila Store</div>
									</div>
						         </div>
					          	<div className="item col-sm-4 col-xs-12">
						          	<div className="image"><Image src="/ourteam3.jpg" alt="team03" width={100} height={100}/></div>
						          	<div className="box-info">
										<div className="name">JON BROOKS</div>
										<div className="info">Senior Designer</div>
										
									</div>
					          	</div>
		        			</div>
		      			</div>
		    		</div>
		  		</div>
			</div>
		</div>
		
	</main>
</div>

 </div>
    )
}

export default aboutus;