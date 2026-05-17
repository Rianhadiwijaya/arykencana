# Ary Kencana React

Versi React/Vite dari website Ary Kencana. PHP dan SQLite lama sudah tidak dibutuhkan untuk frontend publik; data album/galeri hasil migrasi tersedia di `src/data.json`, dan aset gambar ada di `public/uploads`.

## Menjalankan

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
npm run preview
```

Catatan: panel admin PHP lama tidak disertakan sebagai backend React. Untuk admin dinamis, perlu dibuat API/backend terpisah.
