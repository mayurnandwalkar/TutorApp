import React from 'react'
import { BiArrowFromRight, BiArrowToRight, BiCalendar } from 'react-icons/bi'
import Blog1 from 'assets/images/blog/blog1.jpg'
import Blog2 from "assets/images/blog/blog2.jpg"
import Blog3 from "assets/images/blog/blog3.jpg"
import Blog4 from "assets/images/blog/blog4.jpg"
import Blog5 from "assets/images/blog/blog5.jpg"
import Blog6 from "assets/images/blog/blog6.jpg"
import Blog7 from "assets/images/blog/blog7.jpg"
import Blog8 from "assets/images/blog/blog8.jpg"
import Blog9 from "assets/images/blog/blog9.jpg"
import User1 from 'assets/images/user1.jpg'
import Image from 'next/image'

const BlogsSection = () => {
    return (
        <>
            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-box">
                                <div className="post-image">
                                    <a className="d-block" href="#">
                                        <Image src={Blog1} alt="image" />
                                    </a>
                                </div>
                                <div className="post-content"><a className="category" href="#">Education</a>
                                    <h3>
                                        <a href="#">It’s Time To Think Differently About Homeschooling</a>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <Image src={User1} className="rounded-circle" alt="image" />
                                                <span>Lorem Ipsum</span>
                                            </div>
                                        </li>
                                        <li> <BiCalendar /> April 30, 2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-box">
                                <div className="post-image">
                                    <a className="d-block" href="#">
                                        <Image src={Blog2} alt="image" />
                                    </a>
                                </div>
                                <div className="post-content"><a className="category" href="#">Education</a>
                                    <h3>
                                        <a href="#">It’s Time To Think Differently About Homeschooling</a>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <Image src={User1} className="rounded-circle" alt="image" />
                                                <span>Lorem Ipsum</span>
                                            </div>
                                        </li>
                                        <li> <BiCalendar /> April 30, 2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-box">
                                <div className="post-image">
                                    <a className="d-block" href="#">
                                        <Image src={Blog3} alt="image" />
                                    </a>
                                </div>
                                <div className="post-content"><a className="category" href="#">Education</a>
                                    <h3>
                                        <a href="#">It’s Time To Think Differently About Homeschooling</a>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <Image src={User1} className="rounded-circle" alt="image" />
                                                <span>Lorem Ipsum</span>
                                            </div>
                                        </li>
                                        <li> <BiCalendar /> April 30, 2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-box">
                                <div className="post-image">
                                    <a className="d-block" href="#">
                                        <Image src={Blog4} alt="image" />
                                    </a>
                                </div>
                                <div className="post-content"><a className="category" href="#">Education</a>
                                    <h3>
                                        <a href="#">It’s Time To Think Differently About Homeschooling</a>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <Image src="assets/images/user1.jpg"
                                                    className="rounded-circle" alt="image" />
                                                <span>Lorem Ipsum</span>
                                            </div>
                                        </li>
                                        <li> <BiCalendar /> April 30, 2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-box">
                                <div className="post-image">
                                    <a className="d-block" href="#">
                                        <Image src={Blog5} alt="image" />
                                    </a>
                                </div>
                                <div className="post-content"><a className="category" href="#">Education</a>
                                    <h3>
                                        <a href="#">It’s Time To Think Differently About Homeschooling</a>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <Image src={User1}
                                                    className="rounded-circle" alt="image" />
                                                <span>Lorem Ipsum</span>
                                            </div>
                                        </li>
                                        <li> <BiCalendar /> April 30, 2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-box">
                                <div className="post-image">
                                    <a className="d-block" href="#">
                                        <Image src={Blog6} alt="image" />
                                    </a>
                                </div>
                                <div className="post-content"><a className="category" href="#">Education</a>
                                    <h3>
                                        <a href="#">It’s Time To Think Differently About Homeschooling</a>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <Image src="assets/images/user1.jpg"
                                                    className="rounded-circle" alt="image" />
                                                <span>Lorem Ipsum</span>
                                            </div>
                                        </li>
                                        <li> <BiCalendar /> April 30, 2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-box">
                                <div className="post-image">
                                    <a className="d-block" href="#">
                                        <Image src={Blog7} alt="image" />
                                    </a>
                                </div>
                                <div className="post-content"><a className="category" href="#">Education</a>
                                    <h3>
                                        <a href="#">It’s Time To Think Differently About Homeschooling</a>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <Image src={User1}
                                                    className="rounded-circle" alt="image" />
                                                <span>Lorem Ipsum</span>
                                            </div>
                                        </li>
                                        <li> <BiCalendar /> April 30, 2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-box">
                                <div className="post-image">
                                    <a className="d-block" href="#">
                                        <Image src={Blog8} alt="image" />
                                    </a>
                                </div>
                                <div className="post-content"><a className="category" href="#">Education</a>
                                    <h3>
                                        <a href="#">It’s Time To Think Differently About Homeschooling</a>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <Image src={User1}
                                                    className="rounded-circle" alt="image" />
                                                <span>Lorem Ipsum</span>
                                            </div>
                                        </li>
                                        <li> <BiCalendar /> April 30, 2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-box">
                                <div className="post-image">
                                    <a className="d-block" href="#">
                                        <Image src={Blog9} alt="image" />
                                    </a>
                                </div>
                                <div className="post-content"><a className="category" href="#">Education</a>
                                    <h3>
                                        <a href="#">It’s Time To Think Differently About Homeschooling</a>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <Image src={User1}
                                                    className="rounded-circle" alt="image" />
                                                <span>Lorem Ipsum</span>
                                            </div>
                                        </li>
                                        <li> <BiCalendar /> April 30, 2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="prev page-numbers">
                                    <BiArrowFromRight />
                                </a>
                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <BiArrowToRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogsSection