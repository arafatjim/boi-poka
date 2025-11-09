import React from "react";
import bannerImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-72 my-4 rounded-2xl">
      <div className="hero-content flex flex-col-reverse mx-auto p-2 my-10 lg:flex-row justify-center">
        <div className="mx-4">
          <h1 className="text-3xl font-bold">Box Office News!</h1>
          <p className="py-6 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-success">Get Started</button>
        </div>
        <img
          src={bannerImg}
          className="max-w-sm mx-auto rounded-lg shadow-2xl lg:max-w-7xl"
        />
      </div>
    </div>
  );
};

export default Banner;
