'use client';

import { CheckCircle2, Smartphone, Share2, Monitor, Vote, Zap, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-[calc(100vh-4rem)]">
        {/* Hero Section - Full Height */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 -left-32 w-80 h-80 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
            <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-blue-300 opacity-10 rotate-45"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border-4 border-blue-200 opacity-10 rotate-12"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="text-center lg:text-left text-white order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                  <Vote className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span className="text-xs sm:text-sm text-white font-medium">EVM Demo Platform</span>
                </div>
                <h1 className="text-1xl sm:text-2xl lg:text-4xl  font-extrabold  leading-tight drop-shadow-lg">വാർഡ്ഡിലെ</h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-lg">EVM ഡെമോ</h1>
                <h1 className="text-1xl sm:text-2xl lg:text-4xl  font-extrabold  leading-tight drop-shadow-lg mb-4 sm:mb-6">ഓൺലൈനായക്കിയാലോ?</h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-95 max-w-2xl mx-auto lg:mx-0 drop-shadow">
                  നിങ്ങളുടെ സ്ഥാനാർത്ഥികളുടെ പേര്, ഫോട്ടോ, ചിഹ്നം EVM ൽ<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>കാണിച്ചു വോട്ട് കുറുമ്പയിൽ നടത്താം.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#services">
                    <Button className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                      സേവനങ്ങൾ കാണുക
                    </Button>
                  </a>
                  <a href="#contact">
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105">
                      ബന്ധപ്പെടുക
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Side - Phone Mockup */}
              <div className="hidden md:block relative order-1 lg:order-2 flex justify-center items-center">
                <div className="absolute inset-0 bg-blue-400 opacity-30 blur-3xl rounded-full scale-75"></div>

                <div className="relative z-10 max-w-xs mx-auto">
                  <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800 transform hover:scale-105 transition-transform duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20"></div>

                    <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
                      <Image
                        src="/screenshort.jpg"
                        alt="EVM Demo on Phone"
                        width={300}
                        height={600}
                        className="w-full h-auto"
                        priority
                      />
                    </div>
                  </div>

                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-green-400 rounded-full opacity-80 animate-bounce delay-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/70 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 mb-4 bg-blue-100 px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-blue-800 font-medium">സവിശേഷതകൾ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                എന്തുകൊണ്ട് ഞങ്ങളെ തിരഞ്ഞെടുക്കണം?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                ആധുനികവും സുരക്ഷിതവുമായ EVM സിമുലേഷൻ പ്ലാറ്റ്ഫോം
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Feature Card 1 */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      വാർഡ് / ബ്ലോക്ക് / ജില്ല തലത്തിൽ EVM ഡെമോ
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      എല്ലാ തലത്തിലുമുള്ള തിരഞ്ഞെടുപ്പുകൾക്കായി EVM സിമുലേഷൻ സൗകര്യം
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Share2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      വാട്ട്സ്ആപ്പിലും സോഷ്യൽ മീഡിയയിലും എളുപ്പത്തിൽ ഷെയർ ചെയ്യാം
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      വോട്ടർമാരുമായി എളുപ്പത്തിൽ പങ്കുവെക്കാവുന്ന ലിങ്ക്
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Monitor className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      മൊബൈൽ, ടാബ്, ലാപ്ടോപ്പ് എല്ലായിടത്തും പ്രവർത്തിക്കും
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      എല്ലാ ഉപകരണങ്ങളിലും മികച്ച രീതിയിൽ പ്രവർത്തിക്കുന്ന പ്ലാറ്റ്ഫോം
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 4 */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      100% കംപ്ലൈമെന്റ് ചെയ്യാവുന്ന EVM Simulation
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      യഥാർത്ഥ EVM പോലെ തന്നെ പ്രവർത്തിക്കുന്ന സിസ്റ്റം
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6">
                എന്തിനാണ് ഓൺലൈൻ EVM ഡെമോ?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
                വോട്ടർമാർക്ക് മുൻകൂട്ടി പരിശീലിപ്പിക്കാനും, സ്ഥാനാർത്ഥികളെ പരിചയപ്പെടുത്താനും,<br className="hidden sm:block" />
                തിരഞ്ഞെടുപ്പ് പ്രക്രിയ സുഗമമാക്കാനും സഹായിക്കുന്ന ആധുനിക പരിഹാരം
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2">100%</div>
                  <div className="text-sm sm:text-base text-gray-700 font-semibold">Accurate Simulation</div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-green-600 mb-2">24/7</div>
                  <div className="text-sm sm:text-base text-gray-700 font-semibold">ലഭ്യമായ സേവനം</div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-purple-600 mb-2">∞</div>
                  <div className="text-sm sm:text-base text-gray-700 font-semibold">പരിധിയില്ലാത്ത പ്രാക്ടീസ്</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        {/* <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 mb-4 bg-blue-100 px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-blue-800 font-medium">പ്രവർത്തനം</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                എങ്ങനെ പ്രവർത്തിക്കുന്നു?
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center font-extrabold text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                      സ്ഥാനാർത്ഥി വിവരങ്ങൾ നൽകുക
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                      പേര്, ഫോട്ടോ, ചിഹ്നം എന്നിവ അപ്‌ലോഡ് ചെയ്യുക
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center font-extrabold text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                      EVM സജ്ജമാക്കുക
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                      സിസ്റ്റം സ്വയമേവ നിങ്ങളുടെ EVM ഡെമോ തയ്യാറാക്കും
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center font-extrabold text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                      പങ്കുവെക്കുക
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                      വോട്ടർമാരുമായി ലിങ്ക് ഷെയർ ചെയ്ത് പ്രാക്ടീസ് ചെയ്യാൻ അനുവദിക്കുക
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-gray-100">
              <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-2 mb-4 bg-blue-100 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-blue-800 font-medium">ബന്ധപ്പെടുക</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
                  Contact Us
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  കൂടുതൽ വിവരങ്ങൾക്കും സേവനം ആരംഭിക്കാനും ഞങ്ങളെ ബന്ധപ്പെടുക
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-10">
                <a href="tel:+918589053790" className="w-full sm:w-auto">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    📞 +91 85890 53790
                  </Button>
                </a>
                <a href="tel:+919847395758" className="w-full sm:w-auto">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    📞 +91 98473 95758
                  </Button>
                </a>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="font-bold text-gray-900 mb-2 text-base sm:text-lg">വേഗത്തിലുള്ള സേവനം</div>
                    <div className="text-sm text-gray-600">24 മണിക്കൂറിനുള്ളിൽ സജ്ജമാക്കാം</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="font-bold text-gray-900 mb-2 text-base sm:text-lg">താങ്ങാനാവുന്ന വില</div>
                    <div className="text-sm text-gray-600">മികച്ച വിലയിൽ സേവനം</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100 sm:col-span-2 lg:col-span-1">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="font-bold text-gray-900 mb-2 text-base sm:text-lg">സാങ്കേതിക പിന്തുണ</div>
                    <div className="text-sm text-gray-600">പൂർണ്ണ സപ്പോർട്ട് ഉറപ്പ്</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-10 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
              <p className="text-sm sm:text-base mb-2 opacity-90">
                © 2024 EVM Demo Platform. All rights reserved.
              </p>
              <p className="text-xs sm:text-sm opacity-75">
                വിശ്വസനീയവും സുരക്ഷിതവുമായ EVM സിമുലേഷൻ സേവനം
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
