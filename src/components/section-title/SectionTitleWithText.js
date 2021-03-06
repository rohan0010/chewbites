import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
    
          <br/>
          <h1>Idea</h1>
          <br/>
    
         
       <p>
         
         

       The food industry has become very competitive as a lot of people have started doing this business. But, still if you maintain the quality, taste and hygiene, you can make good sums of money from this business.
Health, peace of mind and multiple income choices with own business has become the challenge for every age group. Losing jobs, hair cut, accumulated work pressure and sword of insecurity is causing panic in our society.
This pandemic has forced every reasonable person to think for better options with health as priority.
CHEWY BITES, has come up with a unique idea with low to negligible investment for every age group with opportunity to enter into the food business wherein every male/female will be working from home and will be at liberty to pursue their hobby of cooking with their unique food recipes.
We will connect them through digital application and will provide mobile infrastructure facility to reach to the consumers. Even our business associates will be provided each individual big data base covering population in and around their area, their food preferences and their spending capacity which will be generated through extensive market survey.
Every business associate with four-wheeler or even two wheeler will be provided with “ON WHEEL RASOI” where they will use our infrastructure and to serve pure, hygienic, nutritious and home made tasty food at a reasonable price to reach to the common person and margins will be shared.
They will be at liberty to work in their flexi hours and earn extra money.
Our motive is to create options in one’s life and help them to utilize their un-productive time and turn being own boss. 

</p>
<br/>
          <h1>Opportunity </h1>

          <br/>
          <p>This global pandemic has triggered new idea and concepts into the mind of the people to go for small and medium size investment business opportunities with unique idea and concept to involve community at large and create small pocket of revenue for each contributor.
CHWEY BITES has emerged with an idea to reach to the consumers with the food prepared by our house wives, medium to old age grannies and everyone sitting at home but passionate about cooking and willing to reach to the consumers with their recipes hand written in old diaries of their good times.
Idea is not only to help our senior citizens and even youngsters to peruse their hobbies in cooking but also make it a plate form where they can earn money by their participation from their houses. It’s a WIN- WIN offer wherein they will invest their time and efforts and in turn will be rewarded with monetary benefits.
</p>
<br/>
          <h1>How we differ  </h1>

          <br/>
          <p>CHWEY BITES has come up with a unique idea where members of each age group sitting ideal or with no earning options at home will be connected through digital application and their food expertise will be explored for public at large.
Our startup’ offers well equipped <b>“Desi Mobile Rasoi”</b> with old time cooking technology where ethnic Indian food will be served in flexi hours.

Once the popularity is gained and concept is well established with demand, we shall design mobile catering services for happy occasions and will also make bulk supplies to the offices and industries assuring best quality with a very affordable price band.

All our “ Partners in Business” with their unique food recipe(s) will be popularized through all social media plate forms and timely a bulletin will be digitally released where in public at large will be offered online food courses by our esteemed partners. 

We have a wide and clear concept to reach to each house member who is willing to participate with us in our business module and give them a best profit sharing.

All initial investment will b done by us and a very nominal commitment charges will be charged with each participant.

Anyone offering their vehicles will be paid extra for their capital investment.

</p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
