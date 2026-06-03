import { Link } from "react-router-dom";
import heroImage from "../../assets/images/k.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8fb]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <div className="order-1 lg:order-1">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#8266ff]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#8266ff] sm:text-[12px]">
                SMART SYSTEMS. REAL RESULTS.
              </p>
            </div>

            <h1 className="max-w-[650px] text-[42px] font-black leading-[1.02] tracking-[-0.05em] text-[#0b132b] sm:text-[56px] lg:text-[78px]">
              Building Smart Digital Foundations for Growing Businesses
            </h1>

            <p className="mt-7 max-w-[560px] text-[15px] leading-[1.9] text-[#6b7280] sm:text-[17px] lg:text-[18px]">
              We design and implement scalable business systems that
              simplify operations, improve visibility, and support
              sustainable business growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/about"
                className="flex justify-center rounded-2xl bg-[#8266ff] px-8 py-4 text-sm font-bold text-white shadow-[0_15px_35px_rgba(91,75,255,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#4d3df2]"
              >
                Explore More
              </Link>

              <Link
                to="/contact"
                className="flex justify-center rounded-2xl border border-[#d9dce5] bg-white px-8 py-4 text-sm font-bold text-[#111827] shadow-sm transition duration-300 hover:border-[#8266ff] hover:text-[#8266ff]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="order-2 flex justify-center lg:order-2">
            <div className="w-full max-w-[520px] rounded-[30px] bg-white p-2 shadow-[0_25px_60px_rgba(15,23,42,0.12)] sm:p-3">
              <img
                src={heroImage}
                alt="Future Creators Computing"
                className="h-auto w-full rounded-[24px] object-cover lg:h-[620px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}