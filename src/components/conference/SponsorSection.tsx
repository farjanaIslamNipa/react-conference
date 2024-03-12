import Image from "next/image";
import {TSponsor} from "../..";


const SponsorSection = ({sponsors} : {sponsors: TSponsor[]}) => {
  return (
    <>
      {sponsors?.map((sponsor: TSponsor) => (
          <div
            key={sponsor?.id}
            className="bg-white rounded-lg p-2 lg:p-4 w-full flex gap-x-3 lg:gap-x-10"
          >
            <div>
              <Image
                src={sponsor?.img}
                height={140}
                width={140}
                alt="Sponsor"
              />
            </div>
            <div className="w-full">
              <p className="font-bold text-base lg:text-[20px] mb-1 lg:mb-3">{sponsor?.name}</p>
              <p className="text-[#0A142F] text-xs lg:text-base leading-5">
                {sponsor?.details}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default SponsorSection;