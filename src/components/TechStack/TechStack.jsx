function TechStack() {
  const cards = [
    {
      title: "Our Vision",
      text: "To be the most trusted digital transformation partner for ambitious, growing businesses across the Middle East empowering them to scale with clarity, control, and confidence.",
    },
    {
      title: "Our Mission",
      text: "We help businesses turn complexity into clarity by delivering practical, scalable, and cost-effective Odoo solutions — designed around real operations, not theory.",
    },
    {
      title: "Our Value",
      text: "It is not just about implementing systems, but about driving measurable business outcomes, accelerating growth, and enabling smarter decision-making.",
    },
  ];

  return (
    <section id="north-star" className="bg-[#f4f7fb] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[13px] font-extrabold uppercase tracking-[0.45em] text-[#8266ff]">
            Our North Star
          </p>

          <h2 className="mx-auto mt-8 max-w-[900px] text-[46px] font-black leading-[1.08] tracking-[-0.05em] text-[#0f172a] md:text-[72px]">
            Our North Star
          </h2>

          <div className="mx-auto mt-10 h-[4px] w-24 rounded-full bg-[#8266ff]" />
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-[#dfe3eb] bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8266ff] shadow-[0_10px_30px_rgba(91,75,255,0.35)]">
                <span className="text-[26px] font-black text-white">FC</span>
              </div>

              <h3 className="mt-10 text-[28px] font-black tracking-[-0.03em] text-[#111827]">
                {card.title}
              </h3>

              <p className="mt-8 text-[17px] leading-[1.9] text-[#4b5563]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;