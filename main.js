const romanticMessage = "I love you, Arum!"; // Pesan romantis
let index = 0;

function typeMessage() {
    if (index < romanticMessage.length) {
        document.getElementById("romantic-message").innerHTML += romanticMessage.charAt(index);
        index++;
        setTimeout(typeMessage, 150); // Kecepatan ketikan
    }
}

window.onload = function() {
    typeMessage(); // Mulai efek ketikan

    // Event listener untuk tombol
    document.getElementById("repeat-button").onclick = function() {
        index = 0; // Reset index
        document.getElementById("romantic-message").innerHTML = ""; // Kosongkan pesan
        typeMessage(); // Mulai ulang efek ketikan
    }
}