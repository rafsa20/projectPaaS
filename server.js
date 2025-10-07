import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// setup dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// koneksi database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// setup storage upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, process.env.STORAGE_PATH || "./storage"),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// setup express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/storage", express.static(path.join(__dirname, "storage")));
app.use(express.urlencoded({ extended: true }));

// buat tabel jika belum ada
(async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100),
      photo VARCHAR(255)
    );
  `);
  console.log("✅ Database siap digunakan!");
})();

// tampilkan halaman utama
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM users ORDER BY id DESC");
  res.render("index", { users: result.rows });
});

// simpan data baru
app.post("/submit", upload.single("photo"), async (req, res) => {
  const { name, email } = req.body;
  const photo = req.file ? req.file.filename : null;

  await pool.query(
    "INSERT INTO users (name, email, photo) VALUES ($1, $2, $3)",
    [name, email, photo]
  );
  res.redirect("/");
});

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
