// filter
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput'); // Menangkap elemen input pencarian
    const filterMenuItems = document.querySelectorAll('.filter-menu li'); // Menangkap elemen menu filter
    const filterItems = document.querySelectorAll('.filter-content .filter-item'); // Menangkap elemen konten filter
    const filterSection = document.querySelector('.filter-section'); // Menangkap elemen section filter
  
    function showAllItems() {
      // Fungsi untuk menampilkan semua item
      filterItems.forEach(function(item) {
        item.style.display = 'block'; // Menampilkan item
      });
    }
  
    function search(query) {
      // Fungsi untuk melakukan pencarian
      filterItems.forEach(function(item) {
        const itemTitle = item.querySelector('.item-title'); // Menangkap elemen dengan class "item-title"
        const itemText = itemTitle.textContent.toLowerCase(); // Mengubah teks item menjadi huruf kecil
  
        if ((searchInput.value === '' || itemText.includes(searchInput.value.toLowerCase()))) {
          // Memeriksa apakah item cocok dengan kriteria input pencarian
          item.style.display = 'block'; // Menampilkan item
        } else {
          item.style.display = 'none'; // Menyembunyikan item
        }
      });
    }
  
    searchInput.addEventListener('input', function() {
      // Event listener untuk input pencarian
      const query = this.value; // Mendapatkan nilai input pencarian
      search(query); // Memanggil fungsi pencarian dengan nilai input pencarian
    });
  
    searchInput.addEventListener('keyup', function(event) {
      // Event listener untuk tombol yang ditekan pada input pencarian
      if (event.key === 'Enter') {
        // Memeriksa jika tombol yang ditekan adalah tombol Enter
        filterSection.scrollIntoView(); // Mengarahkan halaman ke elemen section filter
        event.preventDefault(); // Mencegah aksi default dari tombol Enter
      }
    });
  
    filterMenuItems.forEach(function(item) {
      // Melooping setiap elemen menu filter
      item.addEventListener('click', function() {
        // Event listener untuk setiap elemen menu filter yang diklik
        const selectedFilter = this.getAttribute('data-filter'); // Mendapatkan atribut data-filter dari elemen yang diklik
  
        filterMenuItems.forEach(function(item) {
          item.classList.remove('active'); // Menghapus kelas 'active' dari setiap elemen menu filter
        });
        // this.classList.add('active'); // Menambahkan kelas 'active' ke elemen yang diklik
  
        if (selectedFilter === 'all') {
          // Jika kategori yang dipilih adalah 'all'
          showAllItems(); // Menampilkan semua item
        } else {
          filterItems.forEach(function(item) {
            const dataItem = item.getAttribute('data-item'); // Mendapatkan atribut data-item dari item
            const itemText = item.querySelector('.item-title').textContent.toLowerCase(); // Mengubah teks item menjadi huruf kecil
  
            if (selectedFilter === dataItem &&
                (searchInput.value === '' || itemText.includes(searchInput.value.toLowerCase()))) {
              // Memeriksa apakah item cocok dengan kategori yang dipilih dan kriteria input pencarian
              item.style.display = 'block'; // Menampilkan item
            } else {
              item.style.display = 'none'; // Menyembunyikan item
            }
          });
        }
      });
    });
  
    showAllItems(); // Menampilkan semua item saat halaman dimuat
});
// filter end

// memotong panjang font di class fili 

// Menangkap peristiwa resize (perubahan ukuran) pada jendela browser
window.addEventListener('resize', function() {
  var maxWidth = 425; // Lebar maksimum untuk memotong teks
  var filiElements = document.getElementsByClassName('fili'); // Mengambil elemen dengan kelas "fili"

  if (window.innerWidth < maxWidth) { // Memeriksa jika lebar jendela kurang dari maxWidth
    for (var i = 0; i < filiElements.length; i++) {
      var text = filiElements[i].textContent; // Mengambil teks asli dari elemen
      var maxLength = 4; // Jumlah karakter maksimal yang ingin ditampilkan

      if (text.length > maxLength) { // Memeriksa jika teks lebih dari maxLength
        var shortenedText = text.substring(0, maxLength) + '..'; // Memotong teks dan menambahkan ".."
        filiElements[i].textContent = shortenedText; // Mengganti teks pada elemen dengan teks yang dipotong
      }
    }
  } else { // Jika lebar jendela melebihi maxWidth
    for (var i = 0; i < filiElements.length; i++) {
      var originalText = filiElements[i].textContent; // Mengambil teks asli dari elemen
      var maxLength = 4; // Jumlah karakter maksimal yang ingin ditampilkan

      if (originalText.length > maxLength) { // Memeriksa jika teks lebih dari maxLength
        filiElements[i].textContent = originalText; // Mengganti teks pada elemen dengan teks asli
      }
    }
  }
});

// Memanggil event resize secara langsung saat halaman dimuat
window.dispatchEvent(new Event('resize'));
// memotong panjang font di class fili end

//menjadikan div.logo sebagai button menuju link SH
function redirectToShLink() {
  window.location.href = "https://slashendd.github.io/slashend/";
}
//menjadikan div.logo sebagai button menuju link SH end