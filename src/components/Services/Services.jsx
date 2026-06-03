const goals = [
  "Enable SMEs to scale faster through fully integrated, data-driven systems.",

  "Eliminate operational inefficiencies by replacing fragmented processes with unified workflows.",

  "Deliver measurable ROI through optimized processes, cost control, and real-time visibility.",

  "Build long-term partnerships focused on continuous improvement and business growth.",

  "Drive user adoption by delivering intuitive systems and hands-on enablement that ensure teams actually use the solution effectively.",

  "Accelerate time-to-value through structured implementation methodologies and rapid deployment approaches.",
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#f4f7fb] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div>
          <p className="text-[13px] font-extrabold uppercase tracking-[0.45em] text-[#8266ff]">
            Our Strategic Goals
          </p>

          <h2 className="mt-8 max-w-[900px] text-[48px] font-black leading-[1.08] tracking-[-0.05em] text-[#0f172a] md:text-[72px]">
            Turning business complexity into clear digital systems.
          </h2>

          <div className="mt-10 h-[4px] w-28 rounded-full bg-[#8266ff]" />

          <p className="mt-10 max-w-[950px] text-[18px] leading-[1.9] text-[#4b5563]">
            We focus on helping growing companies simplify operations,
            improve visibility, and build strong digital foundations that
            support long-term growth.
          </p>
        </div>

        {/* GOALS */}
        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="flex items-start gap-5 rounded-[28px] border border-[#dfe3eb] bg-white px-7 py-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* NUMBER */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#8266ff] text-[22px] font-black text-white shadow-[0_10px_25px_rgba(91,75,255,0.28)]">
                {index + 1}
              </div>

              {/* TEXT */}
              <p className="pt-1 text-[17px] leading-[1.9] text-[#4b5563]">
                {goal}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}