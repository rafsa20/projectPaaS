Rafsa Rayhan Saputra/16/XII SIJA B
# 📦 Aplikasi Manajemen Data Pengguna (Ujian Praktik Railway)

## 🧠 Deskripsi
Aplikasi ini dibuat untuk keperluan **ujian praktik** pada mata pelajaran **Sistem Informasi, Jaringan, dan Aplikasi (PaaS)**.  
Tujuan utamanya adalah mengintegrasikan **database PostgreSQL di Railway** dengan **aplikasi Node.js + Express**, serta memanfaatkan **storage lokal** untuk penyimpanan file gambar pengguna.

Aplikasi ini memungkinkan pengguna untuk:
- Menginput **nama**, **email**, dan **foto profil**
- Menyimpan data ke **database PostgreSQL**
- Menyimpan foto ke folder **storage**
- Menampilkan daftar pengguna yang sudah disimpan

---

## ⚙️ Teknologi yang Digunakan
- **Node.js** (runtime server)
- **Express.js** (framework backend)
- **PostgreSQL (Railway)** (database)
- **Multer** (upload file)
- **dotenv** (environment variables)
- **EJS** (tampilan HTML dinamis)

---

## 🗂️ Struktur Folder
```
user-manager/
│-- server.js          # File utama server
│-- .env               # Menyimpan konfigurasi rahasia
│-- views/
│   └─ index.ejs       # Tampilan form & daftar pengguna
│-- storage/           # Folder penyimpanan file upload
│-- package.json       # Dependency dan script Node.js
│-- README.md          # Dokumentasi proyek
```

<img width="311" height="393" alt="image" src="https://github.com/user-attachments/assets/f20b3c36-3dfe-4457-94f5-d2c74c036917" />


## 🧩 Instalasi dan Konfigurasi

### 1. Siapkan Database di Railway
1. Login ke [https://railway.app](https://railway.app)
<img width="552" height="228" alt="image" src="https://github.com/user-attachments/assets/cdbda941-96f2-4dc6-926e-b759046abc11" />


2. Buat project baru → pilih **Provision PostgreSQL**
3. Setelah database aktif, klik **Connect**
4. Salin **Database URL**, contohnya:
   postgresql://postgres:IfyUuymSiJiSZzqhmtCYvpDCMmMLfIiG@yamanote.proxy.rlwy.net:35648/railway

5. Simpan ke file `.env` di proyek (lihat di bawah).

### 2. Konfigurasi `.env`
Buat file `.env` di root proyek dan isi seperti berikut:
```env
DATABASE_URL=postgresql://username:password@host:port/dbname
STORAGE_PATH=./storage
PORT=3000
```
<img width="1118" height="159" alt="image" src="https://github.com/user-attachments/assets/dc2d71ce-270f-4676-a1dd-1680d7f9f28a" />

---

### 3. Instal Dependensi
Buka terminal di folder proyek, lalu jalankan:
```bash
npm install
```

Dependensi yang digunakan:
- express
- pg
- multer
- dotenv
- ejs

---

### 4. Jalankan Aplikasi
Jalankan server dengan:
```bash
node server.js
```

Jika berhasil, terminal akan menampilkan:
```
✅ Table 'users' siap
🚀 Server berjalan di http://localhost:3000
```

Buka di browser: [http://localhost:3000](http://localhost:3000)

---

## 🖥️ Cara Penggunaan
1. Isi form dengan **nama**, **email**, dan **unggah foto**.
2. Klik tombol **Simpan**.
3. Data akan tersimpan di:
   - Database PostgreSQL (nama & email)
   - Folder `/storage` (foto profil)
4. Semua data pengguna yang tersimpan akan tampil di bawah form.

---

## 🧱 Struktur Tabel Database
Nama tabel: **users**

| Kolom | Tipe Data | Keterangan |
|-------|------------|------------|
| id | SERIAL PRIMARY KEY | ID unik |
| name | VARCHAR(100) | Nama pengguna |
| email | VARCHAR(100) | Alamat email |
| photo | VARCHAR(255) | Nama file foto yang diunggah |

---

## 🌐 Deployment ke Railway (Opsional)
1. Push project ke GitHub.
2. Di Railway, buat project baru → **Deploy from GitHub**.
3. Tambahkan **Environment Variables**:
   | Key | Value |
   |-----|--------|
   | DATABASE_URL | (dari PostgreSQL Railway) |
   | STORAGE_PATH | `./storage` |
   | PORT | `3000` |

   <img width="612" height="295" alt="image" src="https://github.com/user-attachments/assets/531e9abe-4bfa-4fbf-8769-b2ad35d07dcb" />

5. Deploy dan buka URL yang disediakan Railway.
<img width="619" height="298" alt="image" src="https://github.com/user-attachments/assets/e04d7dcd-0e8e-4cea-a327-49b00101ae23" />


6. Hasilnya seperti ini
<img width="849" height="872" alt="image" src="https://github.com/user-attachments/assets/51295d0e-a11e-456b-b415-00b317f65bab" />


