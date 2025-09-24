<details>
<summary>Tugas individu 2!</summary>
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
</details>

<details>
<summary>Tugas individu 3</summary>
1. Jelaskan mengapa kita memerlukan data delivery dalam pengimplementasian sebuah platform?
    Agar aplikasi dapat bertukar informasi antara client dan server.

2. Menurutmu, mana yang lebih baik antara XML dan JSON? Mengapa JSON lebih populer dibandingkan XML?
    JSON biasanya dianggap lebih baik karena lebih ringan dan lebih cepat diproses.

3. Jelaskan fungsi dari method `is_valid()` pada form Django dan mengapa kita membutuhkan method tersebut?
Method `is_valid()` digunakan untuk cek data dari form jika sesuai dengan validasi dari form atau model.

4. Mengapa kita membutuhkan csrf_token saat membuat form di Django? Apa yang dapat terjadi jika kita tidak menambahkan csrf_token pada form Django? Bagaimana hal tersebut dapat dimanfaatkan oleh penyerang?
    `csrf_token` digunakan oleh django untuk mencegah cross site request forgery. Jika tidak menggunakan tokennya, form menjadi rentan serangan csrf. Penyerang dapat melakukan csrf untuk membuat user melakukan aksi diluar pengetahuannya.

5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
    1. Tambahkan 4 fungsi views baru untuk melihat objek yang sudah ditambahkan dalam format XML, JSON, XML by ID, dan JSON by ID.
    ```python
    def show_xml(request):
     product_list = Product.objects.all()
     xml_data = serializers.serialize("xml", product_list)
     return HttpResponse(xml_data, content_type="application/xml")

    def show_xml_by_id(request, product_id):
   try:
       product_item = Product.objects.filter(pk=product_id)
       xml_data = serializers.serialize("xml", product_item)
       return HttpResponse(xml_data, content_type="application/xml")
   except Product.DoesNotExist:
       return HttpResponse(status=404)

    def show_json(request):
    product_list = Product.objects.all()
    json_data = serializers.serialize("json", product_list)
    return HttpResponse(json_data, content_type="application/json")

    def show_json_by_id(request, product_id):
   try:
       product_item = Product.objects.get(pk=product_id)
       json_data = serializers.serialize("json", [product_item])
       return HttpResponse(json_data, content_type="application/json")
   except Product.DoesNotExist:
       return HttpResponse(status=404)
       ```
2. Membuat routing URL untuk masing-masing views yang telah ditambahkan pada poin 1.
menaruh path yang cocok ke dalam `urls.py` yang berada pada directory main
        ```python
            urlpatterns = [
        path('', show_main, name='show_main'),
        path('create/', product_create, name='product_create'),
        path('detail/<int:id>/', show_product, name='show_product'),
        path('xml/', show_xml, name='show_xml'),
        path('json/', show_json, name='show_json'),
        path('xml/<str:product_id>/', show_xml_by_id, name='show_xml_by_id'),
        path('json/<str:product_id>/', show_json_by_id, name='show_json_by_id'),
        ]
        ```
    
3. Membuat halaman yang menampilkan data objek model yang memiliki tombol "Add" yang akan redirect ke halaman form, serta tombol "Detail" pada setiap data objek model yang akan menampilkan halaman detail objek.
tambahkan button-button yang sesuai pada halaman dan href ke url yang cocok
        ```python
    <a href="{% url 'main:product_create' %}">
    <button>+ Add Product</button>
    </a>
    <a href="{% url 'main:show_product' product.id %}">
        {{ product.name }}
    </a>
        ```
    
4. Membuat halaman form untuk menambahkan objek model pada app sebelumnya.
    membuat html yang handle untuk opsi add product.
    
5.  Membuat halaman yang menampilkan detail dari setiap data objek model.
    membuat html untuk handle opsi detail saat sudah ada produk yang terdisplay di halaman utama

</details>


<details>
<summary>Tugas individu 4</summary>
1. Apa itu Django AuthenticationForm? Jelaskan juga kelebihan dan kekurangannya.
    AuthenticationForm adalah form bawaan Django (django.contrib.auth.forms.AuthenticationForm) yang dipakai untuk login user. Form ini otomatis menyertakan field username dan password, lalu melakukan validasi ke sistem auth Django.
    Kelebihan:
    -langsung terintegrasi dari Django
    -ada validasi otomatis
    -mudah dipakai dengan login
    Kekurangan:
    -Hanya bisa menggunakan username dan password. Jika ingin email atau autentikasi multi-faktor perlu kustomisasi
    -tampilan defaultnya basic

2. Apa perbedaan antara autentikasi dan otorisasi? Bagaiamana Django mengimplementasikan kedua konsep tersebut?
    Autentikasi adalah proses memverifikasi user, seperti saat user login dengan username dan password. Otorisasi adalah penentuan apa saja yang user boleh lakukan setelah terautentikasi.

    Django mengimplementasikan autentikasi dengan `django.contrib.auth`, login/logout function, dan `AuthenticationForm`

    Otorisasi dengan @login_required

3. Apa saja kelebihan dan kekurangan session dan cookies dalam konteks menyimpan state di aplikasi web?
    Cookies:
        Kelebihan:
        -Ringan pada server karena disimpan di browser
        Kekurangan:
        -mudah dimodifikasi user, kurang aman jika menyimpan data sensitif
        -batas ukuran 4KB per cookie
    Sessions:
        Kelebihan:
        -Dapat menyimpan data yang lebih besar/kompleks
        Kekurangan:
        -membutuhkan storage/database untuk session yang bisa membebani server
        -perlu fungsionalitas cleanup untuk expired session


4. Apakah penggunaan cookies aman secara default dalam pengembangan web, atau apakah ada risiko potensial yang harus diwaspadai? Bagaimana Django menangani hal tersebut?
    Secara default, penggunaan cookies dalam pengembangan web tidak sepenuhnya aman karena cookies rentan terhadap serangan seperti XSS (Cross-Site Scripting) dan session hijacking. Hal ini disebabkan karena cookie tersimpan di sisi klien dan bisa diakses atau dimodifikasi jika tidak dilindungi dengan benar.

    Django dapat menangani hal-hal tersebut dengan menggunakan csrf token, mencegah akses  scripting javascript untuk serangan XSS.
</details>