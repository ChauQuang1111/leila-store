import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitchIcon, YoutubeIcon, AppleIcon, TwitterIcon } from "lucide-react";

const footer = () => {
    return (
        <div className="bg-slate-600">
            <div id="footer" className="footer">
                <div className="footer-main bg-surface">
                    <div className="container px-9"> {/* Added padding to the container */}
                        <div className="content-footer md:py-[60px] py-10 flex justify-between flex-wrap gap-y-9 pr-9"> {/* Added padding to shift content */}
                            <div className="company-infor basis-1/4 max-lg:basis-full pr-7">
                                <a href="/" className="logo inline-block">
                                    <div className="heading2 w-fit font-bold">Leila E-Commerce</div>
                                </a>
                                <div className="flex gap-3 mt-3">
                                    <div className="flex flex-col">
                                        <span className="text-button font-bold">Mail:</span>
                                        <span className="text-button mt-3 font-bold">Phone:</span>
                                        <span className="text-button mt-3 font-bold">Address:</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="">leila@gmail.com</span>
                                        <span className="mt-[14px]">+(84) 234567890</span>
                                        <span className="mt-3 pt-1">Đường Nam Kỳ Khởi Nghĩa, Định Hoà, Tp. Thủ Dầu Một, Bình Dương, Việt Nam</span>
                                    </div>
                                </div>
                            </div>
                            <div className="right-content flex flex-wrap gap-y-8 basis-3/4 max-lg:basis-full">
                                <div className="list-nav flex justify-between basis-2/3 max-md:basis-full gap-4">
                                    <div className="item flex flex-col basis-1/3">
                                        <div className="text-button-uppercase pb-3 font-bold">Information</div>
                                        <a className="caption1 has-line-before duration-300 w-fit" href="contact.html">Contact us</a>
                                        <a className="caption1 has-line-before duration-300 w-fit pt-2" href="#!">Career</a>
                                        <a className="caption1 has-line-before duration-300 w-fit pt-2" href="/my-account.html">My Account</a>
                                        <a className="caption1 has-line-before duration-300 w-fit pt-2" href="/order-tracking.html">Order & Returns</a>
                                        <a className="caption1 has-line-before duration-300 w-fit pt-2" href="faqs.html">FAQs</a>
                                    </div>
                                    <div className="item flex flex-col basis-1/3">
                                        <div className="text-button-uppercase pb-3 font-bold">Quick Shop</div>
                                        <a className="caption1 has-line-before duration-300 w-fit" href="/shop-breadcrumb1.html">Women</a>
                                        <a className="caption1 has-line-before duration-300 w-fit pt-2" href="/shop-breadcrumb1.html">Men</a>
                                        <a className="caption1 has-line-before duration-300 w-fit pt-2" href="/shop-breadcrumb1.html">Clothes</a>
                                        <a className="caption1 has-line-before duration-300 w-fit pt-2" href="/shop-breadcrumb1.html">Accessories</a>
                                        <a className="caption1 has-line-before duration-300 w-fit pt-2" href="blog-default.html">Blog</a>
                                    </div>
                                    <div className="item flex flex-col basis-1/3">
                                        <div className="text-button-uppercase pb-3 font-bold">Customer Services</div>
                                        <a className="caption1 has-line-before duration-300 w-fit" href="faqs.html">FAQs</a>
                                        <a className="caption1 has-line-before duration-300 w-fit pt-2" href="faqs.html">Shipping</a>
                                        <a className="caption1 has-line-before duration-300 w-fit pt-2" href="faqs.html">Privacy Policy</a>
                                        <a className="caption1 has-line-before duration-300 w-fit pt-2" href="/order-tracking.html">Return & Refund</a>
                                    </div>
                                </div>
                                <div className="newsletter basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
                                    <div className="text-button-uppercase font-bold">Newsletter</div>
                                    <div className="caption1 mt-3">Sign up for our newsletter and get 10% off your first purchase</div>
                                    <div className="input-block w-full h-[52px] mt-4">
                                        <form className="w-full h-full relative" action="post">
                                            <input type="email" placeholder="Enter your e-mail" className="caption1 w-full h-full pl-4 pr-14 rounded-xl border border-line" required />
                                            <button className="w-[44px] h-[44px] bg-grey-2 flex items-center justify-center rounded-xl absolute top-1 right-1">
                                                <i className="ph ph-arrow-right text-xl text-black">-{">"}</i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="list-social flex items-center gap-6 mt-4">
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <FacebookIcon className="icon-facebook text-2xl text-black" />
                                        </a>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <InstagramIcon className="icon-instagram text-2xl text-black" />
                                        </a>
                                        <a href="https://www.twitter.com/" target="_blank">
                                            <TwitterIcon className="icon-twitter text-2xl text-black" />
                                        </a>
                                        <a href="https://www.youtube.com/" target="_blank">
                                            <YoutubeIcon className="icon-youtube text-2xl text-black" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom py-3 flex items-center justify-between gap-5 max-lg:justify-center max-lg:flex-col border-t border-line pr-4"> {/* Added padding to shift content */}
                            <div className="left flex items-center gap-8">
                                <div className="copyright caption1 text-secondary">©2024 Leila All Rights Reserved.</div>
                                <div className="select-block flex items-center gap-5 max-md:hidden">
                                    <div className="choose-language flex items-center gap-1.5">
                                        <select name="language" id="chooseLanguageFooter" className="caption2 bg-transparent">
                                            <option value="English">English</option>
                                            <option value="Vietnamese">Vietnamese</option>
                                        </select>
                                        <i className="ph ph-caret-down text-xs text-[#1F1F1F]"></i>
                                    </div>
                                    <div className="choose-currency flex items-center gap-1.5">
                                        <select name="currency" id="chooseCurrencyFooter" className="caption2 bg-transparent">
                                            <option value="USD">USD</option>
                                            <option value="VND">VND</option>
                                        </select>
                                        <i className="ph ph-caret-down text-xs text-[#1F1F1F]"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="right flex items-center gap-2">
                                <div className="caption1 text-secondary">Payment:</div>
                                <div className="payment-img">
                                    <img src="/visa.jpg" alt="payment" className="w-9" width={100} height={100} />
                                </div>
                                <div className="payment-img">
                                    <img src="/mastercard.jpg" alt="payment" className="w-9" width={100} height={100} />
                                </div>
                                <div className="payment-img">
                                    <img src="/amex.jpg" alt="payment" className="w-9" width={100} height={100} />
                                </div>
                                <div className="payment-img">
                                    <img src="/paypal.jpg" alt="payment" className="w-9" width={100} height={100} />
                                </div>
                                <div className="payment-img">
                                    <Image src="/diner.jpg" alt="payment" className="w-9" width={100} height={100} />
                                </div>
                                <div className="payment-img">
                                    <Image src="/discover.jpg" alt="payment" className="w-9" width={100} height={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer;
