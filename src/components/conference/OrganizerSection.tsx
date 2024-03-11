import Image from "next/image";
import organizerImg from "../../assets/organizer-1.png";
import {TOrganizer} from "../..";

const OrganizerSection = ({organizers} : {organizers: TOrganizer[]}) => {
  return (
    <>
      {organizers?.map((organizer: TOrganizer) => (
          <div
            key={organizer?.id}
            className="bg-white rounded-lg p-4 w-full flex gap-x-10 items-center"
          >
            <div>
              <Image
                src={organizerImg}
                height={140}
                width={140}
                alt="Organizer"
              />
            </div>
            <div className="w-full">
              <p className="font-bold text-[20px] mb-3">{organizer?.name}</p>
              <p className="text-[#0A142F] text-base leading-5">
                {organizer?.details}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default OrganizerSection;