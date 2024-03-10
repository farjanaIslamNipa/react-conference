import sketch from "../../assets/sketch.svg";
import curve from "../../assets/curve.svg";
import smallDeviceCurve from "../../assets/small-device-curve.svg";
import headerRightImg from "../../assets/header-right.png";
import headerLeftImg from "../../assets/header-left.png";
import topArrow from "../../assets/arrow-top.svg";
import bottomShape from "../../assets/header-bottom-shape.svg";
import bottomImg from "../../assets/bottom-img.png";
import star from "../../assets/star.svg";
import scrollIcon from "../../assets/scroll-icon.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative px-6 pt-[70px] md:pt-[100px] lg:pt-[120px] xl:pt-[150px] 2xl:pt-[170px]">
      <div className="max-w-[600px] lg:max-w-[1550px] mx-auto">
        <div className="absolute left-[37%] md:left-[52%] lg:left-[27%] xl:left-[28.5%] 2xl:left-[29.5%] top-[45px] md:top-[40px] xl:top-[95px] 2xl:top-[120px]">
          <Image src={sketch} alt="Sketch" className="h-10 md:h-[82px]" />
        </div>
        <div className="absolute left-[10%] md:left-[70%] lg:left-[32.5%] xl:left-[38%] 2xl:left-[38.5%] top-[65px] md:top-[90px] lg:top-[110px] xl:top-[90px] 2xl:top-[150px]">
          <Image src={curve} alt="Curve" className="md:h-auto lg:h-[500px] xl:h-[830px] hidden lg:block" />
          <Image src={smallDeviceCurve} alt="Curve" className="md:h-auto lg:h-[500px] xl:h-[830px] block md:hidden" />
        </div>
        <div className="grid grid-cols-12 gap-x-0 md:gap-x-4">
          <div className="col-span-12 lg:col-span-7 z-50">
            <div className="flex justify-center md:justify-end">
              <div>
                <h1 className="hero-title">React</h1>
                <h1 className="hero-title">Conference</h1>
              </div>
            </div>
            <div className="mt-[40px] md:mt-[60px] flex">
              <div className="hidden md:block">
                <Image src={headerLeftImg} alt="Banner" />
              </div>
              <div className="max-w-[480px] 2xl:max-w-[515px] pl-5">
                <p>
                  Lorem uis diam turpis quam id fermentum.In quis diam turpis
                  quam id fermentum..id fermentum.In quis diam turpis quam id
                  fermentum.
                </p>
                <div className="mt-[35px] md:mt-20 flex justify-center md:justify-start">
                  <button className="bg-primary rounded-full w-[177px] md:w-[293px] h-[54px] md:h-[60px] flex justify-center items-center gap-3">
                    <span className="text-lg font-medium text-[#0A142F]">
                      Buy Tickets
                    </span>
                    <Image src={topArrow} alt="Buy tickets" />
                  </button>
                </div>
                <div className="hidden md:pr-14 lg:pr-20 mt-20 lg:flex flex-col items-end">
                  <p className="pt-[60px] text-sm -rotate-90">Scroll Down</p>
                  <Image className="mt-1" src={scrollIcon} alt="Scroll Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 z-50 place-self-end">
            <div className="w-full flex justify-center lg:justify-end mt-8 lg:mt-0 pl-0 md:pl-10 relative">
              <Image src={headerRightImg} alt="Banner" />
              <Image src={star} alt="star" className="h-[94px] md:h-[130px]  w-[94px] md:w-[130px] absolute left-[73%]  md:left-[-20px] bottom-[-50px] md:bottom-[-68px]" />
            </div>
          </div>
        </div>
        <div className="flex md:hidden justify-between mt-16 pb-[68px]">
          <Image src={bottomImg} alt="Banner" />
          <Image src={bottomShape} alt="Shape" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
