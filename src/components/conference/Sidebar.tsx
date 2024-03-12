"use client";
import Image from "next/image";
import doubleArrow from "../../assets/double-arrow.svg";
import cn from "../../utils/cn";
import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";

interface ItemType {
  id: number;
  name: string;
}

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [dragState, setDragState] = useState<ItemType[]>([
    { id: 1, name: "Organizer" },
    { id: 2, name: "Speaker" },
    { id: 3, name: "Schedule" },
    { id: 4, name: "Sponsor" },
  ]);

  return (
    <ReactSortable
    list={dragState} 
    setList={setDragState}
    animation={200}
    delay={2}
    >
      {dragState.map((item) => (
        <div key={item.id} className="my-4">
           <div onClick={() => setActiveTab(item.name)} className={cn("sidebar-tab bg-white", {"bg-primary" : activeTab === item.name})}>
            <div className="h-14 w-14 rounded-lg flex justify-center items-center bg-white">
              <Image src={doubleArrow} height={22} width={22} alt="Organizer" />
            </div>
            <p className="text-[20px] font-bold">{item.name}</p>
          </div>
        </div>
      ))}
    </ReactSortable>
  );
};

export default Sidebar;
