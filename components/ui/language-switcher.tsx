import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { localeMetadata, type Locale } from '@/i18n/routing'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react" // Removed Globe
import { FlagFR, FlagGB, FlagSA } from "@/components/icons/flag-icons"

const flagComponents = {
    fr: FlagFR,
    en: FlagGB,
    ar: FlagSA,
}

export function LanguageSwitcher() {
    const [mounted, setMounted] = useState(false)
    const locale = useLocale() as Locale
    const router = useRouter()
    const pathname = usePathname()

    // Prevent hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true)
    }, [])

    const currentLocale = localeMetadata[locale]
    const CurrentFlag = flagComponents[locale] || FlagFR

    const handleLocaleChange = (newLocale: Locale) => {
        router.replace(pathname, { locale: newLocale })
    }

    // Helper to get short code (e.g., 'en-US' -> 'EN')
    const getShortCode = (code: string) => code.split('-')[0].toUpperCase()

    // Show a placeholder button during SSR to prevent hydration mismatch
    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="sm"
                className="h-10 px-3 flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-slate-300 transition-all duration-300 text-slate-700"
            >
                <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-slate-100 shadow-sm border border-slate-100">
                    {/* Default fallback if unmounted, or just empty space to reduce layout shift */}
                    <span className="opacity-0">..</span>
                </div>
                <span className="font-semibold text-xs tracking-wide">
                    {getShortCode(locale)}
                </span>
                <ChevronDown className="w-3 h-3 opacity-50" />
            </Button>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 px-3 flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-slate-300 transition-all duration-300 text-slate-700 outline-none ring-0 focus-visible:ring-2 focus-visible:ring-tafc-gold/20"
                >
                    <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center shadow-sm border border-slate-100 relative">
                        <CurrentFlag className="w-full h-full object-cover" />
                    </div>
                    <span className="font-semibold text-xs tracking-wide">
                        {getShortCode(locale)}
                    </span>
                    <ChevronDown className="w-3 h-3 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="min-w-[160px] p-2 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-xl shadow-xl shadow-slate-200/50 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
            >
                {(Object.keys(localeMetadata) as Locale[]).map((loc) => {
                    const Flag = flagComponents[loc]
                    return (
                        <DropdownMenuItem
                            key={loc}
                            onClick={() => handleLocaleChange(loc)}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${loc === locale
                                ? 'bg-slate-50 text-tafc-deep-navy font-semibold'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center shadow-sm border border-slate-100 relative">
                                    <Flag className="w-full h-full object-cover" />
                                </div>
                                <span className="text-sm">
                                    {localeMetadata[loc].nativeName}
                                </span>
                            </div>
                            {loc === locale && (
                                <div className="w-1.5 h-1.5 rounded-full bg-tafc-gold" />
                            )}
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
