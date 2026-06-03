export default function Contact() {
  const offices = [
    {
      country: "Egypt",
      phone: "+20 10 7000 4010",
      address: "Office T22:T24 Star Tower Mall, Obour City, Cairo.",
    },
    {
      country: "KSA",
      phone: "+966 5435 20377",
      address: "Riyadh - Al Malaz - Al Ahsa Street - Building No. 36",
    },
    {
      country: "UAE",
      phone: "+971 56240 1000",
      address: "BTB Tower, Marasi Drive, Business Bay, Dubai - Office 1518",
    },
  ];

  const inputClass =
    "w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-5 py-4 text-[#111827] outline-none transition duration-300 focus:border-[#4f46e5] focus:ring-4 focus:ring-[#4f46e5]/10";

  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#4f46e5]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#7c3aed]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#4f46e5]">
              Contact Us
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#111827] md:text-5xl">
              Let’s build smarter business operations together.
            </h2>
          </div>

          <p className="text-[18px] leading-9 text-[#6b7280]">
            Understanding your business deeply, designing tailored solutions,
            and delivering scalable systems that support real growth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {offices.map((office) => (
            <article
              key={office.country}
              className="rounded-[32px] border border-[#e5e7eb] bg-[#f8fafc] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] text-lg font-extrabold text-white">
                FC
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.3em] text-[#4f46e5]">
                {office.country}
              </p>

              <p className="mt-5 text-lg font-semibold leading-8 text-[#111827]">
                {office.phone}
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#6b7280]">
                {office.address}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[32px] border border-[#e5e7eb] bg-[#f8fafc] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#4f46e5]">
              Company Links
            </p>

            <div className="mt-7 space-y-5">
              <div>
                <p className="text-sm font-semibold text-[#6b7280]">Email</p>
                <p className="mt-1 text-lg font-bold text-[#111827]">
                  info@fc-computing.com
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#6b7280]">Website</p>
                <p className="mt-1 text-lg font-bold text-[#111827]">
                  www.fc-computing.com
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e5e7eb] bg-white p-8 shadow-[0_15px_45px_rgba(0,0,0,0.06)]">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#4f46e5]">
              Quick Contact
            </p>

            <h3 className="mt-4 text-2xl font-extrabold text-[#111827]">
              Send us a message
            </h3>

            <form className="mt-8 grid gap-5">
              <input type="text" placeholder="Full Name" className={inputClass} />
              <input type="email" placeholder="Email Address" className={inputClass} />

              <textarea
                rows="5"
                placeholder="Tell us about your business needs..."
                className={inputClass}
              />

              <button
                type="submit"
                className="w-fit rounded-2xl bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] px-9 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(79,70,229,0.30)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(79,70,229,0.40)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}