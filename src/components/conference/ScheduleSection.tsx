import { TSchedule } from "../..";

const ScheduleSection = ({ schedules }: { schedules: TSchedule[] }) => {
  return (
    <>
      {schedules?.map((schedule: TSchedule) => (
        <div
          key={schedule?.id}
          className="bg-white rounded-lg p-5 lg:p-10"
        >
            <div className="flex justify-between items-center mb-4">
              <p className="text-base md:text-xl font-bold">{schedule?.date}</p>
              <div className="text-xs md:text-base pr-0 lg:pr-8">{schedule?.day}</div>
            </div>
            <div className="text-[#0A142F] text-sm lg:text-base space-y-4">
              <div>
                <p>Duration: {schedule?.registrationDuration}</p>
                <div className="flex items-center gap-2 pl-2">
                  <div className="h-2 w-2 rounded-full bg-[#0A142F]"></div>
                  <p>Registration</p>
                </div>
              </div>
              <div>
                <p>Duration: {schedule?.systemDuration}</p>
                <div className="flex items-center gap-2 pl-2">
                  <div className="h-2 w-2 rounded-full bg-[#0A142F]"></div>
                  <p>Design systems for beginners</p>
                </div>
              </div>
              <div>
                <p>Duration: {schedule?.lunchDuration}</p>
                <div className="flex items-center gap-2 pl-2">
                  <div className="h-2 w-2 rounded-full bg-[#0A142F]"></div>
                  <p>Lunch</p>
                </div>
              </div>
              <div>
                <p>Duration: {schedule?.breakDuration}</p>
                <div className="flex items-center gap-2 pl-2">
                  <div className="h-2 w-2 rounded-full bg-[#0A142F]"></div>
                  <p>Break</p>
                </div>
              </div>
            </div>
        </div>
      ))}
    </>
  );
};

export default ScheduleSection;
