"use client";
import { TConference } from "../..";
import OrganizerSection from "./OrganizerSection";
import ScheduleSection from "./ScheduleSection";
import SpeakerSection from "./SpeakerSection";
import SponsorSection from "./SponsorSection";
import Image from "next/image";
import doubleArrow from "../../assets/double-arrow.svg";
import cn from "../../utils/cn";
import React, { FC, ReactNode, useState } from "react";
import { ReactSortable } from "react-sortablejs";

interface ItemType {
  id: number;
  name: string;
  element: ReactNode;
}

const ConferenceDetailSection = ({
  conference,
}: {
  conference: TConference;
}) => {
  const [activeTab, setActiveTab] = useState("Organizer");
  const [dragState, setDragState] = useState<ItemType[]>([
    {
      id: 1,
      name: "Organizer",
      element: <OrganizerSection organizers={conference?.organizers} />,
    },
    {
      id: 2,
      name: "Speaker",
      element: <SpeakerSection speakers={conference?.speakers} />,
    },
    { 
      id: 3,
      name: "Schedule", 
      element:<ScheduleSection schedules={conference?.schedules} />  
    },
    { 
      id: 4, 
      name: "Sponsor", 
      element:<SponsorSection sponsors={conference?.sponsors} />
    },
  ]);

  return (
    <div className="mt-10 relative min-h-[620px]">
      <ReactSortable
        list={dragState}
        setList={setDragState}
        animation={200}
        delay={2}
      >
        {dragState.map((item) => (
          <div key={item.id} className="my-4 ">
            <div className="w-full md:w-[25%]">
              <div
                onClick={() => setActiveTab(item.name)}
                className={cn("sidebar-tab bg-white", {
                  "bg-primary": activeTab === item.name,
                })}
              >
                <div className="h-14 w-14 rounded-lg flex justify-center items-center bg-white">
                  <Image
                    src={doubleArrow}
                    height={22}
                    width={22}
                    alt="Organizer"
                  />
                </div>
                <p className="text-[20px] font-bold">{item.name}</p>
              </div>
            </div>
            {
              <div className="w-full md:w-[70%] ml-auto static md:absolute top-0 right-0">
                {activeTab === item?.name && (
                  <div className=" bg-off-white py-5 lg:py-8 xl:py-[68px] px-5 lg:px-8 xl:px-[66px] rounded-lg space-y-6">
                    {item.element}
                  </div>
                )}
              </div>
            }
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default ConferenceDetailSection;
