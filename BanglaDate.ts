import { getYear, getMonth, getDate as getBanglaDateOfMonth } from 'bangla-calendar';

const banglaWeekdays = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];

const englishToBanglaMonths: { [key: string]: string } = {
    "January": "জানুয়ারি",
    "February": "ফেব্রুয়ারি",
    "March": "মার্চ",
    "April": "এপ্রিল",
    "May": "মে",
    "June": "জুন",
    "July": "জুলাই",
    "August": "আগস্ট",
    "September": "সেপ্টেম্বর",
    "October": "অক্টোবর",
    "November": "নভেম্বর",
    "December": "ডিসেম্বর"
};

function convertToBanglaNumerals(input: number | string): string {
    const strInput = String(input);
    const map: { [key: string]: string } = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };
    return strInput.replace(/\d/g, d => map[d]);
}

export function getFormattedBanglaDate(): string {
    const now = new Date();

    // Bangla Date Components
    const banglaYear = getYear(now);
    const banglaMonth = getMonth(now);
    const banglaDateOfMonth = getBanglaDateOfMonth(now);
    const banglaWeekday = banglaWeekdays[now.getDay()];

    // English Date Components
    const englishDay = now.getDate();
    const englishMonthName = now.toLocaleString('en-US', { month: 'long' });
    const banglaMonthNameForEnglishDate = englishToBanglaMonths[englishMonthName];
    const englishYear = now.getFullYear();

    const banglaDateString = `📅 বারঃ ${banglaWeekday}; বাংলা তারিখ: ${convertToBanglaNumerals(banglaDateOfMonth)} ${banglaMonth}, ${convertToBanglaNumerals(banglaYear)}`;

    const englishDateString = `📅 ইংরেজি তারিখঃ ${convertToBanglaNumerals(englishDay)} ${banglaMonthNameForEnglishDate}, ${convertToBanglaNumerals(englishYear)} ;`;

    return `${banglaDateString} । ${englishDateString}`;
}