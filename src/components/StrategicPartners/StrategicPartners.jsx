const partners = [
  {
    label: "Contracting",
    title: "Future Creators Contracting",
    text: "Construction and contracting operations with real-world project execution experience, field workflows, approvals, costing, and operational management.",
  },
  {
    label: "Real Estate",
    title: "Future Creators Real Estate",
    text: "Practical real estate operations supporting sales systems, customer management, business visibility, and operational workflows.",
  },
  {
    label: "Outsourcing",
    title: "Future Creators Outsourcing",
    text: "HR outsourcing and workforce management solutions supporting large-scale employee operations, payroll systems, and attendance workflows.",
  },
];

function StrategicPartners() {
  return (
    <section id="partners" className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mx-auto max-w-[760px] text-[48px] font-black leading-[1.12] tracking-[-0.05em] text-[#0f172a] md:text-[68px]">
            Built on a real business ecosystem.
          </h2>

          <div className="mx-auto mt-8 h-[4px] w-24 rounded-full bg-[#8266ff]" />

          <p className="mx-auto mt-8 max-w-[820px] text-[20px] leading-[1.9] text-[#667085]">
            Future Creators Computing is strengthened by direct exposure to real
            business operations across contracting, real estate, and outsourcing
            environments.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-[#dfe3eb] bg-[#f8fafc] p-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8266ff] shadow-[0_10px_30px_rgba(91,75,255,0.35)]">
                <span className="text-[24px] font-black text-white">FC</span>
              </div>

              <p className="mt-9 text-[13px] font-extrabold uppercase tracking-[0.45em] text-[#8266ff]">
                {partner.label}
              </p>

              <h3 className="mt-7 text-[27px] font-black leading-[1.15] tracking-[-0.04em] text-[#111827]">
                {partner.title}
              </h3>

              <p className="mt-8 text-[17px] leading-[2] text-[#667085]">
                {partner.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StrategicPartners;