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
          className="bg-white rounded-lg p-4 w-full flex gap-x-10 items-center"
        >
          <div>
            <Image src={speakerImg} height={140} width={140} alt="Speaker" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <p className="font-bold text-[20px] mb-4">{speaker?.name}</p>
              <div className="flex items-center gap-4">
                <a href="#">
                  <Image
                    src={twitterIcon}
                    height={20}
                    width={20}
                    alt="Twitter"
                  />
                </a>
                <a href="#">
                  <Image
                    src={linkedInIcon}
                    height={20}
                    width={20}
                    alt="Linkedin"
                  />
                </a>
                <a href="#">
                  <Image src={webIcon} height={20} width={20} alt="Website" />
                </a>
                <a href="#">
                  <Image src={githubIcon} height={20} width={20} alt="github" />
                </a>
              </div>
            </div>
            <p className="text-[#0A142F] text-base leading-5">
              {speaker?.details}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SpeakerSection;
