import React from "react";
import NavbarSec from "../components/NavbarSec";
import Footer from "../components/Footer";
import Aboutdoc from "../assets/aboutpeople.svg";

const AboutUs = () => {
  return (
    <div className="bg-[#b3e9f3ce] h-auto">
      <NavbarSec />
      <p className="text-cyan-500 font-semibold text-4xl p-6">About Us</p>
      <div className="flex pb-4">
        <p className="w-[50%] p-6 text-xl text-white font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          soluta unde non aperiam aut quaerat. Aliquam quo quidem beatae quos
          quisquam. Ipsam, rem consequatur. Magnam vel cupiditate enim natus
          suscipit. Doloremque voluptates neque in vitae facere temporibus optio
          voluptate nulla repellat at dolores odio fuga, labore iste ab hic
          illum exercitationem fugiat debitis sequi beatae dolore delectus
          veritatis id. Magnam. Recusandae sunt mollitia error tempore eligendi
          dolorem soluta minima provident nobis veniam explicabo facilis
          temporibus, repellat dolores eos libero exercitationem eum illum animi
          quasi tempora. Aliquam blanditiis praesentium facere ipsum! Facere
          exercitationem repellendus impedit magnam numquam deserunt quis
          voluptates, illo, vero blanditiis veniam quibusdam pariatur voluptate
          quasi assumenda quas molestiae unde neque mollitia eum fuga accusamus.
          Dolores tempore sed eos!
        </p>
        <img src={Aboutdoc} alt="about" />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
