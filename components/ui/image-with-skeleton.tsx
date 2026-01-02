"use client"

import { useState, useCallback } from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ImageWithSkeletonProps extends Omit<ImageProps, "onLoad"> {
    skeletonClassName?: string
}

export function ImageWithSkeleton({
    className,
    skeletonClassName,
    alt,
    ...props
}: ImageWithSkeletonProps) {
    const [isLoading, setIsLoading] = useState(true)

    const handleLoad = useCallback(() => {
        setIsLoading(false)
    }, [])

    return (
        <>
            {/* Skeleton/Shimmer effect - uses absolute positioning from parent */}
            {isLoading && (
                <div
                    className={cn(
                        "absolute inset-0 z-10 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-shimmer bg-[length:200%_100%]",
                        skeletonClassName
                    )}
                    aria-hidden="true"
                />
            )}

            {/* Actual image */}
            <Image
                {...props}
                alt={alt}
                className={cn(
                    "transition-opacity duration-500",
                    isLoading ? "opacity-0" : "opacity-100",
                    className
                )}
                onLoad={handleLoad}
            />
        </>
    )
}
