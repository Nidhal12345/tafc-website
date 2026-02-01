import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function ContactLoading() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-200">
        {/* Hero Skeleton */}
        <section className="relative h-[40vh] min-h-[350px] flex items-end pb-16 overflow-hidden bg-[#020c1b]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/50 to-[#020c1b] z-10" />
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#22C5C5]/5 rounded-full blur-3xl opacity-60" />

          <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="w-32 h-6 bg-white/10 rounded-full animate-pulse" />
              <div className="w-2/3 h-12 bg-white/10 rounded animate-pulse" />
              <div className="w-full max-w-xl h-5 bg-white/5 rounded animate-pulse" />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-30 pb-24">
          {/* Contact Cards Skeleton */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-slate-100 rounded-2xl animate-pulse" />
                  <div className="w-40 h-6 bg-slate-200 rounded animate-pulse" />
                  <div className="w-28 h-4 bg-slate-100 rounded animate-pulse" />
                  <div className="w-32 h-5 bg-slate-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Form Area Skeleton */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#042635] p-8 rounded-3xl h-64 animate-pulse" />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-3xl h-24 animate-pulse" />
                <div className="bg-white p-6 rounded-3xl h-24 animate-pulse" />
              </div>
            </div>

            {/* Form Skeleton */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1 h-8 bg-slate-200 rounded-full" />
                  <div className="space-y-2">
                    <div className="w-48 h-6 bg-slate-200 rounded animate-pulse" />
                    <div className="w-32 h-4 bg-slate-100 rounded animate-pulse" />
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="h-11 bg-slate-50 rounded-xl animate-pulse" />
                    <div className="h-11 bg-slate-50 rounded-xl animate-pulse" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="h-11 bg-slate-50 rounded-xl animate-pulse" />
                    <div className="h-11 bg-slate-50 rounded-xl animate-pulse" />
                  </div>
                  <div className="h-[120px] bg-slate-50 rounded-xl animate-pulse" />
                  <div className="flex justify-end">
                    <div className="w-32 h-12 bg-slate-200 rounded-xl animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
