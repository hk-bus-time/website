import Image from "next/image";
import { FaClock, FaLightbulb, FaPalette } from "react-icons/fa";
import QRCode from "react-qr-code";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/icon.png"
                    alt="HK Bus Time Icon"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-2xl"
                  />
                  <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                    HK Bus Time
                  </h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  No ads, faster and smoother - the Bus App for Hong Kong. One
                  app integrates all Hong Kong buses: KMB, Long Win, New Lantao
                  Bus, Citybus, and Green minibuses. Real-time arrival times and
                  traffic updates.
                </p>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
                <a
                  href="https://apps.apple.com/hk/app/hk-bus-time/id6749821674?platform=iphone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/app-store.png"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="h-12 w-auto hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </a>
                <div className="relative inline-block">
                  <Image
                    src="/google-play.png"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="h-12 w-auto opacity-50 cursor-not-allowed"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600 bg-white/90 px-2 py-1 rounded">
                      Coming soon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Screenshot */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/screenshot.png"
                  alt="HK Bus Time App Screenshot"
                  width={400}
                  height={800}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-full translate-y-24 -translate-x-24 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              What Features?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are working hard to provide you with more features in app.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaClock className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Real-time ETAs
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Get accurate arrival times and live bus tracking updated in
                  real-time
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaLightbulb className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Smart Recommendations
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Intelligent route suggestions and personalized recommendations
                  for your daily commute
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaPalette className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Customize Your App
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Personalize themes and choose your preferred maps - Google
                  Maps or Apple Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/icon.png"
                alt="HK Bus Time Icon"
                width={32}
                height={32}
                className="w-8 h-8 rounded"
              />
              <span className="text-lg font-semibold">HK Bus Time</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="/terms"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="/privacy"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 HK Bus Time. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
