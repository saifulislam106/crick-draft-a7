import bannerImg from "../../assets/banner-main.png";
import bgImg from "../../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div
      className="hero bg-cover bg-center bg-black container mx-auto relative "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
  

      <div className="hero-content text-white max-w-4xl text-center z-10 flex py-12 flex-col items-center gap-8">
        <div className="">
          <img
            src={bannerImg}
            className="rounded-lg shadow-2xl"
            alt="Banner"
          />
        </div>
        <div className="">
          <h1 className="mb-5 text-4xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mb-5 text-gray-400">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="btn btn-primary">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
