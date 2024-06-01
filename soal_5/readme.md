# Database

1. User: memilki ID dengan attribute Primary Key, nama, email dan role, dimana role memiliki 2 jenis yaitu admin dan user.
2. Assets: memiliki ID dengan attribute Primary key, barangMasuk_id dengan attribute Foreign Key dan Users_id dengan attribute Foreign Key. barangMasuk_id memilki relasi Many to Many dengan tabel Barang Masuk.
3. Barang Masuk: Memiliki ID dengan attribute Primary Key, nama, barang, qty, create_at, update_at dan Users_ID dengan attribute Foreign Key.

# Flow

1. Login: saat login, akan ada validasi jika dia user maka dia hanya dapat melihat data yang tersedia. Jika dia admin, maka user dapat melakukan melakukan input.
2. Input : Saat user melakukan input, maka akan dilakukan validasi terlebih dahulu. Jika assets tersebut tidak disetujui maka akan melakukan reject dan proram berakhir. Dan jika assets tersebut disetujui, maka data akan masuk ke database dan program berakhir.
