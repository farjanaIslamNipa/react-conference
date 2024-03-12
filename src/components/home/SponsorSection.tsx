import Image from "next/image";
import goldSponsor from "../../assets/gold-sponsor.png";
import silverSponsor from "../../assets/silver-sponsor.png";
import bronzeSponsor from "../../assets/bronze-sponsor.png";
import layersLogo from "../../assets/layers.svg";
import sisyphusLogo from "../../assets/sysphus.svg";
import circoolesLogo from "../../assets/circooles.svg";
import catalogLogo from "../../assets/catalog.svg";
import goforeLogo from "../../assets/gofore.svg";
import sisyphusLogo2 from "../../assets/sysphus-2.svg";
import quotientLogo from "../../assets/quotient.svg";
import circoolesLogo2 from "../../assets/circooles-2.svg";

const SponsorSection = async () => {
  return (
    <section className="bg-off-white pt-[60px] lg:pt-[112px] pb-[105px] px-8">
      <h2 className="text-2xl md:text-5xl font-bold text-center">
        Our Sponsor
      </h2>
      <div className="w-full max-w-[1320px] mx-auto flex justify-center">
        <div>
          {/* Gold Sponsor */}
          <div>
            <Image
              src={goldSponsor}
              alt="Gold Sponsor"
              className="my-[35px] mx-auto"
            />
            <div className="grid grid-cols-2 gap-x-[50px] items-center">
              <div className="flex justify-end">
                <Image
                  src={layersLogo}
                  alt="Gold Sponsor"
                  className="h-[32px] lg:h-[65px] w-auto"
                />
              </div>
              <Image
                src={sisyphusLogo}
                alt="Gold Sponsor"
                className="h-[32px] lg:h-[65px] w-auto"
              />
            </div>
          </div>
          {/* Silver Sponsor */}
          <div>
            <Image
              src={silverSponsor}
              alt="Silver Sponsor"
              className="my-[35px] mx-auto"
            />
            <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
              <div className="flex justify-end">
                <Image
                  src={circoolesLogo}
                  alt="Silver Sponsor"
                  className="h-[32px] lg:h-[65px] w-auto"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={catalogLogo}
                  alt="Silver Sponsor"
                  className="h-[32px] lg:h-[65px] w-auto"
                />
              </div>
              <div className="flex justify-center md:justify-start mt-5 col-span-12 md:col-span-1">
                <Image
                  src={goforeLogo}
                  alt="Silver Sponsor"
                  className="h-[25px] lg:h-[48px] w-auto"
                />
              </div>
            </div>
          </div>
          {/* Bronze Sponsor */}
          <div>
            <Image
              src={bronzeSponsor}
              alt="Bronze Sponsor"
              className="my-[35px] mx-auto"
            />
            <div className="grid grid-cols-2 gap-y-5 md:gap-y-0 md:grid-cols-4 gap-x-[40px] items-center">
              <div className="flex justify-end">
                <Image
                  src={sisyphusLogo2}
                  alt="Bronze Sponsor"
                  className="h-[32px] lg:h-[65px] w-auto"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={quotientLogo}
                  alt="Bronze Sponsor"
                  className="h-[32px] lg:h-[66px] w-auto"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={layersLogo}
                  alt="Bronze Sponsor"
                  className="h-[32px] lg:h-[66px] w-auto"
                />
              </div>
              <Image
                src={circoolesLogo2}
                alt="Bronze Sponsor"
                className="h-[32px] lg:h-[66px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
