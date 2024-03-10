/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image";
import stepIcon from "../../assets/step-icon.svg";
import {useRouter} from "next/navigation";

const ConferenceItem = ({ conference, index }) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/conference/${conference?.id}`)} className="flex gap-3 md:gap-0 md:block">
      <div className="block md:hidden mt-8">
          <Image src={stepIcon} alt="Step" className="h-12 w-12" />
          <div className="flex justify-center h-full mt-[5px]">
            <div
              className={`${
                index === 4 ? "hidden" : "block"
              } w-[2px] bg-light-gray h-full`}
            ></div>
          </div>
        </div>
      <div className="flex flex-col md:flex-row items-stretch cursor-pointer">
        <div
          className={`${
            index % 2 === 0 ? "order-2 md:order-1" : "order-2 md:order-3"
          } bg-off-white shadow-[rgba(0,_0,_0,_0.06)_0px_4px_10px_-1px,_rgba(0,_0,_0,_0.06)_0px_2px_4px_-1px] hover:shadow-[rgba(0,_0,_0,_0.1)_0px_4px_15px_-1px,_rgba(0,_0,_0,_0.06)_0px_2px_4px_-1px] border-t-4 border-light-gray hover:border-primary rounded-[8px] py-7 px-[18px] w-full md:w-[280px] lg:w-[400px] xl:w-[480px] transition-all duration-200 ease-out`}
        >
          <div className="flex gap-[18px] md:gap-2 lg:gap-[18px]">
            <div>
              <div className="bg-primary h-4 w-4 rounded-full flex justify-center items-center">
                <div className="bg-white rounded-full h-[6px] w-[6px]"></div>
              </div>
            </div>
            <div>
              <p className="text-secondary text-lg font-medium leading-[20px] xl:leading-[15px]">
                {conference?.title}
              </p>
              <p className="text-custom-gray text-sm mt-[10px]">
                {conference?.subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="order-2 mx-[42px] hidden md:block">
          <Image src={stepIcon} alt="Step" className="h-12 w-12" />
          <div className="flex justify-center h-full mt-[5px]">
            <div
              className={`${
                index === 4 ? "hidden" : "block"
              } w-[2px] bg-light-gray h-full`}
            ></div>
          </div>
        </div>
        <div
          className={`${
            index % 2 === 0 ? "order-1 md:order-3 justify-start" : "order-1 md:order-1 justify-start md:justify-end"
          } w-full md:w-[280px] lg:w-[400px] xl:w-[480px] flex`}
        >
          <p className="text-custom-gray text-sm mb-3 md:mb-0">{conference?.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ConferenceItem;
