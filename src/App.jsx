import { useState, useEffect, useRef } from "react";

function Reveal({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(60px)",
        transition: "all 0.8s ease",
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="bg-[white] text-black">
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-xl font-bold tracking-wide">⚡Sabi Lighter</h1>

        <div className="flex justify-center gap-50 mb-4">
          <a href="https://www.facebook.com/share/1DUavAFSQf/?mibextid=wwXIfr">
            <img
              src="/facebook.png"
              alt="facebook-icon"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <a href="https://www.tiktok.com/@sabi.lighter?_r=1&_t=ZS-93L28gNbyrw">
            <img
              src="/tiktok.png"
              alt="tiktok-icon"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <a href="https://wa.me/message/SULENUJBBE57P1">
            <img
              src="/whatsapp.png"
              alt="whatsapp-icon"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
        </div>
      </nav>

      <section className="flex flex-col md:flex-row items-center px-8 py-20 gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-blue-500">Smart Power In Your Hand</span>
          </h1>

          <p className="mt-4 text-black">
            Windproof Arc Technology • USB Rechargeable • Flexible Neck Design
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/lighter.png"
            alt="Sabi Lighter"
            className="h-[200px] drop-shadow-[0_0_20px_rgba(0,140,255,0.5)]"
          />
        </div>
      </section>

      <Reveal>
        <section className="px-8 py-20">
          <h2 className="text-center text-3xl font-bold mb-12">
            Why Choose Sabi Lighter?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "🌀Windproof Arc",
              "⚡USB Rechargeable",
              "🖇Flexible Neck",
              "🔋Fast Charging",
            ].map((item) => (
              <div
                key={item}
                className="bg-black border border-blue-500/20 p-6 rounded-xl text-center hover:scale-105 transition"
              >
                <h3 className="font-semibold text-lg">{item}</h3>
                <p className="text-white mt-2 text-sm">
                  Premium performance for everyday use.
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="px-8 py-20 bg-black">
          <h2 className="text-center text-3xl font-bold mb-12 text-white">
            How It Works
          </h2>

          <div className="flex flex-row gap-8 text-center justify-center items-center flex-wrap">
            <div className="flex-1 min-w-fit">
              <div className="text-blue-500 text-2xl font-bold mb-2">1</div>
              <h3 className="font-semibold text-white">Plug Into USB</h3>
              <img
                src="/demo1.png"
                style={{ width: "150px", height: "150px" }}
              />
              <p className="text-white text-sm mt-2">
                Recharge easily with any USB cable.
              </p>
            </div>

            <div className="text-blue-500 text-3xl">→</div>

            <div className="flex-1 min-w-fit">
              <div className="text-blue-500 text-2xl font-bold mb-2">2</div>
              <h3 className="font-semibold text-white">Press Power Button</h3>
              <img
                src="/demo2.png"
                style={{ width: "150px", height: "150px" }}
              />
              <p className="text-white text-sm mt-2">
                Activate the electric arc instantly.
              </p>
            </div>

            <div className="text-blue-500 text-3xl">→</div>

            <div className="flex-1 min-w-fit">
              <div className="text-blue-500 text-2xl font-bold mb-2">3</div>
              <h3 className="font-semibold text-white">Light Instantly</h3>
              <img
                src="/demo3.png"
                style={{ width: "150px", height: "150px" }}
              />
              <p className="text-white text-sm mt-2">
                Enjoy fast and safe ignition.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="px-8 py-20">
          <h2 className="text-center text-3xl font-bold mb-12">
            Sabi Lighter In Action
          </h2>

          <div className="flex flex-row gap-6 justify-center">
            <div className="bg-black rounded-xl p-3">
              <img
                src="/candle.png"
                style={{ width: "120px", height: "120px" }}
              />
            </div>

            <div className="bg-black rounded-xl p-3">
              <img
                src="/cook.png"
                style={{ width: "120px", height: "120px" }}
              />
            </div>

            <div className="bg-black rounded-xl p-3">
              <img
                src="/cooking.png"
                style={{ width: "120px", height: "120px" }}
              />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="px-8 py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready To Upgrade Your Fire Experience?
          </h2>

          <p className="mt-4 text-white">Smart • Safe • Powerful</p>
        </section>
      </Reveal>

      <footer className="text-center py-8 text-white text-sm bg-black">
        © {new Date().getFullYear()} Sabi Lighter. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
