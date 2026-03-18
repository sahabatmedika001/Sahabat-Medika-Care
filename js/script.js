/**
 * KONFIGURASI NOMOR WHATSAPP (REGION JABODETABEK)
 */
const NO_UNIT_ADMIN = "6282289376856"; 
const NO_UNIT_MEDIS = "6285891205901"; 
const NO_KONSULTASI = "6285694741341"; 

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
function redirectToWA(tipe) {
    let target = "";
    let pesan = "";

    if (tipe === 'Layanan Rutin') {
        target = NO_UNIT_ADMIN;
        pesan = "Halo Sahabat Medika Jabodetabek, saya ingin bertanya rincian layanan kunjungan harian atau perawat lansia di rumah.";
    } else if (tipe === 'Layanan Medis') {
        target = NO_UNIT_MEDIS;
        pesan = "Halo Unit Medis Sahabat Medika, saya membutuhkan informasi mengenai paket infus/vitamin atau perawatan alat medis.";
    } else {
        target = NO_KONSULTASI;
        pesan = "Halo Tim Sahabat Medika Jabodetabek, saya ingin berkonsultasi mengenai layanan kesehatan untuk keluarga saya.";
    }

    window.open(`https://wa.me/${target}?text=${encodeURIComponent(pesan)}`, '_blank');
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-service');
    if (event.target == modal) {
        closeModal();
    }
}