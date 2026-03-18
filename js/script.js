/**
 * KONFIGURASI NOMOR (REGION JABODETABEK)
 * Satu nomor utama untuk semua layanan pesan (Ambulan & Medis)
 */
const NO_UTAMA_WA = "6282289376856"; 

/**
 * MODAL HANDLER
 */
function openModal() {
    const modal = document.getElementById('modal-service');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('modal-service');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

/**
 * REDIRECT WHATSAPP
 */
function redirectToWA(tipe) {
    let pesan = "";

    if (tipe === 'Ambulan') {
        pesan = "EMERGENCY: Halo Sahabat Medika, saya membutuhkan unit Ambulan segera di wilayah Jabodetabek. Apakah bisa di bantu ? ";
    } else if (tipe === 'Medis') {
        pesan = "Halo Unit Medis Sahabat Medika, saya ingin bertanya mengenai layanan Infus/Injeksi/Home Care.";
    } else {
        pesan = "Halo Sahabat Medika, saya ingin berkonsultasi mengenai layanan kesehatan.";
    }

    window.open(`https://wa.me/${NO_UTAMA_WA}?text=${encodeURIComponent(pesan)}`, '_blank');
}

// Menutup modal jika user klik di luar kotak modal
window.onclick = function(event) {
    const modal = document.getElementById('modal-service');
    if (event.target == modal) {
        closeModal();
    }
}