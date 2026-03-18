/**
 * KONFIGURASI NOMOR WHATSAPP (REGION JABODETABEK)
 */
const NO_UNIT_ADMIN = "6282289376856"; 
const NO_UNIT_MEDIS = "6282289376856"; 

// Nomor Konsultasi & Emergency (Dual Number)
const NO_KONSULTASI_1 = "6285694741341"; 
const NO_KONSULTASI_2 = "6285891205901"; 

/**
 * MODAL HANDLER
 */
function openModal() {
    const modal = document.getElementById('modal-service');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal-service');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/**
 * REDIRECT WHATSAPP JABODETABEK
 */
function redirectToWA(tipe, alt = false) {
    let target = "";
    let pesan = "";

    if (tipe === 'Ambulan') {
        target = NO_UNIT_MEDIS;
        pesan = "EMERGENCY: Halo Sahabat Medika, saya membutuhkan unit Ambulan segera di wilayah Jabodetabek.";
    } else if (tipe === 'Layanan Rutin') {
        target = NO_UNIT_ADMIN;
        pesan = "Halo Sahabat Medika Jabodetabek, saya ingin bertanya rincian layanan kunjungan harian atau perawat lansia.";
    } else {
        // Logika Pilihan Nomor Konsultasi (1 atau 2)
        target = alt ? NO_KONSULTASI_2 : NO_KONSULTASI_1;
        pesan = "Halo Tim Sahabat Medika Jabodetabek, saya ingin berkonsultasi mengenai layanan kesehatan keluarga saya.";
    }

    window.open(`https://wa.me/${target}?text=${encodeURIComponent(pesan)}`, '_blank');
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-service');
    if (event.target == modal) {
        closeModal();
    }
}