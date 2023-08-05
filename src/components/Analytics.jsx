import React from "react";
import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={Laptop}
          alt="Image of a laptop"
          className="w-[500px] mx-auto my-4"
        />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            molestias corporis corrupti molestiae magnam perferendis commodi
            officiis fuga? Magnam perspiciatis omnis iste aspernatur? At dolore
            ullam velit asperiores maiores tempore, soluta necessitatibus odio
            architecto recusandae expedita rem, ex quisquam, consequuntur
            doloremque earum nostrum ratione itaque. Dolorem accusantium,
            necessitatibus quas ex et id eos cumque cum aspernatur neque velit
            exercitationem accusamus? Beatae at itaque quibusdam veritatis nihil
            quae saepe reprehenderit fugit iusto sunt cupiditate porro quo
            voluptatem in eius, nemo eligendi dolores dolorem placeat vel.
            Tempora officia officiis veritatis facere deleniti! A quisquam
            explicabo eveniet veritatis velit iusto exercitationem amet numquam.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
