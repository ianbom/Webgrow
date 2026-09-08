export const services = [
  { number: "01", title: "Desain Website", description: "Merancang pengalaman website yang modern, mudah digunakan, dan konsisten dengan identitas bisnis Anda." },
  { number: "02", title: "Pengembangan Web", description: "Membangun website cepat, responsif, scalable, dan mudah dikembangkan menggunakan teknologi modern." },
  { number: "03", title: "E-Commerce", description: "Membangun toko online dengan alur belanja, pembayaran, katalog, dan manajemen produk yang terintegrasi." },
  { number: "04", title: "Aplikasi Web Custom", description: "Membangun dashboard, ERP, booking system, internal tools, portal, atau aplikasi web sesuai kebutuhan bisnis." },
  { number: "05", title: "Maintenance & Optimasi", description: "Pemeliharaan, peningkatan performa, debugging, keamanan, deployment, dan pengembangan fitur lanjutan." },
] as const;

export const projects = [
  { number: "01", title: "ManajemenSID", category: "ERP Platform · Full-stack Development", description: "Platform internal terpusat untuk menyederhanakan pengelolaan project, operasional HR, approval, reimbursement, dan alur kerja bisnis.", variant: "management" },
  { number: "02", title: "AxeGear", category: "E-Commerce · Web Development", description: "Platform e-commerce modern untuk perlengkapan outdoor dengan pengalaman belanja yang bersih, pengelolaan produk, dan pembayaran aman.", variant: "commerce" },
  { number: "03", title: "Dentalyze AI", category: "AI · Healthcare Technology", description: "Platform analisis dental berbasis AI untuk membantu deteksi objek, pengelolaan kasus, dan pelaporan klinis yang lebih cerdas.", variant: "dental" },
] as const;

export const values = [
  { number: "01", title: "Desain dengan tujuan", description: "Setiap keputusan desain dibuat untuk membantu pengguna memahami, mempercayai, dan mengambil tindakan." },
  { number: "02", title: "Dibangun untuk performa", description: "Kode bersih, arsitektur terstruktur, performa cepat, dan teknologi yang dapat dikembangkan." },
  { number: "03", title: "Dibangun untuk bisnis Anda", description: "Kami tidak memaksakan template. Solusi dirancang berdasarkan proses dan kebutuhan bisnis Anda." },
] as const;

export const processSteps = [
  ["01", "Discovery", "Kami memahami bisnis, target pengguna, kebutuhan, dan tujuan project."],
  ["02", "Strategi", "Kami menyusun struktur halaman, fitur, user flow, dan solusi teknis."],
  ["03", "Desain", "Kami menerjemahkan strategi menjadi interface yang modern dan mudah digunakan."],
  ["04", "Pengembangan", "Kami membangun website menggunakan teknologi yang sesuai dengan kebutuhan project."],
  ["05", "Rilis & Dukungan", "Testing, deployment, monitoring, dan dukungan setelah website diluncurkan."],
] as const;

export const technologyGroups = [
  { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Laravel", "Node.js", "FastAPI"] },
  { title: "Database", items: ["MySQL", "PostgreSQL"] },
  { title: "Infrastructure", items: ["Docker", "Nginx", "Cloud / VPS", "CI/CD"] },
] as const;

export const faqs = [
  ["Berapa biaya pembuatan website?", "Biaya bergantung pada kompleksitas desain, jumlah halaman, fitur, integrasi, dan kebutuhan bisnis. Setelah memahami kebutuhan project, kami akan memberikan estimasi biaya secara transparan."],
  ["Berapa lama proses pembuatan website?", "Website sederhana umumnya membutuhkan beberapa minggu, sementara aplikasi web dengan fitur kompleks dapat membutuhkan waktu lebih lama. Timeline akan ditentukan setelah scope project disepakati."],
  ["Apakah website bisa dikelola sendiri?", "Ya. Jika dibutuhkan, kami dapat menyediakan CMS atau dashboard agar konten website dapat dikelola tanpa harus mengubah kode."],
  ["Apakah bisa membuat website dari desain yang sudah tersedia?", "Bisa. Kami dapat mengimplementasikan desain dari Figma atau design system yang telah tersedia menjadi website production-ready."],
  ["Apakah menyediakan maintenance?", "Ya. Maintenance dapat mencakup monitoring, backup, debugging, pembaruan, optimasi performa, keamanan, dan pengembangan fitur lanjutan."],
  ["Apakah website dibuat responsive?", "Ya. Website dirancang agar dapat digunakan dengan baik pada desktop, tablet, dan mobile."],
] as const;
