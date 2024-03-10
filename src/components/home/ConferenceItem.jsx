/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import stepIcon from "../../assets/step-icon.svg";

const ConferenceItem = ({ conference, index }) => {
  return (
    <div className="flex items-start">
      <div className={`${(index % 2 === 0) ? 'order-1' : 'order-3'} bg-off-white shadow-[rgba(0,_0,_0,_0.06)_0px_4px_10px_-1px,_rgba(0,_0,_0,_0.06)_0px_2px_4px_-1px] hover:shadow-[rgba(0,_0,_0,_0.1)_0px_4px_15px_-1px,_rgba(0,_0,_0,_0.06)_0px_2px_4px_-1px] border-t-4 border-light-gray hover:border-primary rounded-[8px] py-7 px-[18px] min-w-[480px] transition-all duration-200 ease-out`}>
        <div className="flex gap-[18px]">
          <div className="bg-primary h-4 w-4 rounded-full flex justify-center items-center">
            <div className="bg-white rounded-full h-[6px] w-[6px]"></div>
          </div>
          <div>
            <p className="text-secondary text-lg font-medium leading-[15px]">
              {conference?.title}
            </p>
            <p className="text-custom-gray text-sm mt-[10px]">
              {conference?.subtitle}
            </p>
          </div>
        </div>
      </div>
      <div className="order-2 mx-[42px]">
        <Image src={stepIcon} alt="Step" className="h-12 w-12" />
      </div>
      <div className={`${(index % 2 === 0) ? 'order-3 justify-start' : 'order-1 justify-end'} min-w-[480px] flex`}>
        <p className="text-custom-gray text-sm">{conference?.date}</p>
      </div>
    </div>
  );
};

export default ConferenceItem;
