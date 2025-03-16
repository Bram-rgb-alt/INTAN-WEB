// penjelasan ada di bawah

// Variabel untuk melacak posisi scroll dan elemen navbar
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

// Event listener untuk menyembunyikan/menampilkan navbar saat scroll
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah
    navbar.classList.add("hide-nav");
  } else {
    // Scroll ke atas
    navbar.classList.remove("hide-nav");
  }

  lastScrollTop = scrollTop;
});

// Event listener untuk tombol "Mauu"
document.querySelector(".fitur.ya").addEventListener("click", () => {
  const sections = document.querySelectorAll(".section");
  let index = 0;
  const buttonContainer = document.querySelector(".fitur-container");
  const ulangContainer = document.querySelector(".ulang-container");

  buttonContainer.classList.add("hidden");
  document.body.classList.remove("no-scroll");
  document
    .querySelectorAll(".section")
    .forEach((section) => section.classList.remove("blur"));
  document.body.style.overflow = "hidden"; // Nonaktifkan scroll manual

  // Lanjutkan animasi teks
  document.querySelectorAll(".animated-text").forEach((element) => {
    element.style.animationPlayState = "running";
  });

  // Fungsi untuk scroll ke bagian berikutnya
  function scrollToNextSection() {
    if (index < sections.length) {
      sections[index].scrollIntoView({ behavior: "smooth" });
      index++;
      setTimeout(scrollToNextSection, 7000); // Sesuaikan delay sesuai kebutuhan
    } else {
      ulangContainer.classList.remove("hidden");
      document
        .querySelectorAll(".section")
        .forEach((section) => section.classList.add("blur"));
      document.body.style.overflow = "auto"; // Aktifkan scroll manual
    }
  }

  scrollToNextSection();
  document.getElementById("myAudio").play(); // Putar audio
});

// Event listener untuk tombol "Enggak"
document.querySelector(".fitur.tidak").addEventListener("click", () => {
  const buttonContainer = document.querySelector(".fitur-container");

  buttonContainer.classList.add("hidden");
  document.body.classList.remove("no-scroll");
  document
    .querySelectorAll(".section")
    .forEach((section) => section.classList.remove("blur"));
  document.querySelectorAll(".animated-text").forEach((element) => {
    element.style.animationPlayState = "paused";
  });

  // Intersection Observer untuk memutar animasi saat bagian terlihat
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".animated-text").forEach((element) => {
            element.style.animation = "none";
            element.offsetHeight; // Trigger reflow
            element.style.animation = null;
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
  document.getElementById("myAudio").play(); // Putar audio
});

// Event listener untuk tombol "Iya" di kontainer ulang
document.querySelector(".ulang-ya").addEventListener("click", () => {
  location.reload();
});

// Event listener untuk tombol "Enggak" di kontainer ulang
document.querySelector(".ulang-tidak").addEventListener("click", () => {
  const ulangContainer = document.querySelector(".ulang-container");

  ulangContainer.classList.add("hidden");
  document
    .querySelectorAll(".section")
    .forEach((section) => section.classList.remove("blur"));
});

// Event listener untuk DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  const buttonContainer = document.querySelector(".fitur-container");
  buttonContainer.classList.remove("hidden");
  document.body.classList.add("no-scroll");
  document
    .querySelectorAll(".section")
    .forEach((section) => section.classList.add("blur"));

  // Pause animasi teks awalnya
  document.querySelectorAll(".animated-text").forEach((element) => {
    element.style.animationPlayState = "paused";
  });

  // Intersection Observer untuk memutar animasi saat bagian terlihat
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".animated-text").forEach((element) => {
            element.style.animation = "none";
            element.offsetHeight; // Trigger reflow
            element.style.animation = null;
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
});

// Tangani perubahan visibilitas
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    document.querySelectorAll(".animated-text").forEach((element) => {
      element.style.animationPlayState = "running";
    });
  } else {
    document.querySelectorAll(".animated-text").forEach((element) => {
      element.style.animationPlayState = "paused";
    });
  }
});

//

// **JavaScript (intan.js):**

// * **Navbar Scroll Behavior:**
//     * Menyembunyikan navbar saat pengguna scroll ke bawah dan menampilkannya saat scroll ke atas.
// * **Fitur Auto-Scroll ("Mauu"):**
//     * Saat tombol "Mauu" diklik:
//         * Menyembunyikan kontainer fitur.
//         * Menghilangkan efek blur dari bagian-bagian halaman.
//         * Menonaktifkan scroll manual.
//         * Memutar animasi teks.
//         * Menggunakan `scrollIntoView` untuk menggeser halaman ke setiap bagian secara otomatis dengan jeda waktu.
//         * Setelah semua bagian ditampilkan, menampilkan kontainer ulang dan mengaktifkan kembali scroll manual.
//         * Memutar audio latar belakang.
// * **Fitur Manual Scroll ("Enggak"):**
//     * Saat tombol "Enggak" diklik:
//         * Menyembunyikan kontainer fitur.
//         * Menghilangkan efek blur dari bagian-bagian halaman.
//         * Menjeda animasi teks.
//         * Menggunakan `IntersectionObserver` untuk mendeteksi ketika bagian-bagian halaman terlihat di layar, dan memutar ulang animasi text ketika section tersebut terlihat.
//         * Memutar audio latar belakang.
// * **Fitur Ulang:**
//     * Tombol "Iya" memuat ulang halaman.
//     * Tombol "Enggak" menyembunyikan kontainer ulang dan menghilangkan efek blur.
// * **Inisialisasi Halaman (DOMContentLoaded):**
//     * Saat halaman dimuat:
//         * Menampilkan kontainer fitur.
//         * Mencegah scroll manual.
//         * Memberikan efek blur pada bagian-bagian halaman.
//         * Menjeda animasi text.
//         * Menggunakan `IntersectionObserver` untuk mendeteksi ketika bagian-bagian halaman terlihat di layar, dan memutar ulang animasi text ketika section tersebut terlihat.
// * **Visibility Change Handling:**
//     * Menangani perubahan visibilitas halaman (misalnya, saat tab beralih):
//         * Memutar animasi teks saat halaman terlihat.
//         * Menjeda animasi teks saat halaman tidak terlihat.

// **Inti dari kode ini adalah:**

// * Memberikan interaktivitas pada halaman web.
// * Mengontrol animasi dan scroll berdasarkan tindakan pengguna.
// * Menggunakan `IntersectionObserver` untuk memicu animasi saat elemen-elemen terlihat.
// * Memberikan kontrol pada audio latar belakang.
