import Image from "next/image";
import {TSponsor} from "../..";
import sponsorImg from "../../assets/sponsor-1.png";


const SponsorSection = ({sponsors} : {sponsors: TSponsor[]}) => {
  return (
    <>
      {sponsors?.map((sponsor: TSponsor) => (
          <div
            key={sponsor?.id}
            className="bg-white rounded-lg p-4 w-full flex gap-x-10 items-center"
          >
            <div>
              <Image
                src={sponsorImg}
                height={140}
                width={140}
                alt="Sponsor"
              />
            </div>
            <div className="w-full">
              <p className="font-bold text-[20px] mb-3">{sponsor?.name}</p>
              <p className="text-[#0A142F] text-base leading-5">
                {sponsor?.details}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default SponsorSection;