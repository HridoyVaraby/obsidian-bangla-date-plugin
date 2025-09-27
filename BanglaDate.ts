import { getYear, getMonth, getDate as getBanglaDateOfMonth } from 'bangla-calendar';

const banglaWeekdays = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
const englishWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function convertToBanglaNumerals(input: string): string {
    const map: { [key: string]: string } = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };
    return input.replace(/\d/g, d => map[d]);
}

export function getFormattedBanglaDate(): string {
    const now = new Date();

    const banglaYear = getYear(now);
    const banglaMonth = getMonth(now);
    const banglaDateOfMonth = getBanglaDateOfMonth(now);

    const banglaWeekday = banglaWeekdays[now.getDay()];
    const englishWeekday = englishWeekdays[now.getDay()];

    const banglaDateString = `📅 বাংলা তারিখ: ${banglaWeekday}, ${convertToBanglaNumerals(banglaDateOfMonth)} ${banglaMonth}, ${convertToBanglaNumerals(banglaYear)}`;
    const englishDateString = `📅 ইংরেজি তারিখঃ ${englishWeekday}, ${now.getDate()} ${now.toLocaleString('en-US', { month: 'long' })} ${now.getFullYear()}`;

    return `${banglaDateString} । ${englishDateString}`;
}