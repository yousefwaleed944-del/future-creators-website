const stats = [
  {
    number: "3000+",
    label: "Employees supported through outsourcing operations",
  },
  {
    number: "24/7",
    label: "Operational visibility and smarter business workflows",
  },
  {
    number: "100%",
    label: "Focused on scalable and practical ERP implementation",
  },
  {
    number: "ERP",
    label: "Digital operating environments built for real businesses",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        <div className="rounded-[36px] border border-[#e5e7eb] bg-[#f8fafc] p-8 md:p-12">
          
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#4f46e5]">
              Why Future Creators Computing
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#111827] md:text-5xl">
              Technology shaped around real operational experience.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <h3 className="text-4xl font-black text-[#4f46e5]">
                  {item.number}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[#4b5563]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}