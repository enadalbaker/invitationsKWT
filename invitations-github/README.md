# نظام الدعوات الإلكترونية (GitHub Pages + Firebase)

الصفحات: `admin.html` (أنت) — `client.html?e=ID` (العميل) — `scan.html?e=ID` (موظفو الحفل). الروابط تولّدها لك لوحة الإدارة.

## الإعداد (مجاني)
1. console.firebase.google.com ← مشروع جديد ← أضف تطبيق Web وانسخ الإعدادات إلى `firebase-config.js`.
2. Build ← Authentication ← فعّل Email/Password ← أنشئ مستخدماً (أنت) وانسخ الـ UID.
3. Build ← Firestore Database ← أنشئ قاعدة (Production) ← تبويب Rules ← الصق `firestore.rules` وبدّل `PASTE_ADMIN_UID` ← Publish.
4. ارفع كل الملفات إلى مستودع GitHub ← Settings ← Pages ← Deploy from branch (main / root).
5. افتح `https://USERNAME.github.io/REPO/admin.html` وسجّل دخولك.

## ملاحظة أمان
أي شخص يملك رابط الفعالية يستطيع إضافة/حذف ضيوف أو تسجيل مسح (المعرّف عشوائي وطويل). لا تنشر الروابط علناً.
