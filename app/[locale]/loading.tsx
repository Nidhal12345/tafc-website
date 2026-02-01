import { Header } from "@/components/layout/header"

export default function HomeLoading() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Skeleton */}
                <section className="relative min-h-screen w-full bg-[#0a192f] flex items-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#042635] to-[#020c1b]" />

                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22C5C5]/5 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#5865f2]/5 rounded-full blur-3xl animate-pulse delay-500" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
                        <div className="max-w-4xl space-y-8">
                            {/* Badge */}
                            <div className="w-40 h-8 bg-white/10 rounded-full animate-pulse" />

                            {/* Title */}
                            <div className="space-y-4">
                                <div className="h-16 md:h-20 w-3/4 bg-white/10 rounded animate-pulse" />
                                <div className="h-16 md:h-20 w-2/3 bg-[#22C5C5]/20 rounded animate-pulse" />
                                <div className="h-16 md:h-20 w-1/2 bg-white/10 rounded animate-pulse" />
                            </div>

                            {/* Description */}
                            <div className="space-y-3 pt-4 max-w-2xl">
                                <div className="h-5 w-full bg-white/5 rounded animate-pulse" />
                                <div className="h-5 w-4/5 bg-white/5 rounded animate-pulse" />
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 pt-4">
                                <div className="w-40 h-14 bg-[#22C5C5]/20 rounded-xl animate-pulse" />
                                <div className="w-36 h-14 bg-white/10 rounded-xl animate-pulse" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Marquee Skeleton */}
                <div className="h-20 bg-slate-100 flex items-center overflow-hidden">
                    <div className="flex gap-16 animate-pulse">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-32 h-6 bg-slate-200 rounded" />
                        ))}
                    </div>
                </div>

                {/* Content Sections Skeleton */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1 space-y-6">
                                <div className="w-24 h-6 bg-[#22C5C5]/20 rounded animate-pulse" />
                                <div className="space-y-3">
                                    <div className="h-12 w-3/4 bg-slate-200 rounded animate-pulse" />
                                    <div className="h-12 w-1/2 bg-slate-200 rounded animate-pulse" />
                                </div>
                                <div className="space-y-3">
                                    <div className="h-5 w-full bg-slate-100 rounded animate-pulse" />
                                    <div className="h-5 w-4/5 bg-slate-100 rounded animate-pulse" />
                                    <div className="h-5 w-3/5 bg-slate-100 rounded animate-pulse" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="aspect-[4/3] bg-slate-200 rounded-2xl shadow-xl animate-pulse" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products Grid Skeleton */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <div className="w-32 h-6 bg-[#22C5C5]/20 rounded mx-auto mb-4 animate-pulse" />
                            <div className="w-64 h-10 bg-slate-200 rounded mx-auto animate-pulse" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg">
                                    <div className="aspect-[4/3] bg-slate-200 animate-pulse" />
                                    <div className="p-6 space-y-4">
                                        <div className="h-6 w-3/4 bg-slate-200 rounded animate-pulse" />
                                        <div className="h-4 w-1/2 bg-slate-100 rounded animate-pulse" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
