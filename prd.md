🧩 Plugin Name

obsidian-bangla-date-tag

🎯 Goal

Replace the tag {{bn-date}} in any note with a formatted Bangla and English date string.

🔧 Features

✅ 1. Register Command

Add a command to the Command Palette: Insert Bangla Date

When triggered, scan the active note for {{bn-date}}

Replace it with the formatted string

✅ 2. Bangla Date Formatter

Convert current Gregorian date to Bangla calendar format

Use Bangla weekday, Bangla month, and Bangla year

Format English date in Bangla numerals

✅ 3. Output Format

📅 বাংলা তারিখ: শনিবার, ১২ আশ্বিন ১৪৩২ । 📅 ইংরেজি তারিখঃ শনিবার, ২৭ সেপ্টেম্বর ২০২৫

🧰 Implementation Notes

📅 Bangla Date Logic

Weekdays: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"]

Months: ["বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন", "কার্তিক", "অগ্রহায়ণ", "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র"]

Use bangla-calendar-js or custom logic to convert Gregorian to Bangla date

Convert English numerals to Bangla: ["০","১","২","৩","৪","৫","৬","৭","৮","৯"]

🧠 Example Function

function convertToBanglaNumerals(input: string): string {
  const map = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };
  return input.replace(/\d/g, d => map[d]);
}

📁 Suggested File Structure

.obsidian/plugins/obsidian-bangla-date-tag/
├── main.ts
├── BanglaDate.ts
├── manifest.json

🧪 Testing

Create a note with {{bn-date}} or type {{bn-date}} inside any note

Run command → it replaces with full formatted string

Works in any note, not just daily notes
