import aboutImage from "../../assets/images/ch.png";

const points = [
  "At Future Creators Computing, we go beyond software implementation — we design and build complete digital operating environments that empower businesses to scale, stay organized, and make confident, data-driven decisions.",

  "We were founded with a clear purpose to Bridge The Gap between technology and real-world business operations.",

  "Unlike typical software providers, our solutions are shaped by Real Industry Experience, ensuring that every system we deliver is practical, efficient, and aligned with how businesses actually work.",
];

function WhyChooseUs() {
  return (
    <section className="bg-[#f8f8fb] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">

        {/* LEFT */}
        <div>
          <p className="mb-5 text-[13px] font-bold uppercase tracking-[0.35em] text-[#8266ff]">
            WHO WE ARE
          </p>

          <h2 className="max-w-[540px] text-[54px] font-black leading-[1.08] tracking-[-0.05em] text-[#0b132b]">
            Building smart digital operating environments.
          </h2>

          <p className="mt-8 max-w-[560px] text-[17px] leading-[1.9] text-[#4b5563]">
            At Future Creators Computing, we build complete digital
            operating environments designed to help businesses scale,
            stay organized, and operate with greater efficiency and
            visibility.
          </p>

          <div className="mt-10 space-y-5">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-5 rounded-[22px] border border-[#e6e8ef] bg-white px-6 py-6 shadow-sm transition duration-300 hover:-translate-y-[2px] hover:shadow-md"
              >
                <span className="mt-[10px] h-3 w-3 min-w-[12px] rounded-full bg-[#8266ff]" />

                <p className="text-[16px] font-medium leading-[1.9] text-[#374151]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-[32px] bg-white p-3 shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
            <img
              src={aboutImage}
              alt="Future Creators Computing"
              className="h-[540px] w-[450px] rounded-[28px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;