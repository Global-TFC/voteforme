'use client';

import { CheckCircle2, Smartphone, Share2, Monitor, Vote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <header className="text-center mb-12 pt-20 md:pt-28">
            <div className="inline-flex items-center gap-2 mb-4 bg-blue-100 px-3 sm:px-4 py-2 rounded-full">
              <Vote className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-xs sm:text-sm text-blue-800 font-medium">EVM Demo Platform</span>
            </div>
            <h1 className="text-1xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-4">
              വാർഡ്ഡിലെ EVM ഡെമോ<br />
              ഓൺലൈനായക്കിയാലോ?
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              നിങ്ങളുടെ സ്ഥാനാർത്ഥികളുടെ പേര്, ഫോട്ടോ, ചിഹ്നം EVM ൽ<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>കാണിച്ചു വോട്ട് കുറുമ്പയിൽ നടത്താം.
            </p>
          </header>

          {/* Features Section */}
          <section id="services" className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-20 scroll-mt-20">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
                <Image
                  src="/img-20251205-wa0000.jpg"
                  alt="EVM Demo Application"
                  width={600}
                  height={800}
                  className="rounded-xl w-full h-auto"
                  priority
                />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    വാർഡ് / ബ്ലോക്ക് / ജില്ല തലത്തിൽ EVM ഡെമോ
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    എല്ലാ തലത്തിലുമുള്ള തിരഞ്ഞെടുപ്പുകൾക്കായി EVM സിമുലേഷൻ സൗകര്യം
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Share2 className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    വാട്ട്സ്ആപ്പിലും സോഷ്യൽ മീഡിയയിലും എളുപ്പത്തിൽ ഷെയർ ചെയ്യാം
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    വോട്ടർമാരുമായി എളുപ്പത്തിൽ പങ്കുവെക്കാവുന്ന ലിങ്ക്
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Monitor className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    മൊബൈൽ, ടാബ്, ലാപ്ടോപ്പ് എല്ലായിടത്തും പ്രവർത്തിക്കും
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    എല്ലാ ഉപകരണങ്ങളിലും മികച്ച രീതിയിൽ പ്രവർത്തിക്കുന്ന പ്ലാറ്റ്ഫോം
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Smartphone className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    100% കംപ്ലൈമെന്റ് ചെയ്യാവുന്ന EVM Simulation
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    യഥാർത്ഥ EVM പോലെ തന്നെ പ്രവർത്തിക്കുന്ന സിസ്റ്റം
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Online EVM Demo Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                എന്തിനാണ് ഓൺലൈൻ EVM ഡെമോ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90">
                വോട്ടർമാർക്ക് മുൻകൂട്ടി പരിശീലിപ്പിക്കാനും, സ്ഥാനാർത്ഥികളെ പരിചയപ്പെടുത്താനും,
                തിരഞ്ഞെടുപ്പ് പ്രക്രിയ സുഗമമാക്കാനും സഹായിക്കുന്ന ആധുനിക പരിഹാരം
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-xs sm:text-sm text-gray-700 font-medium">Accurate Simulation</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-700 font-medium">ലഭ്യമായ സേവനം</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg sm:col-span-2 md:col-span-1">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">∞</div>
                    <div className="text-xs sm:text-sm text-gray-700 font-medium">പരിധിയില്ലാത്ത പ്രാക്ടീസ്</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mb-20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                എങ്ങനെ പ്രവർത്തിക്കുന്നു?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-left">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0">
                      1
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">സ്ഥാനാർത്ഥി വിവരങ്ങൾ നൽകുക</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 ml-11 sm:ml-14">
                    പേര്, ഫോട്ടോ, ചിഹ്നം എന്നിവ അപ്‌ലോഡ് ചെയ്യുക
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-left">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0">
                      2
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">EVM സജ്ജമാക്കുക</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 ml-11 sm:ml-14">
                    സിസ്റ്റം സ്വയമേവ നിങ്ങളുടെ EVM ഡെമോ തയ്യാറാക്കും
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-left">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0">
                      3
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">പങ്കുവെക്കുക</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 ml-11 sm:ml-14">
                    വോട്ടർമാരുമായി ലിങ്ക് ഷെയർ ചെയ്ത് പ്രാക്ടീസ് ചെയ്യാൻ അനുവദിക്കുക
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-12 scroll-mt-20">
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Contact Us
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
                കൂടുതൽ വിവരങ്ങൾക്കും സേവനം ആരംഭിക്കാനും ഞങ്ങളെ ബന്ധപ്പെടുക
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
                <a
                  href="tel:+918589053790"
                  className="inline-flex items-center justify-center w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    📞 +91 85890 53790
                  </Button>
                </a>
                <a
                  href="tel:+919847395758"
                  className="inline-flex items-center justify-center w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    📞 +91 98473 95758
                  </Button>
                </a>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">വേഗത്തിലുള്ള സേവനം</div>
                  <div>24 മണിക്കൂറിനുള്ളിൽ സജ്ജമാക്കാം</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">താങ്ങാനാവുന്ന വില</div>
                  <div>മികച്ച വിലയിൽ സേവനം</div>
                </div>
                <div className="sm:col-span-2 md:col-span-1">
                  <div className="font-semibold text-gray-900 mb-1">സാങ്കേതിക പിന്തുണ</div>
                  <div>പൂർണ്ണ സപ്പോർട്ട് ഉറപ്പ്</div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-6 sm:py-8 text-gray-600">
            <p className="mb-2 text-xs sm:text-sm">© 2024 EVM Demo Platform. All rights reserved.</p>
            <p className="text-xs sm:text-sm">വിശ്വസനീയവും സുരക്ഷിതവുമായ EVM സിമുലേഷൻ സേവനം</p>
          </footer>
        </div>
      </main>
    </>
  );
}
