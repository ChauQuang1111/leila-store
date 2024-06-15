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
						          	<div className="image"><Image src="public/ourteam1.jpg" alt="team01"/></div>
						          	<div className="box-info">
										<div className="name">Christiana Q</div>
										<div className="info">CEO-founder</div>
									</div>
					          	</div>
					          	<div className="item col-sm-4 col-xs-12">
					          		<div className="image"><Image src="public/ourteam2.jpg" alt="team02"/></div>
					          		<div className="box-info">
										<div className="name">ANNABELLA JOLIE</div>
										<div className="info">Art Director/Founder Leila Store</div>
									</div>
						         </div>
					          	<div className="item col-sm-4 col-xs-12">
						          	<div className="image"><Image src="public/ourteam3.jpg" alt="team03"/></div>
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

<footer className="footer default">
	<div className="footer-divider"></div>
    <div className="container">
        <div className="row ">
        	<div className="container">
        		<div className="row">
		        	<div className="col-sm-12 col-lg-4 col-md-12">
		        		<div className="column-inner">	
							<figure className="footer-logo figure">
								<Image width="103" height="29" src="public/logo.png" className="single_image-img attachment-full" alt="img"/>
							</figure>
							<div className="footer-address">
								<p>1203 Town Center Drive FL 33458 USA
									<br/>
									+841 123 456 78
									<br/>
									info@leilastoreshop.com
								</p>
							</div>
							<figure className="figure payment-icons">
								<Image width="342" height="21" src="public/payment.png" className="single_image-img attachment-full" alt="img"/>
							</figure>
						</div>
					</div>
					<div className="col-sm-6 col-lg-2 col-md-3">
						<div className="column-inner custom_1484671589428">
                            <div className="widget widget_nav_menu">
                            	<h2 className="widgettitle">STORE MENU</h2>
                            	<div className="menu-footer-store-container">
                            		<ul id="menu-footer-store" className="menu">
                            			<li className="menu-item"><a href="#">Best Seller</a></li>
										<li className="menu-item"><a href="#">New Arrivals</a></li>
										<li className="menu-item"><a href="#">Men</a></li>
										<li className="menu-item"><a href="#">Women</a></li>
										<li className="menu-item"><a href="#">Accessories</a></li>
									</ul>
								</div>
							</div>                            
		            	</div>
		            </div>
		            <div className="col-sm-6 col-lg-2 col-md-3">
		            	<div className="column-inner ">
                            <div className="widget widget_nav_menu">
                            	<h2 className="widgettitle">INFORMATION?</h2>
                            	<div className="menu-footer-information-container">
                            		<ul id="menu-footer-information" className="menu">
                            			<li className="menu-item"><a href="#">About Us</a></li>
										<li className="menu-item"><a href="#">Delivery Information</a></li>
										<li className="menu-item"><a href="#">Privacy Policy</a></li>
										<li className="menu-item"><a href="#">Terms &amp; Conditions</a></li>
										<li className="menu-item"><a href="#">Look Books</a></li>
									</ul>
								</div>
							</div>                            
		            	</div>
		            </div>
		            <div className="col-sm-6 col-lg-2 col-md-3">
		            	<div className="column-inner ">
                            <div className="widget widget_nav_menu">
                            	<h2 className="widgettitle">QUESTION?</h2>
                            	<div className="menu-footer-question-container">
                            		<ul id="menu-footer-question" className="menu">
                                   		<li className="menu-item"><a href="#">Help</a></li>
										<li className="menu-item"><a href="#">Track Order</a></li>
										<li className="menu-item"><a href="#">Support</a></li>
										<li className="menu-item"><a href="#">Shipping &amp; Delivery</a></li>
										<li className="menu-item"><a href="#">FAQs</a></li>
									</ul>
								</div>
							</div>                            
		            	</div>
		            </div>
		           	<div className="col-sm-6 col-lg-2 col-md-3">
		           		<div className="column-inner ">
                            <div className="widget widget_nav_menu">
                            	<h2 className="widgettitle">MY ACCOUNT</h2>
                            	<div className="menu-footer-my-account-container">
                            		<ul id="menu-footer-my-account" className="menu">
                                    	<li className="menu-item"></li>
										<li className="menu-item"><a href="#">Order History</a></li>
										<li className="menu-item"><a href="#">Wish List</a></li>
										<li className="menu-item"><a href="#">Newsletter</a></li>
									</ul>
								</div>
							</div>                            
		            	</div>
		            </div>
	            </div>
            </div>
        </div>
    </div>

    
</footer>
 </div>
    )
}
export default aboutus;