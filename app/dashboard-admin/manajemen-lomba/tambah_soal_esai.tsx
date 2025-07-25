/**
 * File                         : tambah_soal_esai.tsx
 * Created                      : 2025-07-19
 * Last Updated                 : 2025-07-19
 * Url                          : /dashboard-admin/tambah-soal-esai
 * Description                  : Halaman dashboard admin untuk menambah soal esai pada aplikasi perlombaan BFUB.
 *                                Memungkinkan admin untuk membuat dan menyimpan soal esai baru.
 * Functional                   :
 *      - Menampilkan form untuk menambah data soal esai baru.
 *      - Melakukan validasi terhadap input pada form.
 *      - Menyimpan data soal esai baru ke dalam sistem.
 *      - Menentukan kriteria penilaian dan bobot soal esai.
 * API Methods      / Endpoints :
 *      - POST      api/admin/soal/essay       (Untuk membuat/menambah data soal esai baru)
 *      - GET       api/lomba                  (Untuk mendapatkan daftar lomba untuk dropdown)
 * Table Activities             :
 *      - INSERT soal esai ke tabel soal_essay
 *      - SELECT lomba dari tabel cabang_lomba untuk dropdown
 */