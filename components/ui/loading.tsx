"use client"

import { motion } from "framer-motion"

export function LoadingSpinner({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
    const sizeClasses = {
        sm: "w-4 h-4",
        md: "w-8 h-8",
        lg: "w-12 h-12"
    }

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <motion.div
                className={`${sizeClasses[size]} relative`}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute inset-0 rounded-full border-2 border-[#22C5C5]/20" />
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#22C5C5]" />
            </motion.div>
        </div>
    )
}

export function LoadingDots({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center justify-center gap-1.5 ${className}`}>
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#22C5C5]"
                    initial={{ opacity: 0.3, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.15,
                    }}
                />
            ))}
        </div>
    )
}

export function LoadingPulse({ className = "" }: { className?: string }) {
    return (
        <motion.div
            className={`w-full h-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 ${className}`}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
            }}
            style={{
                backgroundSize: "200% 100%",
            }}
        />
    )
}

// Premium App Loading Screen
export function AppLoadingScreen() {
    return (
        <div className="fixed inset-0 z-[9999] bg-slate-50 flex flex-col items-center justify-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#042635_1px,_transparent_1px)] bg-[length:32px_32px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/50 to-slate-100" />
            </div>

            {/* Logo Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative mb-12"
            >
                {/* Animated Rings */}
                <motion.div
                    className="absolute -inset-8 rounded-full border border-[#22C5C5]/10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                    className="absolute -inset-8 rounded-full border border-[#22C5C5]/10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeOut" }}
                />

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#22C5C5]/20 blur-3xl rounded-full" />

                {/* Logo Container */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-3xl flex items-center justify-center border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
                    <img
                        src="/logo.png"
                        alt="TAFC"
                        className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                    />
                </div>
            </motion.div>

            {/* Brand Name */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center z-10"
            >
                <h1 className="text-3xl font-bold text-[#042635] tracking-tight mb-2 font-sora">TAFC</h1>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#22C5C5] to-transparent mx-auto mb-2" />
                <p className="text-sm text-slate-500 font-medium tracking-[0.2em] uppercase">Premium Seafood</p>
            </motion.div>
        </div>
    )
}

// Page Loading Skeleton
export function PageLoadingSkeleton() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header Skeleton */}
            <div className="h-20 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
                <div className="w-24 h-8 bg-slate-200 rounded animate-pulse" />
                <div className="flex gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-16 h-4 bg-slate-200 rounded animate-pulse" />
                    ))}
                </div>
            </div>

            {/* Content Skeleton */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Hero Skeleton */}
                <div className="h-[400px] bg-slate-200 rounded-2xl mb-12 animate-pulse" />

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="space-y-4">
                            <div className="aspect-[4/3] bg-slate-200 rounded-xl animate-pulse" />
                            <div className="space-y-2">
                                <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse" />
                                <div className="h-4 w-1/2 bg-slate-200 rounded animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
