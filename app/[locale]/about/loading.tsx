export default function AboutLoading() {
    return (
        <>
            {/* Simple Header Skeleton */}
            <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/80 backdrop-blur-lg border-b border-slate-200/50">
                <div className="container mx-auto px-6 h-full flex items-center justify-between">
                    <div className="w-32 h-10 bg-slate-200 rounded animate-pulse" />
                    <div className="hidden md:flex gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-16 h-4 bg-slate-200 rounded animate-pulse" />
                        ))}
                    </div>
                    <div className="w-24 h-10 bg-slate-200 rounded-full animate-pulse" />
                </div>
            </header>

            <main className="bg-white min-h-screen">
                {/* Hero Skeleton */}
                <section className="relative h-[85vh] md:h-[95vh] w-full overflow-hidden flex items-center justify-center bg-[#0a192f]">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/50 to-[#020c1b] z-10" />

                    <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center mt-16 md:mt-0">
                        <div className="space-y-6 max-w-2xl mx-auto">
                            {/* Title Skeleton */}
                            <div className="space-y-4">
                                <div className="h-16 md:h-24 w-3/4 mx-auto bg-white/10 rounded animate-pulse" />
                                <div className="h-12 md:h-20 w-1/2 mx-auto bg-[#22C5C5]/20 rounded animate-pulse" />
                            </div>

                            {/* Subtitle Skeleton */}
                            <div className="space-y-2 pt-4">
                                <div className="h-5 w-full bg-white/5 rounded animate-pulse" />
                                <div className="h-5 w-2/3 mx-auto bg-white/5 rounded animate-pulse" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Sections Skeleton */}
                <div className="pt-16 md:pt-32 pb-20 bg-white space-y-20 md:space-y-32">
                    {/* Section 1 Skeleton */}
                    <section className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-center">
                            <div className="flex-1 space-y-6">
                                <div className="w-32 h-6 bg-[#22C5C5]/10 rounded-full animate-pulse" />
                                <div className="space-y-3">
                                    <div className="h-12 w-3/4 bg-slate-200 rounded animate-pulse" />
                                    <div className="h-12 w-1/2 bg-slate-200 rounded animate-pulse" />
                                </div>
                                <div className="w-20 h-1.5 bg-slate-300 rounded animate-pulse" />
                                <div className="space-y-3">
                                    <div className="h-6 w-full bg-slate-100 rounded animate-pulse" />
                                    <div className="h-6 w-4/5 bg-slate-100 rounded animate-pulse" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="aspect-[3/4] w-full max-w-md mx-auto bg-slate-200 rounded-sm shadow-2xl animate-pulse" />
                            </div>
                        </div>
                    </section>

                    {/* Values Section Skeleton */}
                    <section className="py-24 md:py-32 bg-[#050A14]">
                        <div className="container mx-auto px-6 lg:px-12 mb-16">
                            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                                <div className="h-12 w-48 bg-white/10 rounded animate-pulse" />
                                <div className="h-5 w-64 bg-white/5 rounded animate-pulse" />
                            </div>
                        </div>
                        <div className="container mx-auto px-4 lg:px-12 h-[600px] flex flex-col md:flex-row gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex-1 bg-white/5 rounded-3xl animate-pulse" />
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            {/* Simple Footer Skeleton */}
            <footer className="bg-[#042635] py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="space-y-4">
                                <div className="w-24 h-6 bg-white/10 rounded animate-pulse" />
                                <div className="space-y-2">
                                    {[1, 2, 3].map((j) => (
                                        <div key={j} className="w-full h-4 bg-white/5 rounded animate-pulse" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    )
}
