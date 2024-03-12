"use client"
import {useState} from "react";
import {TConference} from "../..";
import OrganizerSection from "./OrganizerSection";
import ScheduleSection from "./ScheduleSection";
import Sidebar from "./Sidebar";
import SpeakerSection from "./SpeakerSection";
import SponsorSection from "./SponsorSection";


const ConferenceDetailSection = ({conference} : {conference: TConference}) => {
  const [activeTab, setActiveTab] = useState('Organizer')
  return (
    <div className="mt-16 grid grid-cols-12 gap-6 lg:gap-10 xl:gap-x-[50px]">
    <div className="col-span-4">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
    <div className="col-span-8 bg-off-white py-8 xl:py-[68px] px-8 xl:px-[66px] rounded-lg space-y-6">
      {
        activeTab === 'Organizer' && <OrganizerSection organizers={conference?.organizers} />
      }
      {
        activeTab === 'Speaker' && <SpeakerSection speakers={conference?.speakers} />
      }
      {
        activeTab === 'Schedule' && <ScheduleSection schedules={conference?.schedules} />
      }
      
      {
        activeTab === 'Sponsor' && <SponsorSection sponsors={conference?.sponsors} />
      }
    </div>
  </div>
  );
};

export default ConferenceDetailSection;