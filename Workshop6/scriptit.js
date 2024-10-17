function getData() {

  let dest = document.querySelector('#destination').value
  let arrivalDate = document.querySelector('#arrival').value

  localStorage.setItem('destination', JSON.stringify(dest))
  localStorage.setItem('arrivalDate', JSON.stringify(arrivalDate))

  let checkboxes = document.querySelectorAll('input[type="checkbox"][name="CheckboxGroup1"]')

  let services = []

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
    services.push(checkbox.value)
  }
})

  localStorage.setItem('services', JSON.stringify(services))

  console.log(localStorage)
};

function showData() {
  data = document.querySelector('#sessiondata');

  let where = localStorage.getItem('destination');
  let when = localStorage.getItem('arrivalDate');
  let services = JSON.parse(localStorage.getItem('services'));

  let servicesList = '';
  for (let i = 0; i < services.length; i++) {
    servicesList += `<li>${services[i]}</li>`;


  data.innerHTML = `
    <p>Destination: ${where}</p>
    <p>Arrival Date: ${when}</p>
    <p>Services:</p>
    <ul>
      ${servicesList}
    </ul>
  `;
}};

function getData2() {

  let dest = document.querySelector('#destination2').value
  let arrivalDate = document.querySelector('#arrival2').value

  sessionStorage.setItem('destination2', JSON.stringify(dest))
  sessionStorage.setItem('arrivalDate2', JSON.stringify(arrivalDate))

  let checkboxes = document.querySelectorAll('input[type="checkbox"][name="CheckboxGroup2"]')

  let services2 = []

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
    services2.push(checkbox.value)
  }
})

  sessionStorage.setItem('services2', JSON.stringify(services2))

  console.log(sessionStorage)
};

function showData2() {
  data2 = document.querySelector('#sessiondata2');

  let where = sessionStorage.getItem('destination2');
  let when = sessionStorage.getItem('arrivalDate2');
  let services = JSON.parse(sessionStorage.getItem('services2'));

  let servicesList = '';
  for (let i = 0; i < services.length; i++) {
    servicesList += `<li>${services[i]}</li>`;
  }

  data2.innerHTML = `
    <p>Destination: ${where}</p>
    <p>Arrival Date: ${when}</p>
    <p>Services:</p>
    <ul>
      ${servicesList}
    </ul>
  `;
};


//let parsettu = JSON.parse(localStorage.getItem('destination', arrival, services)) - saa datan käyttömuodossa, esim printtausta varten! Tässä tapauksessa määränpään.