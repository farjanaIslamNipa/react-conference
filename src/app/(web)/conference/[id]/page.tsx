import { TConference } from "../../../..";
import ConferenceDetailSection from "../../../../components/conference/ConferenceDetailSection";


interface TParams {
  params: {
    id: string;
  };
}
export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:5000/conferences`);
  const conference = await res.json();

  return conference.slice(0, 3).map((conference: TConference) => ({
    id: String(conference.id),
  }));
};

const ConferencePage = async ({ params }: TParams) => {
  const res = await fetch(`http://localhost:5000/conferences/${params.id}`);
  const conference = await res.json();

  return (
    <main className="px-6 py-[100px]">
      <div className="w-full max-w-[1320px]">
        <h2 className="text-2xl md:text-5xl font-bold mb-6">
          {conference?.title}
        </h2>
        <p className="text-custom-gray">{conference?.subtitle}</p>
      </div>
      <ConferenceDetailSection conference={conference} />
    </main>
  );
};

export default ConferencePage;
