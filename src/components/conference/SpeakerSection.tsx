import Image from "next/image";
import { TSpeaker } from "../..";
import speakerImg from "../../assets/speaker-1.png";
import twitterIcon from "../../assets/twitter-gray.svg";
import linkedInIcon from "../../assets/linkedin-gray.svg";
import webIcon from "../../assets/web-gray.svg";
import githubIcon from "../../assets/github-gray.svg";

const SpeakerSection = ({ speakers }: { speakers: TSpeaker[] }) => {
  return (
    <>
      {speakers?.map((speaker: TSpeaker) => (
        <div
          key={speaker?.id}
          className="bg-white rounded-lg p-2 lg:p-4 w-full flex gap-x-3 lg:gap-x-10"
        >
          <div>
            <Image src={speaker?.img} height={140} width={140} alt="Speaker" />
          </div>
          <div className="w-full">
            <div className="block md:flex items-center justify-between">
              <p className="font-bold text-base lg:text-[20px] mb-1 lg:mb-3">{speaker?.name}</p>
              <div className="flex items-center gap-4 my-2 md:my-0">
                <a href="#">
                  <Image
                    src={twitterIcon}
                    className="h-4 md:h-5"
                    alt="Twitter"
                  />
                </a>
                <a href="#">
                  <Image
                    src={linkedInIcon}
                    className="h-4 md:h-5"
                    alt="Linkedin"
                  />
                </a>
                <a href="#">
                  <Image src={webIcon} className="h-4 md:h-5" alt="Website" />
                </a>
                <a href="#">
                  <Image src={githubIcon} className="h-4 md:h-5" alt="github" />
                </a>
              </div>
            </div>
            <p className="text-[#0A142F] text-xs lg:text-base leading-5">
              {speaker?.details}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SpeakerSection;
