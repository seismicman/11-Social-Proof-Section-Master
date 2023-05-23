import React from "react";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import image_colton from "../assets/images/image-colton.jpg";
import image_irene from "../assets/images/image-irene.jpg";
import image_anne from "../assets/images/image-anne.jpg";

const Master = () => {
  return (
    <main className="master">
      <section className="above">
        <article className="overview">
          <h1 className="title">10,000+ of our users love our products.</h1>
          <p className="description">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </article>
        <article className="ratings">
          <Ratings message="Rated 5 Stars in Reviews" />
          <Ratings message="Rated 5 Stars in Report Guru" />
          <Ratings message="Rated 5 Stars in BestTech" />
        </article>
      </section>
      <article className="reviews">
        <Reviews
          photo={image_colton}
          name="Colton Smith"
          position="Verified Buyer"
          comment="We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.Excellent!"
        />
        <Reviews
          photo={image_irene}
          name="Irene Roberts"
          position="Verified Buyer"
          comment="Customer service is always excellent and very quick turn around.Completely delighted with the simplicity of the purchase and the speed of delivery."
        />
        <Reviews
          photo={image_anne}
          name="Anne Wallace"
          position="Verified Buyer"
          comment="Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"
        />
      </article>
    </main>
  );
};

export default Master;
