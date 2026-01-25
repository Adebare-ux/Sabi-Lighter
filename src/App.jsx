import { useState } from "react";

function App() {
  return (
    <div className="bg-[white] text-black">
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-xl font-bold tracking-wide">⚡Sabi Lighter</h1>
      </nav>

      <section className="flex flex-col md:flex-row items-center px-8 py-20 gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Sabi Lighter <br />
            <span className="text-blue-500">Smart Power In Your Hand</span>
          </h1>

          <p className="mt-4 text-white">
            Windproof Arc Technology • USB Rechargeable • Flexible Neck Design
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/lighter.png"
            alt="Sabi Lighter"
            className="h-[400px] drop-shadow-[0_0_20px_rgba(0,140,255,0.5)]"
          />
        </div>
      </section>

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
              className="bg-[#0c1022] border border-blue-500/20 p-6 rounded-xl text-center hover:scale-105 transition"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="text-white mt-2 text-sm">
                Premium performance for everyday use.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-20 bg-[#070b1f]">
        <h2 className="text-center text-3xl font-bold mb-12">How It Works</h2>

        <div className="flex flex-col md:flex-row gap-20 text-center justify-center">
          <div className="px-4">
            <div className="text-blue-500 text-2xl font-bold mb-2">1</div>
            <h3 className="font-semibold">Plug Into USB</h3>
            <img src="/demo1.png" style={{ width: "150px", height: "150px" }} />
            <p className="text-white text-sm mt-2">
              Recharge easily with any USB cable.
            </p>
          </div>

          <div className="px-4">
            <div className="text-blue-500 text-2xl font-bold mb-2">2</div>
            <h3 className="font-semibold">Press Power Button</h3>
            <img src="/demo2.png" style={{ width: "150px", height: "150px" }} />
            <p className="text-white text-sm mt-2">
              Activate the electric arc instantly.
            </p>
          </div>

          <div className="px-4">
            <div className="text-blue-500 text-2xl font-bold mb-2">3</div>
            <h3 className="font-semibold">Light Instantly</h3>
            <img src="/demo3.png" style={{ width: "150px", height: "150px" }} />
            <p className="text-white text-sm mt-2">
              Enjoy fast and safe ignition.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-20">
        <h2 className="text-center text-3xl font-bold mb-12">
          Sabi Lighter In Action
        </h2>

        <div className="flex flex-row gap-6 justify-center">
          <div className="bg-[#0c1022] rounded-xl p-3">
            <img
              src="/candle.png"
              style={{ width: "120px", height: "120px" }}
            />
          </div>

          <div className="bg-[#0c1022] rounded-xl p-3">
            <img src="/cook.png" style={{ width: "120px", height: "120px" }} />
          </div>

          <div className="bg-[#0c1022] rounded-xl p-3">
            <img
              src="/cooking.png"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-center">
        <h2 className="text-3xl font-bold text-white">
          Ready To Upgrade Your Fire Experience?
        </h2>

        <p className="mt-4 text-white">Smart • Safe • Powerful</p>

        <button className="mt-6 bg-black px-10 py-3 rounded-lg text-lg hover:bg-gray-900 transition text-white">
          Order Sabi Lighter Now
        </button>
      </section>

      <footer className="text-center py-8 text-white text-sm">
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
        © {new Date().getFullYear()} Sabi Lighter. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
