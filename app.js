if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
 

function vypocitat() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operator = document.getElementById('operator').value;
        let vysledek;

        if(operator === '+'){

            vysledek = num1 + num2;
        }
        else if(operator ==='-'){
            vysledek = num1 - num2;
        }   
        else if(operator ==='*'){
            vysledek = num1 * num2;
        }
        else if (operator === '/') {
            if (num2 !== 0) {
                vysledek = num1 / num2;
            } else {
                vysledek = "Chyba: Dělení nulou.";
            }
        } else {
            vysledek = "Neznámá operace.";
        }
        document.getElementById('vysledek').innerText = "Výsledek: " + vysledek;
        console.log(vysledek);
    }
