import { TSchedule } from "../..";

const ScheduleSection = ({ schedules }: { schedules: TSchedule[] }) => {
  return (
    <>
      {schedules?.map((schedule: TSchedule) => (
        <div
          key={schedule?.id}
          className="bg-white rounded-lg p-4 w-full flex justify-between"
        >
          <div>
            <p className="text-xl font-bold mb-4">{schedule?.date}</p>
            <div className="text-[#0A142F] space-y-4">
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
          <div className="pr-8">{schedule?.day}</div>
        </div>
      ))}
    </>
  );
};

export default ScheduleSection;
