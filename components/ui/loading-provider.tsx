"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { AppLoadingScreen } from "./loading"

interface LoadingContextType {
    isLoading: boolean
    startLoading: () => void
    stopLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoading() {
    const context = useContext(LoadingContext)
    if (context === undefined) {
        throw new Error("useLoading must be used within a LoadingProvider")
    }
    return context
}

export function LoadingProvider({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(true) // Start true for initial load
    const pathname = usePathname()
    const searchParams = useSearchParams()

    // Initial load effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000) // Min display time for initial load branding

        return () => clearTimeout(timer)
    }, [])

    // Route change effect
    useEffect(() => {
        // When pathname changes, we could trigger loading, but Next.js app router 
        // transitions are usually handled by the framework. 
        // However, for significant changes or if we want to force it:

        // For now, we'll let the initial load be the main "app open" experience
        // and expose startLoading/stopLoading for specific actions like language switching
    }, [pathname, searchParams])

    const startLoading = () => setIsLoading(true)
    const stopLoading = () => setIsLoading(false)

    return (
        <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
            {isLoading && <AppLoadingScreen />}
            {children}
        </LoadingContext.Provider>
    )
}
