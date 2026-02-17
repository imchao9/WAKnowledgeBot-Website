'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { ChangeEvent, useTransition } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className="relative inline-block text-left">
            <div className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                <Globe className="w-4 h-4 text-gray-500" />
                <select
                    defaultValue={locale}
                    className="bg-transparent text-sm font-medium text-gray-700 outline-none cursor-pointer appearance-none pr-4"
                    onChange={onSelectChange}
                    disabled={isPending}
                >
                    <option value="en">English</option>
                    <option value="zh">中文</option>
                </select>
            </div>
        </div>
    );
}
