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
                  <div
                    className={`grid grid-cols-12 items-center justify-center space-y-8 lg:space-y-0 ${
                      sponsor.id === 2 ? "gap-x-0" : "gap-x-10"
                    }`}
                  >
                    {sponsor?.goldenSponsors?.map((item) => (
                      <div key={item?.id} className="col-span-6">
                        <div
                          className={`flex ${
                            item?.id === 1 ? "justify-start md:justify-end" : "justify-start"
                          }`}
                        >
                          <img
                            src={item?.logo}
                            alt="Sponsor Logo"
                            className="w-auto h-auto"
                          />
                        </div>
                      </div>
                    ))}
                    {sponsor?.silverSponsors?.map((item) => (
                      <div key={item?.id} className="col-span-6 lg:col-span-4">
                        <div
                          className={`flex ${
                            item?.id === 1
                              ? "justify-end"
                              : item?.id === 2
                              ? "justify-center"
                              : "justify-end lg:justify-start"
                          }`}
                        >
                          <img
                            src={item?.logo}
                            alt="Sponsor Logo"
                            className="w-auto h-auto"
                          />
                        </div>
                      </div>
                    ))}
                    {sponsor?.bronzeSponsors?.map((item) => (
                      <div key={item?.id} className="col-span-6 lg:col-span-3">
                        <div
                          className={`flex ${
                            item?.id === 1
                              ? "justify-end"
                              : item?.id === 2 || item?.id === 3
                              ? "justify-center"
                              : "justify-start"
                          }`}
                        >
                          <img
                            src={item?.logo}
                            alt="Sponsor Logo"
                            className="w-auto h-auto"
                          />
                        </div>
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
