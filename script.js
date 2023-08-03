// Toggle Dark Mode
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

// Redirect to Instagram
function redirectToInstagram() {
    window.location.href = 'https://www.instagram.com/exct_gum';
}

// Update Real-time Clock
function updateTime() {
    const now = new Date();
    const clockElement = document.querySelector('#realtime-clock');
    clockElement.textContent = now.toLocaleString();
    // Daftar proyek dengan data yang akan ditampilkan
const projects = [
  {
    title: "Proyek 1",
    description: "Deskripsi proyek 1",
    previewImage: "project1_preview.jpg",
  },
  {
    title: "Proyek 2",
    description: "Deskripsi proyek 2",
    previewImage: "project2_preview.jpg",
  },
  // Tambahkan proyek lainnya di sini
];

// Fungsi untuk menampilkan data proyek pada preview
function showProjectPreview(index) {
  const projectTitle = document.querySelector("#project-title");
  const projectDescription = document.querySelector("#project-description");
  const projectPreviewImage = document.querySelector("#project-preview-image");

  projectTitle.textContent = projects[index].title;
  projectDescription.textContent = projects[index].description;
  projectPreviewImage.src = projects[index].previewImage;
}

document.addEventListener("DOMContentLoaded", () => {
  // ... kode lainnya ...

  // Mendapatkan daftar tombol preview
  const previewButtons = document.querySelectorAll(".preview-button");

  // Menambahkan event listener ke setiap tombol preview
  previewButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      showProjectPreview(index);
    });
  });
});

}

setInterval(updateTime, 1000);
updateTime(); // Update immediately on page load
