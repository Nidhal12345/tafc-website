"use client"

import { motion } from "framer-motion"

// Single Product Card Skeleton
export function ProductCardSkeleton({ index = 0 }: { index?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="h-full"
        >
            <div className="h-full flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden">
                {/* Image Skeleton */}
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 animate-shimmer" />
                    {/* Badge placeholders */}
                    <div className="absolute top-3 left-3 flex gap-2">
                        <div className="w-16 h-6 bg-slate-200/70 rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Content Skeleton */}
                <div className="flex-1 p-5 flex flex-col">
                    <div className="flex-1">
                        {/* Latin name */}
                        <div className="w-24 h-3 bg-slate-200 rounded mb-2 animate-pulse" />

                        {/* Product name */}
                        <div className="w-full h-5 bg-slate-200 rounded mb-1 animate-pulse" />
                        <div className="w-3/4 h-5 bg-slate-200 rounded mb-4 animate-pulse" />

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-slate-200 rounded animate-pulse" />
                                <div className="w-20 h-4 bg-slate-200 rounded animate-pulse" />
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-slate-200 rounded animate-pulse" />
                                <div className="w-16 h-4 bg-slate-200 rounded animate-pulse" />
                            </div>
                        </div>
                    </div>

                    {/* Actions Skeleton */}
                    <div className="pt-4 mt-auto border-t border-slate-100 grid grid-cols-2 gap-3">
                        <div className="h-9 bg-slate-100 rounded-lg animate-pulse" />
                        <div className="h-9 bg-slate-200 rounded-lg animate-pulse" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

// Products Grid Skeleton
export function ProductsGridSkeleton({ count = 6 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
            {Array.from({ length: count }).map((_, i) => (
                <ProductCardSkeleton key={i} index={i} />
            ))}
        </div>
    )
}

// Product Detail Skeleton
export function ProductDetailSkeleton() {
    return (
        <div className="min-h-screen bg-slate-50/50 pb-24 md:pb-0">
            {/* Breadcrumb Skeleton */}
            <div className="hidden md:block sticky top-[80px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center gap-2">
                    <div className="w-20 h-4 bg-slate-200 rounded animate-pulse" />
                    <div className="w-4 h-4 bg-slate-200 rounded animate-pulse" />
                    <div className="w-24 h-4 bg-slate-200 rounded animate-pulse" />
                    <div className="w-4 h-4 bg-slate-200 rounded animate-pulse" />
                    <div className="w-32 h-4 bg-slate-200 rounded animate-pulse" />
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:py-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
                    {/* Left Column - Image Skeleton */}
                    <div className="lg:sticky lg:top-32 h-fit space-y-4">
                        <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-slate-100 shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 animate-shimmer" />
                        </div>

                        <div className="hidden lg:grid grid-cols-2 gap-3">
                            <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                <div className="w-full h-16 bg-slate-100 rounded animate-pulse" />
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                <div className="w-full h-16 bg-slate-100 rounded animate-pulse" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Details Skeleton */}
                    <div className="flex flex-col gap-6 md:gap-8 pt-0 md:pt-2">
                        {/* Category Badge */}
                        <div className="w-32 h-8 bg-slate-100 rounded-full animate-pulse" />

                        {/* Title */}
                        <div className="space-y-3">
                            <div className="w-full h-12 bg-slate-200 rounded animate-pulse" />
                            <div className="w-2/3 h-12 bg-slate-200 rounded animate-pulse" />
                            <div className="w-40 h-6 bg-slate-100 rounded animate-pulse" />
                        </div>

                        {/* Description */}
                        <div className="space-y-3">
                            <div className="w-full h-5 bg-slate-100 rounded animate-pulse" />
                            <div className="w-full h-5 bg-slate-100 rounded animate-pulse" />
                            <div className="w-3/4 h-5 bg-slate-100 rounded animate-pulse" />
                        </div>

                        {/* Mobile Specs */}
                        <div className="grid grid-cols-2 gap-3 lg:hidden">
                            <div className="bg-white p-3.5 rounded-xl border border-slate-200/60">
                                <div className="w-16 h-3 bg-slate-200 rounded mb-2 animate-pulse" />
                                <div className="w-24 h-5 bg-slate-100 rounded animate-pulse" />
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-slate-200/60">
                                <div className="w-12 h-3 bg-slate-200 rounded mb-2 animate-pulse" />
                                <div className="w-20 h-5 bg-slate-100 rounded animate-pulse" />
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden md:flex gap-4 pt-2">
                            <div className="flex-1 h-14 bg-[#25D366]/20 rounded-xl animate-pulse" />
                            <div className="flex-1 h-14 bg-slate-100 rounded-xl animate-pulse" />
                        </div>

                        {/* Separator */}
                        <div className="h-px bg-slate-200" />

                        {/* Usage & Packaging */}
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-4">
                                <div className="w-40 h-6 bg-slate-200 rounded animate-pulse" />
                                <div className="space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="bg-white p-3 rounded-xl border border-slate-100">
                                            <div className="w-full h-5 bg-slate-100 rounded animate-pulse" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="w-36 h-6 bg-slate-200 rounded animate-pulse" />
                                <div className="space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="bg-white p-3 rounded-xl border border-slate-100">
                                            <div className="w-full h-5 bg-slate-100 rounded animate-pulse" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

// Category Skeleton for sidebar
export function CategorySidebarSkeleton() {
    return (
        <div className="space-y-2">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                    key={i}
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                >
                    <div className="w-3/4 h-4 bg-slate-200 rounded" />
                </div>
            ))}
        </div>
    )
}
