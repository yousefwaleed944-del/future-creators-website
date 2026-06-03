import realExperienceImg from "../../assets/images/yo.png";
import whyFccImg from "../../assets/images/q.jpg";
import projectNew from "../../assets/images/f.jpg";

const experiencePoints = [
  "Our strength is anchored in real-world execution, powered by our sister companies.",
  "We understand operational complexity firsthand.",
  "We design systems that reflect real workflows.",
  "We deliver solutions that work on the ground, not just on paper.",
];

const edgePoints = [
  "Deep specialization in construction and contracting operations.",
  "Advanced HR outsourcing solutions supporting 3,000+ employees.",
  "Ability to align systems with real operational workflows.",
];

function Projects() {
  return (
    <section
      id="real-experience"
      className="bg-[#f4f7fb] px-6 py-24 text-[#111827] lg:px-10"
    >
      <div className="mx-auto max-w-7xl space-y-28">

        {/* FIRST SECTION */}
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
          
          {/* TEXT */}
          <div>
            <p className="mb-6 text-[12px] font-extrabold uppercase tracking-[0.45em] text-[#8266ff]">
              Powered by Real Experience
            </p>

            <h2 className="max-w-[560px] text-[38px] font-black leading-[1.08] tracking-[-0.04em] text-[#111827] md:text-[50px]">
              Practical systems shaped by real business operations.
            </h2>

            <div className="mt-8 space-y-4">
              {experiencePoints.map((item, index) => (
                <div
                  key={index}
                  className="flex min-h-[64px] items-center gap-4 rounded-xl border border-[#d9dee8] bg-white px-5 py-4 shadow-sm"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#8266ff]" />

                  <p className="text-[13px] leading-6 text-[#64748b]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-[24px] border-[10px] border-white bg-white shadow-[0_28px_60px_rgba(15,23,42,0.22)]">
            <img
              src={realExperienceImg}
              alt="Real Experience"
              className="h-[430px] w-full object-cover"
            />
          </div>
        </div>

        {/* SECOND SECTION */}
        <div
          id="competitive-edge"
          className="grid items-center gap-14 rounded-[28px] border border-[#d8dde8] bg-white/70 p-8 shadow-sm lg:grid-cols-[0.95fr_1fr] lg:p-12"
        >
          
          {/* IMAGE */}
          <div className="overflow-hidden rounded-[26px] border-[10px] border-white bg-white shadow-[0_25px_55px_rgba(15,23,42,0.18)]">
  <img
    src={whyFccImg}
    alt="Competitive Edge"
    className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[520px]"
  />
</div>

          {/* TEXT */}
          <div>
            <p className="mb-6 text-[12px] font-extrabold uppercase tracking-[0.45em] text-[#8266ff]">
              Our Competitive Edge
            </p>

            <h2 className="max-w-[520px] text-[34px] font-black leading-[1.15] tracking-[-0.04em] text-[#111827] md:text-[42px]">
              Built on field knowledge, not assumptions.
            </h2>

            <div className="mt-8 space-y-4">
              {edgePoints.map((item, index) => (
                <div
                  key={index}
                  className="flex min-h-[58px] items-center gap-4 rounded-xl bg-[#f7f9fc] px-5 py-4"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#8266ff]" />

                  <p className="text-[13px] leading-6 text-[#64748b]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* THIRD SECTION */}
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
          
          {/* TEXT */}
          <div>
            <p className="mb-6 text-[12px] font-extrabold uppercase tracking-[0.45em] text-[#8266ff]">
              Our Promise
            </p>

            <h2 className="max-w-[520px] text-[34px] font-black leading-[1.12] tracking-[-0.04em] text-[#111827] md:text-[42px]">
              Understanding your business deeply. Designing tailored solutions.
            </h2>

            <p className="mt-7 max-w-[560px] text-[15px] leading-8 text-[#7b8797]">
              We combine technology, business understanding, and practical
              implementation experience to create systems that support real
              business growth.
            </p>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-[24px] border-[10px] border-white bg-white shadow-[0_28px_60px_rgba(15,23,42,0.22)]">
            <img
              src={projectNew}
              alt="Our Promise"
              className="h-[390px] w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;