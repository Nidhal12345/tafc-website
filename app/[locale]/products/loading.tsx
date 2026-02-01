import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function ProductsLoading() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 min-h-screen bg-slate-50">
        {/* Hero Skeleton */}
        <section className="relative w-full flex flex-col md:grid md:grid-cols-2 min-h-[60vh] md:h-[600px] bg-[#042635]">
          {/* Image Side Skeleton */}
          <div className="relative h-[40vh] md:h-full w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-shimmer bg-[length:200%_100%]" />
          </div>

          {/* Content Side Skeleton */}
          <div className="relative flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 bg-[#042635]">
            <div className="space-y-6">
              <div className="h-4 w-32 bg-slate-600 rounded animate-pulse" />
              <div className="space-y-3">
                <div className="h-10 w-3/4 bg-slate-600 rounded animate-pulse" />
                <div className="h-10 w-2/3 bg-slate-600 rounded animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-slate-700 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-slate-700 rounded animate-pulse" />
                <div className="h-4 w-4/6 bg-slate-700 rounded animate-pulse" />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-slate-600 border-2 border-[#042635]" />
                  ))}
                </div>
                <div className="h-4 w-32 bg-slate-600 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Skeleton */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Sidebar Skeleton */}
              <aside className="lg:w-60 flex-shrink-0 hidden lg:block">
                <div className="lg:sticky lg:top-24 space-y-4">
                  <div className="h-6 w-24 bg-slate-200 rounded animate-pulse" />
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="h-11 w-full bg-slate-100 rounded-lg animate-pulse" />
                    ))}
                  </div>
                </div>
              </aside>

              {/* Products Grid Skeleton */}
              <div className="flex-1 min-w-0">
                {/* Search Bar Skeleton */}
                <div className="mb-8">
                  <div className="h-14 max-w-2xl bg-white border border-slate-200 rounded-xl animate-pulse" />
                </div>

                {/* Product Cards Skeleton */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                      {/* Image Skeleton */}
                      <div className="aspect-[4/3] bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-shimmer bg-[length:200%_100%]" />

                      {/* Content Skeleton */}
                      <div className="p-5 space-y-4">
                        <div className="h-3 w-20 bg-slate-100 rounded animate-pulse" />
                        <div className="h-5 w-3/4 bg-slate-200 rounded animate-pulse" />
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-4 bg-slate-100 rounded animate-pulse" />
                          <div className="h-4 bg-slate-100 rounded animate-pulse" />
                        </div>
                        <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                          <div className="h-9 bg-slate-100 rounded-lg animate-pulse" />
                          <div className="h-9 bg-slate-200 rounded-lg animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
