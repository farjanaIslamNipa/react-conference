import Image from "next/image";

const SponsorSection = async () => {
  const res = await fetch("http://localhost:5000/sponsors");
  const sponsorData = await res.json();

  return (
    <section className="bg-off-white pt-[60px] lg:pt-[112px] pb-[105px] px-8">
      <h2 className="text-2xl md:text-5xl font-bold text-center">
        Our Sponsor
      </h2>
      <div className="w-full max-w-[1320px] mx-auto flex justify-center">
        <div>
          {sponsorData?.length &&
            sponsorData.map((sponsor) => (
              <div key={sponsor?.id}>
                <div>
                  <img
                    src={sponsor?.titleImg}
                    alt="Sponsor"
                    className="h-[19px] w-auto mx-auto my-[40px]"
                  />
                  <div className="flex flex-wrap items-center justify-center gap-x-[55px] space-y-8 lg:space-y-0">
                    {sponsor?.sponsorCategory?.map((item) => (
                      <div key={item?.id} className="">
                        <img
                          src={item?.logo}
                          alt="Sponsor Logo"
                          className="w-auto h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
