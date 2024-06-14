document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (height > 0 && weight > 0) {
        const bmi = weight / ((height / 100) ** 2);
        document.getElementById('bmiValue').innerText = bmi.toFixed(2);

        let status;
        if (bmi < 18.5) {
            status = 'Kekurangan berat badan';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = 'Normal (ideal)';
        } else if (bmi >= 25 && bmi < 29.9) {
            status = 'Kelebihan berat badan';
        } else {
            status = 'Obesitas';
        }
        document.getElementById('bmiStatus').innerText = status;
    } else {
        alert('Harap masukkan nilai tinggi dan berat badan yang valid.');
    }
});
