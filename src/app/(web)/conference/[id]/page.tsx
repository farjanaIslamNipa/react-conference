import { TConference } from "../../../..";
import ConferenceDetailSection from "../../../../components/conference/ConferenceDetailSection";


interface TParams {
  params: {
    id: string;
  };
}
export const generateStaticParams = async () => {
  const res = await fetch('https://react-conference-backend-ten.vercel.app/api/v1/conferences');
  const conference = await res.json();

  return conference?.data?.slice(0, 3).map((conference: TConference) => ({
    id: String(conference.id),
  }));
};

const ConferencePage = async ({ params }: TParams) => {

  const res = await fetch(`https://react-conference-backend-ten.vercel.app/api/v1/conferences/${params.id}`);
  const conference = await res.json();

  return (
    <main className="px-6 pt-[55px] lg:pt-[100px] pb-[90px] lg:pb-[100px]">
      <div className="w-full max-w-[1320px] mx-auto">
        <h2 className="text-2xl lg:text-5xl font-bold mb-4 lg:mb-6">
          {conference?.data?.title}
        </h2>
        <p className="text-custom-gray">{conference?.data?.subtitle}</p>
        <ConferenceDetailSection conference={conference?.data} />
      </div>
    </main>
  );
};

export default ConferencePage;
