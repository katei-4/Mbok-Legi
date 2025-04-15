document.getElementById('tracker-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const soda = parseInt(document.getElementById('soda').value);
    let result = '';

    if (soda < 2) {
        result = "Konsumsi gula Anda aman! 😊";
    } else if (soda < 5) {
        result = "Waspada! Cobalah untuk mengurangi konsumsi gula. 😐";
    } else {
        result = "Bahaya! Segera perbaiki pola makan Anda. 😟";
    }

    document.getElementById('tracker-result').innerText = result;
});

function showFoodInfo(food) {
    let info = '';
    if (food === 'kue') {
        info = "Kue ini mengandung 20g gula. Cobalah ganti dengan buah segar!";
    } else if (food === 'soda') {
        info = "Soda ini mengandung 30g gula. Cobalah air mineral sebagai alternatif!";
    }
    document.getElementById('food-info').innerText = info;
}