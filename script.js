document.addEventListener('DOMContentLoaded', () => {

    const bodySelect = document.getElementById('celestial-body');
    const loadingIndicator = document.getElementById('loading-indicator');
    const errorMessageEl = document.getElementById('error-message');
    const dataCard = document.getElementById('data-card');
    const calcSection = document.getElementById('calculator-section');
    const payloadInput = document.getElementById('payload-mass');
    

    const nameDisplay = document.getElementById('body-name');
    const gravityDisplay = document.getElementById('stat-gravity');
    const escapeDisplay = document.getElementById('stat-escape');
    const radiusDisplay = document.getElementById('stat-radius');
    const densityDisplay = document.getElementById('stat-density');
    const weightBodyName = document.getElementById('weight-body-name');
    const weightResult = document.getElementById('weight-result');

    let celestialBodiesData = [];
    let currentSelectedBody = null;

    const notableMoons = ['Moon', 'Titan', 'Europa'];

    async function init() {
        try {
            const apiUrl = 'https://corsproxy.io/?url=' + encodeURIComponent('https://api.le-systeme-solaire.net/rest/bodies/');
            const response = await fetch(apiUrl, {
                headers: {
                    'Authorization': 'Bearer 37cff98e-4e53-41e4-a3f7-1efa44568069'
                }
            });
            if (!response.ok) throw new Error('Network response was not ok');
            
            const data = await response.json();
            

            celestialBodiesData = data.bodies.filter(body => {
                return body.isPlanet || notableMoons.includes(body.englishName);
            });

            celestialBodiesData.sort((a, b) => a.englishName.localeCompare(b.englishName));
            
            populateDropdown();

            loadingIndicator.classList.add('hidden');
            bodySelect.disabled = false;
            
        } catch (error) {
            console.error("Failed to fetch data:", error);
            loadingIndicator.classList.add('hidden');
            errorMessageEl.classList.remove('hidden');
        }
    }

    function populateDropdown() {

        bodySelect.innerHTML = '<option value="" disabled selected>-- Select a Celestial Body --</option>';
        
        celestialBodiesData.forEach(body => {
            const option = document.createElement('option');
            option.value = body.id;
            option.textContent = body.englishName;
            bodySelect.appendChild(option);
        });
    }

    function handleBodySelection() {
        const selectedId = bodySelect.value;
        if (!selectedId) return;

        currentSelectedBody = celestialBodiesData.find(b => b.id === selectedId);
        if (currentSelectedBody) {
            updateDataCard();
            updateCalculator();
            

            dataCard.classList.remove('hidden');
            calcSection.classList.remove('hidden');
        }
    }

    function updateDataCard() {
        nameDisplay.textContent = currentSelectedBody.englishName;

        gravityDisplay.textContent = `${currentSelectedBody.gravity.toFixed(2)} m/s²`;

        escapeDisplay.textContent = currentSelectedBody.escape ? `${currentSelectedBody.escape.toLocaleString()} m/s` : 'Unknown';

        radiusDisplay.textContent = currentSelectedBody.meanRadius ? `${currentSelectedBody.meanRadius.toLocaleString()} km` : 'Unknown';

        densityDisplay.textContent = currentSelectedBody.density ? `${currentSelectedBody.density.toFixed(2)} g/cm³` : 'Unknown';
    }

    function updateCalculator() {
        if (!currentSelectedBody) return;
        
        weightBodyName.textContent = currentSelectedBody.englishName;
        
        const massStr = payloadInput.value;
        const mass = parseFloat(massStr);
        
        if (!isNaN(mass) && mass >= 0) {
            const weight = mass * currentSelectedBody.gravity;
            weightResult.textContent = `${weight.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} N`;
        } else {
            weightResult.textContent = '0.00 N';
        }
    }


    bodySelect.addEventListener('change', handleBodySelection);
    payloadInput.addEventListener('input', updateCalculator);


    init();
});
