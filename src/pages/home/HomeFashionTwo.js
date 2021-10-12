import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
// import BannerOne from "../../wrappers/banner/BannerOne";
// import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderNine from "../../wrappers/hero-slider/HeroSliderNine";
// import TabProductFive from "../../wrappers/product/TabProductFive";

const HomeFashionTwo = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>ChewyBites </title>
        <meta
          name="description"
          // content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
             {/* <div className="container mt-5">
        <div className=" text-center">
           <h1>Welcome To ChewyBites</h1>
           <br/>
        </div>
        </div> */}
        {/* hero slider */}
        <HeroSliderNine spaceLeftClass="ml-70" spaceRightClass="mr-70" />
        <div className="container mt-5">
        <div className=" text-center">
          <p>
          If you love to cook and earn – We are here for you with a low cost Idea and easy to implement. <b>Its Time to be your own boss .</b> 

We offer training, platform, market, sourcing and every thing which you require with a problem-solving proposition and a well thought implementation plan to achieve your vision and  Creating lifechanging experiences. 


Different people have unique strengths and weaknesses, hence, it’s critical to always have an eye out for smart people when constructing a team.

            </p>
            </div>
            </div>
        {/* banner */}
        {/* <BannerOne spaceTopClass="pt-60" spaceBottomClass="pb-65" /> */}
        {/* tab product */}
        {/* <TabProductFive spaceBottomClass="pb-60" category="accessories" /> */}
        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionTwo;
