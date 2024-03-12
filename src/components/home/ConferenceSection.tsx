import {TConference} from "../..";
import ConferenceItem from "./ConferenceItem";
const ConferenceSection = async () => {
  const res = await fetch("https://react-conference-backend-ten.vercel.app/api/v1/conferences");
  const conferenceData = await res.json();

  return (
    <section className="mt-[40px] md:mt-[170px] px-8 pb-[95px]">
      <h2 className="text-2xl md:text-5xl font-bold text-center">
        Conferences
      </h2>
      <div className="mt-[50px] w-full max-w[1088px] mx-auto flex justify-center">
        <div className="space-y-8 md:space-y-[60px]">
          {conferenceData?.data?.length &&
            conferenceData.data.map((conference : TConference, index : number) => (
              <ConferenceItem
                key={conference?.id}
                conference={conference}
                index={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;
