# DESIGN.md — Webgrow-Inspired Landing Page Design System

> Dokumen ini menjadi **single source of truth** untuk membangun landing page dengan bahasa visual yang diambil dari referensi feed: minimal, modern, editorial, tech-forward, dominan off-white + hitam dengan aksen acid/lime green, tipografi besar, whitespace luas, dan bentuk lengkung/orbit sebagai identitas visual utama.

---

## 1. Design Direction

### 1.1. Brand impression
Landing page harus terasa:

- Modern
- Minimal
- Premium
- Tech-forward
- Editorial
- Clean
- Confident
- Friendly, tetapi bukan playful berlebihan
- Futuristic secara halus, bukan sci-fi
- Berani melalui skala tipografi, bukan melalui banyak dekorasi

### 1.2. Core visual formula

Gunakan formula utama berikut di seluruh halaman:

**Large typography + generous whitespace + acid-lime accent + oversized curved geometry + restrained UI**

Setiap section sebaiknya hanya memiliki **1 fokus visual utama**. Jangan memenuhi layar dengan terlalu banyak card, icon, badge, dan ilustrasi.

### 1.3. Visual hierarchy

Urutan perhatian yang diharapkan:

1. Headline / key message
2. Brand accent / visual geometry
3. Primary CTA
4. Supporting copy
5. Secondary information

---

# 2. Color System

Warna di bawah distandarkan dari karakter visual referensi. Nilainya dibuat konsisten untuk kebutuhan web.

## 2.1. Core colors

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#F2F5EC` | Background utama |
| `--color-surface` | `#FFFFFF` | Card / panel / surface |
| `--color-ink` | `#161715` | Heading dan text utama |
| `--color-ink-soft` | `#656861` | Body text sekunder |
| `--color-lime` | `#CFF858` | Aksen utama |
| `--color-lime-strong` | `#C4EF35` | CTA / highlight yang lebih kuat |
| `--color-lime-soft` | `#E2F8A1` | Soft accent / glow / decorative area |
| `--color-line` | `#D9DDD3` | Border tipis |
| `--color-muted` | `#A1A59D` | Caption / inactive state |

## 2.2. Color ratio

Gunakan proporsi:

- **70–80%** off-white / neutral background
- **15–20%** black / dark text
- **5–10%** lime accent

Lime harus menjadi aksen yang strategis, bukan warna dominan seluruh halaman.

## 2.3. Background rules

Default:

```css
background: #F2F5EC;
color: #161715;
```

Section alternatif:

```css
background: #161715;
color: #F2F5EC;
```

Dark section hanya digunakan untuk maksimal **1–2 section** agar identitas halaman tetap ringan dan terang.

## 2.4. Accent usage

Lime digunakan untuk:

- CTA utama
- Underline / highlight kata
- Active state
- Logo tile / icon background
- Curved wave / orbital line
- Small visual markers
- Selected tabs
- Hover accent

Jangan gunakan lime untuk body text panjang.

---

# 3. Typography

## 3.1. Font family

Karena sumber font dari gambar raster tidak dapat diverifikasi secara pasti, gunakan sistem berikut untuk menghasilkan karakter visual yang sangat dekat.

### Primary font

**Inter Tight**

Digunakan untuk:
- Display heading
- H1–H3
- Navigation
- Buttons
- Labels

Fallback:

```css
font-family: "Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### Secondary/body font

**Inter**

Digunakan untuk:
- Paragraph
- Long-form copy
- Captions
- Form elements

Fallback:

```css
font-family: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### Alternative premium grotesk

Jika tersedia secara legal:

- Neue Montreal
- Satoshi
- General Sans
- Suisse Intl

Tetap gunakan **satu family utama secara konsisten**.

---

# 4. Type Scale

## 4.1. Desktop

### Display XL
Untuk hero headline utama.

```css
font-size: clamp(64px, 7vw, 112px);
line-height: 0.90;
font-weight: 700;
letter-spacing: -0.055em;
```

### H1

```css
font-size: clamp(56px, 6vw, 88px);
line-height: 0.94;
font-weight: 700;
letter-spacing: -0.05em;
```

### H2

```css
font-size: clamp(40px, 4.5vw, 64px);
line-height: 0.98;
font-weight: 650;
letter-spacing: -0.045em;
```

### H3

```css
font-size: 32px;
line-height: 1.05;
font-weight: 650;
letter-spacing: -0.03em;
```

### Body Large

```css
font-size: 22px;
line-height: 1.35;
font-weight: 500;
letter-spacing: -0.02em;
```

### Body

```css
font-size: 17px;
line-height: 1.55;
font-weight: 450;
letter-spacing: -0.01em;
```

### Small

```css
font-size: 14px;
line-height: 1.45;
font-weight: 500;
```

### Eyebrow / Label

```css
font-size: 12px;
line-height: 1.2;
font-weight: 600;
letter-spacing: 0.12em;
text-transform: uppercase;
```

## 4.2. Mobile

Hero:

```css
font-size: clamp(48px, 15vw, 72px);
line-height: 0.91;
```

H2:

```css
font-size: 40px;
line-height: 0.95;
```

Body Large:

```css
font-size: 18px;
line-height: 1.4;
```

## 4.3. Typography rules

- Headline boleh terdiri dari 2–4 baris.
- Utamakan line break yang disengaja.
- Gunakan tracking negatif pada heading besar.
- Jangan menggunakan ALL CAPS untuk headline panjang.
- ALL CAPS hanya untuk eyebrow / small label.
- Maksimal panjang body text: **58–68 characters per line**.
- Hindari font weight 900; desain harus terasa kuat tetapi tidak berat.

---

# 5. Layout System

## 5.1. Container

```css
max-width: 1440px;
margin-inline: auto;
padding-inline: clamp(20px, 5vw, 72px);
```

Untuk content reading:

```css
max-width: 720px;
```

Untuk section editorial:

```css
max-width: 1200px;
```

## 5.2. Grid

Desktop:

- 12-column grid
- Gap: `24px`
- Outer margin: `48–72px`

Tablet:

- 8-column grid
- Gap: `20px`

Mobile:

- 4-column grid
- Gap: `16px`
- Outer margin: `20–24px`

## 5.3. Section spacing

Desktop:

```css
padding-block: clamp(96px, 10vw, 160px);
```

Mobile:

```css
padding-block: 72px;
```

Hero dapat memakai tinggi:

```css
min-height: 90svh;
```

Tetapi jangan membuat content terasa terlalu jauh terpisah.

## 5.4. Whitespace principle

Whitespace adalah bagian dari desain.

Setiap section harus memiliki ruang napas yang jelas, namun **hindari empty area yang tidak memiliki fungsi visual**.

Gunakan whitespace untuk:

- Memisahkan hierarchy
- Membuat headline lebih dominan
- Memberi ruang pada decorative curves
- Menjaga tampilan premium

---

# 6. Spacing Scale

Gunakan skala konsisten:

| Token | Value |
|---|---:|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 24px |
| `space-6` | 32px |
| `space-7` | 48px |
| `space-8` | 64px |
| `space-9` | 96px |
| `space-10` | 128px |
| `space-11` | 160px |

Gunakan 24 / 32 / 48 / 64 / 96 sebagai spacing utama.

---

# 7. Border Radius

Desain menggunakan bentuk modern dengan radius lembut.

| Element | Radius |
|---|---:|
| Small control | 10px |
| Button | 999px |
| Card | 20px |
| Large media | 28px |
| Feature tile | 24px |
| Logo tile | 20–24px |

Jangan gunakan radius berbeda-beda secara acak.

---

# 8. Borders

Border harus tipis dan understated.

```css
border: 1px solid #D9DDD3;
```

Pada dark surface:

```css
border-color: rgba(255,255,255,0.14);
```

Jangan gunakan border tebal kecuali untuk elemen grafis.

---

# 9. Shadows

Desain referensi hampir flat.

Gunakan shadow hanya untuk layering ringan.

```css
box-shadow:
  0 12px 40px rgba(22, 23, 21, 0.06);
```

Untuk floating card:

```css
box-shadow:
  0 20px 60px rgba(22, 23, 21, 0.08);
```

Hindari heavy drop shadow.

---

# 10. Signature Curved Geometry

Bentuk lengkung adalah identitas visual paling penting dari referensi.

## 10.1. Bentuk

Gunakan:

- Large ellipse
- Arc
- Orbital line
- Wide curved band
- Half-circle
- Soft radial layer

Bukan wave organik yang terlalu cair.

## 10.2. Lime arc

Contoh:

```css
border: 2px solid #C4EF35;
border-radius: 50%;
```

Gunakan ellipse berukuran jauh lebih besar dari viewport, misalnya:

```css
width: 140vw;
height: 70vw;
```

dan diposisikan sebagian keluar viewport.

## 10.3. Lime band

Untuk membuat visual seperti feed:

- Lime band berbentuk arc besar
- Ketebalan 70–160px desktop
- Background `#CFF858`
- Dapat diberi subtle blur / gradient hanya untuk depth

Contoh:

```css
background: linear-gradient(
  180deg,
  #D8FF70 0%,
  #C4EF35 100%
);
```

Gradient tidak boleh menjadi karakter utama; tetap terlihat seperti satu warna lime.

## 10.4. Layering

Urutan layer ideal:

1. Off-white background
2. Thin lime orbital line
3. Large lime curved band
4. White/off-white foreground curve
5. Content / logo / mockup

## 10.5. Rules

- Maksimal 1–2 curved geometry besar per viewport.
- Jangan memakai terlalu banyak wave kecil.
- Curve harus terasa seperti bagian dari sistem brand.
- Decorative geometry tidak boleh mengganggu readability.

---

# 11. Logo / Brand Tile

Karakter tile dari referensi:

```css
width: 160px;
aspect-ratio: 1;
background: #CFF858;
border-radius: 22px;
display: grid;
place-items: center;
```

Icon:

- Solid black
- Geometrik
- Tebal
- Minimal
- Tidak memakai outline rumit

Pada mobile:

```css
width: 112px;
```

---

# 12. Buttons

## 12.1. Primary button

```css
height: 52px;
padding-inline: 26px;
border-radius: 999px;
background: #161715;
color: #FFFFFF;
font-weight: 600;
font-size: 15px;
```

Hover:

```css
background: #C4EF35;
color: #161715;
transform: translateY(-2px);
```

## 12.2. Lime CTA

```css
background: #CFF858;
color: #161715;
```

Hover:

```css
background: #C4EF35;
```

## 12.3. Secondary button

```css
background: transparent;
color: #161715;
border: 1px solid #161715;
```

## 12.4. Button rules

- Gunakan pill shape.
- Maksimal 2 CTA bersebelahan.
- Hindari button penuh icon.
- Icon arrow dapat digunakan di kanan.
- Button tidak boleh terlalu tinggi atau bulky.

---

# 13. Navigation

Desktop navbar:

- Height: `76–88px`
- Background: transparent pada hero
- Sticky/fixed diperbolehkan
- Logo kiri
- Links tengah/kanan
- CTA kanan
- Horizontal padding mengikuti container

Saat scroll:

```css
background: rgba(242,245,236,.88);
backdrop-filter: blur(16px);
border-bottom: 1px solid rgba(22,23,21,.08);
```

Navigation font:

```css
font-size: 14px;
font-weight: 550;
```

Mobile:

- Logo kiri
- Menu trigger kanan
- Full-screen / sheet menu
- Hindari desktop nav yang dipaksa kecil

---

# 14. Hero Section

Hero harus menjadi adaptasi web dari komposisi referensi.

## 14.1. Recommended structure

```text
Navbar

Eyebrow / small intro

Large headline
"Introducing,
your digital growth."

Supporting copy

Primary CTA + secondary CTA

Oversized lime curve / orbit

Central visual:
brand tile / website mockup / browser / device

Optional trust indicator
```

## 14.2. Alignment

Dua pola yang diperbolehkan:

### Centered editorial
Cocok untuk brand introduction.

### Left-aligned editorial
Cocok untuk conversion-focused landing page.

Jangan mencampurkan centered heading dengan body panjang yang terasa tidak terhubung.

## 14.3. Hero visual

Visual yang cocok:

- Browser mockup
- Laptop / desktop screen
- UI composition
- Floating brand tile
- Minimal product visualization

Hindari:
- Stock illustration generik
- 3D object berlebihan
- Banyak floating icons

---

# 15. Highlighted Text

Gunakan lime sebagai highlight pada 1–3 kata kunci.

Contoh:

```html
<span class="highlight">grow</span>
```

Style:

```css
background:
  linear-gradient(
    transparent 68%,
    #CFF858 68%
  );
```

Atau gunakan underline curved SVG.

Jangan memberi highlight pada seluruh kalimat.

---

# 16. Cards

Cards harus sederhana.

```css
background: #FFFFFF;
border: 1px solid #D9DDD3;
border-radius: 20px;
padding: 28px;
```

Card anatomy:

- Small label/icon
- Heading
- Short copy
- Optional arrow/link

Jangan menampilkan lebih dari 3–4 card per row pada desktop.

Jika terlalu banyak fitur, gunakan horizontal scroll atau alternating section.

---

# 17. Service Section

Rekomendasi layout:

### Option A — editorial list

```text
01  Web Design
    Description                         →

02  Web Development
    Description                         →

03  E-commerce
    Description                         →
```

Divider tipis di antara row.

### Option B — 3 feature cards

Card tetap low-density dan whitespace-heavy.

---

# 18. Portfolio / Work Section

Gunakan visual besar.

Recommended:

- 1 project utama per row
- 60–70% image/mockup
- 30–40% title + metadata
- Alternating alignment diperbolehkan

Image container:

```css
aspect-ratio: 16 / 10;
border-radius: 28px;
overflow: hidden;
```

Hover:

- scale image maksimal `1.02`
- arrow translate ringan
- tidak ada aggressive zoom

---

# 19. Metrics / Social Proof

Gunakan angka besar, sedikit elemen.

Contoh:

```text
10+
Projects delivered

4
National awards

50%
Less manual processing
```

Number:

```css
font-size: clamp(56px, 7vw, 96px);
line-height: .9;
letter-spacing: -.05em;
```

Boleh menggunakan lime sebagai separator, bukan semua angka lime.

---

# 20. Testimonial

Layout editorial:

- Large quote
- Small avatar
- Name
- Role/company

Quote:

```css
font-size: clamp(32px, 4vw, 56px);
line-height: 1.05;
letter-spacing: -0.035em;
```

Hindari carousel auto-play cepat.

---

# 21. CTA Section

CTA akhir harus kuat tetapi sederhana.

Recommended visual:

```text
Large headline:
"Ready to build
something better?"

Short copy

[Start a project →]

Large lime orbital curve in background
```

Boleh menggunakan full lime background untuk satu CTA section:

```css
background: #CFF858;
color: #161715;
```

Jika full lime digunakan, kurangi decorative element lainnya.

---

# 22. Footer

Footer dapat menggunakan dark background.

```css
background: #161715;
color: #F2F5EC;
```

Structure:

- Brand + short statement
- Navigation
- Social links
- Contact
- Copyright

Accent lime untuk hover / small marker.

Spacing footer:

```css
padding-top: 96px;
padding-bottom: 32px;
```

---

# 23. Iconography

Gunakan icon:

- Minimal
- Stroke 1.5–2px
- Rounded atau geometric
- Konsisten

Recommended libraries:

- Lucide
- Phosphor
- Tabler Icons

Jangan mencampurkan lebih dari satu icon library tanpa kebutuhan jelas.

---

# 24. Image Style

Jika menggunakan photography:

- Neutral white / gray background
- Clean composition
- High contrast subject
- Editorial framing
- Tidak terlalu saturated

Jika menggunakan website/device mockup:

- Realistic
- Front-facing atau perspective ringan
- Banyak whitespace
- Screen content harus jelas
- Tidak perlu efek glowing berlebihan

---

# 25. Motion & Interaction

Motion harus subtle dan premium.

## 25.1. Timing

Micro interaction:

```css
150–220ms
```

Section reveal:

```css
450–700ms
```

## 25.2. Easing

Recommended:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

## 25.3. Allowed motion

- Fade + translateY 12–24px
- Character/line reveal pada hero
- Gentle parallax pada giant curves
- Button arrow movement 4–6px
- Image scale 1 → 1.02
- Orbital line slow drift

## 25.4. Avoid

- Bounce
- Excessive spring
- Constant spinning
- Floating objects di seluruh page
- Heavy scroll-jacking
- Animation yang menunda content

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 26. Responsive Rules

## Desktop ≥ 1280px

- Container maksimal 1440px
- Full typographic scale
- Large curved geometry
- Multi-column layouts diperbolehkan

## Tablet 768–1279px

- Headline turun 15–25%
- Curves tetap besar tetapi lebih banyak keluar viewport
- 2-column card grid
- Hero visual tidak boleh menabrak copy

## Mobile < 768px

- Padding horizontal `20–24px`
- Semua major section stack vertical
- Hero headline 48–64px
- Curves dipotong secara intentional
- CTA dapat full-width bila dibutuhkan
- Cards 1 column
- Body text maksimal 18px
- Decorative shapes tidak boleh membuat horizontal overflow

Always:

```css
overflow-x: clip;
```

pada root/page wrapper jika menggunakan oversized decorative curve.

---

# 27. Accessibility

Minimum:

- Contrast body text ≥ WCAG AA
- Focus ring harus terlihat
- Semua interactive element memiliki keyboard state
- Font body minimal 16px
- Touch target minimal 44 × 44px
- Jangan mengandalkan lime saja untuk state/error
- Alt text untuk meaningful images
- Respect reduced motion

Focus:

```css
outline: 2px solid #C4EF35;
outline-offset: 3px;
```

---

# 28. Design Tokens

```css
:root {
  /* Colors */
  --bg: #F2F5EC;
  --surface: #FFFFFF;
  --ink: #161715;
  --ink-soft: #656861;
  --lime: #CFF858;
  --lime-strong: #C4EF35;
  --lime-soft: #E2F8A1;
  --line: #D9DDD3;
  --muted: #A1A59D;

  /* Radius */
  --radius-sm: 10px;
  --radius-md: 20px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  /* Container */
  --container: 1440px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;
  --space-11: 160px;

  /* Motion */
  --ease-premium: cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

# 29. Suggested Tailwind Theme Mapping

Jika menggunakan Tailwind CSS:

```js
colors: {
  background: "#F2F5EC",
  surface: "#FFFFFF",
  ink: "#161715",
  "ink-soft": "#656861",
  lime: "#CFF858",
  "lime-strong": "#C4EF35",
  "lime-soft": "#E2F8A1",
  line: "#D9DDD3",
  muted: "#A1A59D",
}
```

Font:

```js
fontFamily: {
  display: ["Inter Tight", "Helvetica Neue", "Arial", "sans-serif"],
  sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
}
```

---

# 30. Recommended Page Structure

Urutan landing page yang paling sesuai dengan design language ini:

1. **Navbar**
2. **Hero / Brand Introduction**
3. **Short positioning statement**
4. **Services**
5. **Featured Projects**
6. **Why Us / Value Proposition**
7. **Metrics**
8. **Process**
9. **Testimonials**
10. **Final CTA**
11. **Footer**

Jangan membuat setiap section menjadi card grid. Variasikan antara:

- Editorial text
- Large visual
- Horizontal list
- Split layout
- Full-width statement
- Curved brand moment

---

# 31. Do / Don't

## DO

- Gunakan headline besar.
- Gunakan banyak negative space.
- Jadikan lime sebagai signature color.
- Gunakan curve/orbit secara konsisten.
- Pertahankan UI sederhana.
- Prioritaskan typography dan hierarchy.
- Gunakan media/mockup besar daripada banyak thumbnail.
- Gunakan layout editorial.
- Pastikan tiap viewport memiliki focal point yang jelas.

## DON'T

- Jangan gunakan gradient ungu/biru ala SaaS generik.
- Jangan gunakan glassmorphism sebagai gaya utama.
- Jangan menggunakan neon glow berlebihan.
- Jangan membuat setiap section penuh card.
- Jangan memakai terlalu banyak icon.
- Jangan memakai lebih dari 2 font family.
- Jangan menggunakan 5+ warna aksen.
- Jangan membuat border/shadow berat.
- Jangan menggunakan radius yang terlalu besar pada semua elemen.
- Jangan membuat tampilan terlalu corporate atau terlalu playful.

---

# 32. Visual Quality Checklist

Sebelum halaman dianggap selesai, pastikan:

- [ ] Background utama terasa warm/off-white, bukan pure gray.
- [ ] Headline memiliki tight letter spacing.
- [ ] Lime hanya menjadi aksen strategis.
- [ ] Curved geometry muncul secara konsisten.
- [ ] Tidak ada section yang terlalu ramai.
- [ ] Body copy memiliki panjang baris nyaman.
- [ ] CTA terlihat jelas dalam 3 detik pertama.
- [ ] Card memiliki border/shadow yang sangat subtle.
- [ ] Mobile tetap memiliki whitespace yang cukup.
- [ ] Decorative element tidak menyebabkan overflow.
- [ ] Semua section memiliki alignment yang jelas.
- [ ] Hero memiliki satu focal message dan satu focal visual.
- [ ] Desain tetap terlihat baik tanpa animation.
- [ ] Hover dan focus state konsisten.
- [ ] Seluruh halaman terasa berasal dari satu brand system.

---

# 33. Final Design Principle

Jika harus memilih antara **menambahkan elemen baru** atau **memperbesar impact dari elemen yang sudah ada**, pilih opsi kedua.

Desain ini harus terasa percaya diri karena:

- typography,
- scale,
- spacing,
- contrast,
- composition,

bukan karena banyak ornament.

**Keep it bold. Keep it clean. Keep it lime.**
