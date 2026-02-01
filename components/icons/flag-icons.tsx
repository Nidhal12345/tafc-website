import Image from 'next/image';

interface FlagProps {
    className?: string;
}

// Local flag image paths (Icons8 SVG flags)
const FLAGS = {
    france: '/icons8-france.svg',
    uk: '/icons8-united-kingdom.svg',
    saudiArabia: '/icons8-saudi-arabia.svg',
} as const;

export const FlagFR = ({ className }: FlagProps) => (
    <Image
        src={FLAGS.france}
        alt="Français"
        width={24}
        height={24}
        className={className}
        priority
    />
);

export const FlagGB = ({ className }: FlagProps) => (
    <Image
        src={FLAGS.uk}
        alt="English"
        width={24}
        height={24}
        className={className}
        priority
    />
);

export const FlagSA = ({ className }: FlagProps) => (
    <Image
        src={FLAGS.saudiArabia}
        alt="العربية"
        width={24}
        height={24}
        className={className}
        priority
    />
);
