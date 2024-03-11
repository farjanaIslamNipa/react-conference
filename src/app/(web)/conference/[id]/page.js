import Image from "next/image";
import organizerImg from '../../../../assets/organizer-1.png'
import doubleArrow from '../../../../assets/double-arrow.svg'

const ConferencePage = async() => {
  return (
    <main className="px-6 py-[100px]">
      <div className="w-full max-w-[1320px]">
        <h2 className="text-2xl md:text-5xl font-bold mb-6">Conference name goes here</h2>
        <p className="text-custom-gray">Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.</p>
      </div>
      <div className="mt-16 grid grid-cols-12 gap-x-[50px]">
        <div className="col-span-4">
          <div className="bg-white hover:bg-primary flex items-center gap-x-[45px] p-2 border rounded-lg cursor-pointer hover:shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px] transition-all ease-out duration-100">
            <div className="h-14 w-14 rounded-lg flex justify-center items-center bg-white">
              <Image src={doubleArrow} height={22} width={22} alt="Organizer" />
            </div>
            <p className="text-[20px] font-bold">Organizer</p>
          </div>
        </div>
        <div className="col-span-8 bg-off-white py-[68px] px-[66px] rounded-lg">
          <div className="bg-white rounded-lg p-4 w-full flex gap-10 items-center">
            <div className="w-[140px] h-[140px]">
              <Image src={organizerImg}  objectFit="cover" alt="Organizer" />
            </div>
            <div>
              <p className="font-bold text-[20px] mb-3">Siddhartha</p>
              <p className="text-custom-gray">Lorem ipsum dolor sit amet, con sec tetur ad.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConferencePage;