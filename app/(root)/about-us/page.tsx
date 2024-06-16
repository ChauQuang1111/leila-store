import Image from "next/image";

const aboutus = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="header-bg page-heading relative bg-gray-800">
                    <div className="overlay absolute inset-0 bg-black opacity-50"></div>
                    <div className="heading-content text-center relative z-10 text-white">
                        <div className="container mx-auto py-20">
                            <h1 className="page-title text-4xl font-bold">About Us</h1>
                            
                        </div>
                    </div>
                </div>
                <main className="site-main main-container no-sidebar">
                    <div className="container mx-auto py-10">
                        <div id="content" role="main">
                            <div className="row flex flex-wrap">
                                <div className="main-content col-sm-12">
                                    <h1 className="text-center text-4xl font-bold uppercase mb-16 text-gray-800">About Us</h1>
                                    <p className="mb-6">We're a team of creative and make amazing site in ecommerce from Bình Dương. We love colour pastel,highlight and simple, its make our design look so awesome</p>
                                    <p className="mb-6">
                                        Discover the latest trends in fashion at Leila Store Shop, your go-to destination for stylish and affordable clothing. From chic dresses to cozy sweaters, we've got everything you need to look your best this season!
                                    </p>
                                    <h3 className="text-2xl font-bold mb-4">Leila Store</h3>
                                    <p className="mb-6">
                                        At Leila Store Shop, we are always dedicated to providing enthusiastic and helpful support to all our customers, bringing them high-quality products and ensuring their satisfaction.
                                    </p>
                                    <div className="flex justify-around mb-16">
                                        <div className="w-1/3 text-center">
                                            <h3 className="text-xl font-bold uppercase">Worldwide Delivery</h3>
                                            <p>Free delivery on all online order</p>
                                        </div>
                                        <div className="w-1/3 text-center">
                                            <h3 className="text-xl font-bold uppercase">Free Gift Card</h3>
                                            <p>Gift cards are free. Claim them now!</p>
                                        </div>
                                        <div className="w-1/3 text-center">
                                            <h3 className="text-xl font-bold uppercase">Return Exchange</h3>
                                            <p>30 Days money back guarantee!</p>
                                        </div>
                                    </div>
                                    <div className="about-footer">
                                        
                                    </div>
                                    <br/>
                                    <div className="about-widget">
                                        <div className="text-center mb-16">
                                            <h1 className="text-center text-4xl font-bold uppercase mb-10">Our Team</h1>
                                            <div className="flex justify-center space-x-16">
                                                <div className="text-center">
                                                    <div className="image mb-4">
                                                        <Image src="/ourteam1.jpg" alt="team01" width={100} height={100} className="rounded-full mx-auto"/>
                                                    </div>
                                                    <div className="box-info">
                                                        <div className="name text-xl font-bold">Christiana Q</div>
                                                        <div className="info text-gray-600">CEO-founder</div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="image mb-4">
                                                        <Image src="/ourteam2.jpg" alt="team02" width={100} height={100} className="rounded-full mx-auto"/>
                                                    </div>
                                                    <div className="box-info">
                                                        <div className="name text-xl font-bold">Annabella Jolie</div>
                                                        <div className="info text-gray-600">Art Director/Founder Leila Store</div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="image mb-4">
                                                        <Image src="/ourteam3.jpg" alt="team03" width={100} height={100} className="rounded-full mx-auto"/>
                                                    </div>
                                                    <div className="box-info">
                                                        <div className="name text-xl font-bold">Jon Brooks</div>
                                                        <div className="info text-gray-600">Senior Designer</div>
                                                    </div>
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
    );
}

export default aboutus;
