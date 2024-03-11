import Image from "next/image";
import doubleArrow from "../../assets/double-arrow.svg";
import cn from "../../utils/cn";

const Sidebar = ({activeTab, setActiveTab}) => {
  return (
    <div className="space-y-3">
      <div onClick={() => setActiveTab('organizers')} className={cn("sidebar-tab bg-white", {"bg-primary" : activeTab === 'organizers'})}>
        <div className="h-14 w-14 rounded-lg flex justify-center items-center bg-white">
          <Image src={doubleArrow} height={22} width={22} alt="Organizer" />
        </div>
        <p className="text-[20px] font-bold">Organizer</p>
      </div>
      <div onClick={() => setActiveTab('speakers')} className={cn("sidebar-tab bg-white", {"bg-primary" : activeTab === 'speakers'})}>
        <div className="h-14 w-14 rounded-lg flex justify-center items-center bg-white">
          <Image src={doubleArrow} height={22} width={22} alt="Speaker" />
        </div>
        <p className="text-[20px] font-bold">Speaker</p>
      </div>
      <div onClick={() => setActiveTab('schedules')} className={cn("sidebar-tab bg-white", {"bg-primary" : activeTab === 'schedules'})}>
        <div className="h-14 w-14 rounded-lg flex justify-center items-center bg-white">
          <Image src={doubleArrow} height={22} width={22} alt="Schedule" />
        </div>
        <p className="text-[20px] font-bold">Schedule</p>
      </div>
      <div onClick={() => setActiveTab('sponsors')} className={cn("sidebar-tab bg-white", {"bg-primary" : activeTab === 'sponsors'})}>
        <div className="h-14 w-14 rounded-lg flex justify-center items-center bg-white">
          <Image src={doubleArrow} height={22} width={22} alt="Sponsor" />
        </div>
        <p className="text-[20px] font-bold">Sponsor</p>
      </div>
    </div>
  );
};

export default Sidebar;