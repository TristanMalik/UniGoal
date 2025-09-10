1. Membuat sebuah proyek baru
    Inisialisasi proyek menggunakan command `django-admin startproject UniGoal .` yang mana membuat direktori dasar dan files penting untuk aplikasi Django.

2. Membuat aplikasi dengan nama main pada proyek tersebut.
    menambahkan aplikasi bernama main melalui perintah python `manage.py startapp main`. Aplikasi ini untuk logika dan fitur yang dikembangkan.

3. Melakukan routing pada proyek agar dapat menjalankan aplikasi main.
    konfigurasi routing pada file `urls.py` dengan menambahkan route yang terhubung dengan aplikasi main. 

4. Membuat model pada aplikasi main dengan nama Product dan memiliki atribut wajib
    Membuat model Product dalam `models.py` dan menambahakan atribut-atribut wajib(name, price, description, thumbnail, category, is featured.) dengan item type yang cocok.

5. Membuat sebuah fungsi pada `views.py` untuk dikembalikan ke dalam sebuah template HTML yang menampilkan nama aplikasi serta nama dan kelas kamu.
    membuat fungsi yang merender request ke template html(pada kasus ini main.html), lalu sesuaikan request agar menampilkan nama aplikasi, nama pribadi, dan kelas pbp.

6. Membuat sebuah routing pada `urls.py` aplikasi main untuk memetakan fungsi yang telah dibuat pada views.py.
    Pada urls.py tambahkan urlpatterns dengan path yang cocok agar halaman dapat diakses lewat URL yang cocok juga.

7. Melakukan deployment ke PWS terhadap aplikasi yang sudah dibuat sehingga nantinya dapat diakses oleh teman-temanmu melalui Internet.
    Connect build proyek ke PWS dengan push ke pws, jika berhasil dapat terlihat status:running pada PWS. Copy link aplikasi proyek agar bisa diakses lewat internet oleh siapapun.

8.Membuat sebuah `README.md` yang berisi tautan menuju aplikasi PWS yang sudah di-deploy, serta jawaban dari beberapa pertanyaan berikut.
    https://muhammad-tristan41-unigoal.pbp.cs.ui.ac.id/


Buatlah bagan yang berisi request client ke web aplikasi berbasis Django beserta responnya dan jelaskan pada bagan tersebut kaitan antara `urls.py`, `views.py`, `models.py`, dan `berkas html`.

    Alur request client
    1. Client mengirimkan request HTTP request
    2. `urls.py` menerima request tersebut, lalu Django mencocokkan request dengan pola url yang ada di `urls.py` jika cocok maka fungsi diteruskan ke `views.py`
    3. `views.py` memproses logika yang bisa langsung menyiapkan data atau memanggil `models.py`
    4. jika `views.py` meminta data dari database maka `models.py` akan mengembalikan data ke `views.py`
    5. `views.py` mengirim data ke template html
    6. hasil render template html akan dikembalikan sebagai http ke client browser
    7. client browser menampilkan web page ke user

    Client (Browser)
      |
      v
   urls.py
      |
      v
   views.py
      |
      v
   models.py
      |
      v
   views.py
      |
      v
   templates (HTML) 
      |
      v
   Response kembali ke Client

Jelaskan peran `settings.py` dalam proyek Django!
    settings.py berperan sebagai konfigurasi utama untuk proyek Django. file ini menyimpan detail database connection, list installed app, konfigurasi middlewar, dan set path untuk berbagai files. value yang terkait keamanan juga disimpan disini seperti SECRET_KEY.

Bagaimana cara kerja migrasi database di Django?
    setelah membuat perubahan pada `models.py` dan membuat migration dengan command `makemigrations` yang mana manyimpan perubahan pada `models.py` tersebut. Lalu gunakan command `migrate` untuk mengupdate database dengan migration.

Menurut Anda, dari semua framework yang ada, mengapa framework Django dijadikan permulaan pembelajaran pengembangan perangkat lunak?
    Karena beginner friendly dan juga menggunakan python yang sudah dipelajari.

Apakah ada feedback untuk asisten dosen tutorial 1 yang telah kamu kerjakan sebelumnya?
Asdos baik.