# KRISTOFER SMP — موقع Minecraft (Static Site)
موقع ثابت (HTML/CSS/JS) بدون Build. كل التعديلات من `js/config.js`.

## الهيكل
index.html · css/style.css · js/config.js (الإعدادات) · js/api.js (الاتصالات) · js/app.js (الصفحات) · assets/ (صورك)

## أين أغيّر؟
1. Server IP → `server.ip`   2. Discord → `discord.invite`   3. الرتب → `ranks`
4. المتجر → `store` (روابط الدفع الحقيقية)   5. المصروفات → `expenses.items` (اكتب الرقم مكان null)
6. الأخبار والأحداث → `news` و `events`   7. باقي الأقسام: staff, rules, gallery, achievements, quests, commands, economy

## التشغيل محليًا
`python3 -m http.server 8000` ثم افتح http://localhost:8000

## الرفع المجاني
Netlify Drop / GitHub Pages / Cloudflare Pages: ارفع المجلد كما هو (لا Build).

## الـ API والبيانات
- حالة السيرفر (Online/لاعبين/إصدار): حقيقية من mcsrvstat.us.
- TPS/RAM/CPU، قائمة اللاعبين الكاملة، Playtime/Money/Kills: تظهر فقط عند ربط `api.metrics` و `api.players` برابط JSON عندك (Plan/PlaceholderAPI/Vault خلف proxy). غير ذلك: "Data unavailable".
- لا تضع أي مفتاح سري في المتصفح؛ ضعه في Backend/Serverless عبر Environment Variables.
- تسجيل دخول اللاعبين وسجل المعاملات يحتاجان Backend (غير مضمّن).
