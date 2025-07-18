/**
 * File                         : daftar_lomba.tsx
 * Created                      : 2025-07-19
 * Last Updated                 : 2025-07-19
 * Url                          : /dashboard-admin/daftar-lomba
 * Description                  : Halaman dashboard admin untuk daftar lomba pada aplikasi website perlombaan BFUB.
 *                                Menampilkan daftar lomba yang terdaftar dan fitur manajemen lomba.
 * Functional                   :
 *      - Menampilkan daftar semua lomba dengan paginasi.
 *      - Menyediakan fitur pencarian dan filter lomba.
 *      - Memungkinkan admin untuk menambah, melihat detail, mengedit, dan menghapus data lomba.
 *      - Menyediakan fitur bulk actions untuk operasi massal.
 * API Methods      / Endpoints :
 *      - GET       api/lomba                  (Untuk menampilkan seluruh data lomba dengan pagination)
 *      - POST      api/lomba                  (Untuk membuat/menambah data lomba baru)
 *      - GET       api/lomba/{id}             (Untuk menampilkan detail dari satu lomba)
 *      - PUT       api/lomba/{id}             (Untuk mengupdate data lomba yang dipilih)
 *      - DELETE    api/lomba/{id}             (Untuk menghapus data lomba yang dipilih)
 * Table Activities             :
 *      - SELECT lomba dari tabel cabang_lomba dengan filter dan pagination
 *      - INSERT lomba ke tabel cabang_lomba
 *      - UPDATE lomba di tabel cabang_lomba
 *      - DELETE lomba dari tabel cabang_lomba
 *      - SELECT COUNT(*) untuk pagination
 */