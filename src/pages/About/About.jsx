import React from "react";
import "./About.css";
import profilePic from "../../components/resources/Images/about-img.jpg";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profilePic} alt="profile-pic" />
          </div>
          <div className="col-md-6 about-content">
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
              mollitia nobis modi ex esse dolore harum libero voluptatibus
              cumque saepe, possimus corporis atque deleniti officiis itaque
              numquam eos nostrum non officia? Est magnam nesciunt eum ipsam.
              Vitae, ducimus debitis? Ut placeat iste cumque recusandae quam
              nesciunt aperiam. Soluta quae alias provident est error totam
              dolorum dolor autem minima et, ipsam magni a beatae, ut sapiente,
              placeat ipsum quidem dolorem. At suscipit ex error voluptate
              assumenda nam? Eveniet, ex! Accusamus beatae dolores omnis
              voluptates optio architecto dignissimos error eos facere dolore
              odio, minus sapiente corporis magni sit! Autem possimus quasi
              blanditiis nam beatae. Est dolorem, non repellendus accusantium
              maiores amet? Dignissimos doloribus ab, vitae incidunt quas
              tempora nam dicta reprehenderit eos quo exercitationem doloremque,
              recusandae itaque. Suscipit, possimus. Totam eligendi minus
              inventore laborum doloremque? Molestiae, adipisci nulla.
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
