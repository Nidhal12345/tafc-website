import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function ProductDetailLoading() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-slate-50/50">
                {/* Desktop Sticky Nav Skeleton */}
                <nav className="hidden md:block sticky top-[80px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center gap-2">
                        <div className="h-4 w-20 bg-slate-200 rounded animate-pulse" />
                        <div className="h-4 w-4 bg-slate-100 rounded animate-pulse" />
                        <div className="h-4 w-24 bg-slate-200 rounded animate-pulse" />
                        <div className="h-4 w-4 bg-slate-100 rounded animate-pulse" />
                        <div className="h-4 w-32 bg-slate-300 rounded animate-pulse" />
                    </div>
                </nav>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-16">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
                        {/* Left Column - Image Skeleton */}
                        <div className="lg:sticky lg:top-32 h-fit space-y-4">
                            {/* Main Image Skeleton */}
                            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white shadow-xl border border-slate-100">
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-shimmer bg-[length:200%_100%]" />
                                {/* Badge Skeletons */}
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <div className="h-7 w-20 bg-white/90 rounded-full animate-pulse" />
                                    <div className="h-7 w-16 bg-white/90 rounded-full animate-pulse" />
                                </div>
                            </div>

                            {/* Specs Row Skeleton - Desktop Only */}
                            <div className="hidden lg:grid grid-cols-3 gap-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-5 h-5 bg-slate-200 rounded animate-pulse" />
                                            <div className="h-3 w-12 bg-slate-100 rounded animate-pulse" />
                                            <div className="h-4 w-16 bg-slate-200 rounded animate-pulse" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Details Skeleton */}
                        <div className="flex flex-col gap-6 md:gap-8 pt-0 md:pt-2">
                            {/* Header Info Skeleton */}
                            <div className="space-y-4">
                                <div className="h-8 w-32 bg-teal-50 rounded-full animate-pulse" />
                                <div className="space-y-3">
                                    <div className="h-12 md:h-16 w-4/5 bg-slate-200 rounded animate-pulse" />
                                    <div className="h-6 w-1/3 bg-slate-100 rounded animate-pulse" />
                                </div>
                            </div>

                            {/* Description Skeleton */}
                            <div className="space-y-2">
                                <div className="h-5 w-full bg-slate-100 rounded animate-pulse" />
                                <div className="h-5 w-5/6 bg-slate-100 rounded animate-pulse" />
                                <div className="h-5 w-4/6 bg-slate-100 rounded animate-pulse" />
                            </div>

                            {/* Mobile Specs Skeleton */}
                            <div className="grid grid-cols-2 gap-3 lg:hidden">
                                {[1, 2].map(i => (
                                    <div key={i} className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm">
                                        <div className="h-3 w-12 bg-slate-100 rounded animate-pulse mb-2" />
                                        <div className="h-4 w-20 bg-slate-200 rounded animate-pulse" />
                                    </div>
                                ))}
                            </div>

                            {/* Price Block Skeleton */}
                            <div className="bg-slate-900 p-6 md:p-8 rounded-2xl md:rounded-3xl">
                                <div className="h-3 w-24 bg-slate-700 rounded animate-pulse mb-2" />
                                <div className="h-10 md:h-12 w-32 bg-slate-700 rounded animate-pulse" />
                            </div>

                            {/* Separator */}
                            <div className="h-px bg-slate-200" />

                            {/* Detailed Lists Skeleton */}
                            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                {[1, 2].map(col => (
                                    <div key={col} className="space-y-4">
                                        <div className="h-6 w-36 bg-slate-200 rounded animate-pulse" />
                                        <div className="space-y-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="h-12 bg-white border border-slate-100 rounded-xl animate-pulse" />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Related Products Skeleton */}
                    <section className="mt-16 md:mt-32 border-t border-slate-200 pt-10 md:pt-16">
                        <div className="flex items-center justify-between mb-8">
                            <div className="space-y-2">
                                <div className="h-4 w-24 bg-teal-100 rounded animate-pulse" />
                                <div className="h-8 w-32 bg-slate-200 rounded animate-pulse" />
                            </div>
                            <div className="h-9 w-20 bg-slate-100 rounded-lg animate-pulse" />
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                    <div className="aspect-[4/3] bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-shimmer bg-[length:200%_100%]" />
                                    <div className="p-5 space-y-4">
                                        <div className="h-3 w-20 bg-slate-100 rounded animate-pulse" />
                                        <div className="h-5 w-3/4 bg-slate-200 rounded animate-pulse" />
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="h-4 bg-slate-100 rounded animate-pulse" />
                                            <div className="h-4 bg-slate-100 rounded animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    )
}
