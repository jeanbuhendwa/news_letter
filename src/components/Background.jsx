import bgImg from "../Assets/img/deskBg.svg";
import mobBg from "../Assets/img/mobBg.svg";

const Background = () => {
  return (
    <div className="">
      <img
        src={bgImg}
        alt="bgImg"
        className="hidden md:block w-full h-full object-cover"
      />
      <img src={mobBg} alt="bgImg" className="block md:hidden" />
    </div>
  );
};

export default Background;
