function parseData() {
  let quotes = document.querySelectorAll('quotes');
  textbox.innerHTML = '';

  for (let i = 0; i < quotes.length; i++) {
      let quotet = quotes[i];
      let sitaatit = quotet.querySelector('quote');
      let lengthElement = quotet.querySelector('length');
      let author = quotet.querySelector('author');
      let output = '';
      if (author) {
          output += `<p>Author: <strong>${author.textContent}</strong> Quote: <strong>${sitaatit.textContent}</strong></p>`;
      }
 
      textbox.innerHTML += output;
  }
}


// Ei toiminut alkuperäisillä XML server-linkeillä
function loadXMLFile() {
  var xmlhttp = new XMLHttpRequest();

  let area = "1012";

  let url = `https://www.finnkino.fi/xml/Schedule/?area=${area}`

  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let xmlDoc = xmlhttp.responseText;

        document.querySelector('#quotes').innerHTML += xmlDoc;
      }
  }
}


//Käytin Finnkinon apia
function loadAndParseXML() {
  var xmlhttp = new XMLHttpRequest();
  let area = "1012";
  let url = `https://www.finnkino.fi/xml/Schedule/?area=${area}`;

  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      let xmlDoc = xmlhttp.responseXML;

      let shows = xmlDoc.querySelectorAll("Show");

      let table = document.querySelector("#tabledata table");
      let tbody = table.querySelector("tbody");

      let headerRow = `<tr>
        <td><strong>Title</strong></td>
        <td><strong>Start</strong></td>
      </tr>`;
      tbody.innerHTML = headerRow;

      for (let i = 0; i < shows.length; i++) {
        let title = shows[i].querySelector("Title").textContent;
        let startTime = shows[i].querySelector("dttmShowStart").textContent;

        let newRow = tbody.insertRow();

        newRow.insertCell(0).textContent = title;
        newRow.insertCell(1).textContent = startTime;
      }
    } 
  };
}




function loadAndParseNews() {
  var xmlhttp = new XMLHttpRequest();
  let url = "https://meijastiina.github.io/news_rss_topstories.xml"
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        let xmlDoc = xmlhttp.responseXML;
        let uutiset = xmlDoc.querySelectorAll('item')
        let rivit = '<ul>';

        for (var i = 0; i < uutiset.length; i++) {
          let otsikko = uutiset[i].querySelector('title').innerHTML;
          let linkki = uutiset[i].querySelector('link').innerHTML;
            rivit += `<li><a target='_blank' href='${linkki}'>${otsikko}</li>`
        }
        rivit += '</ul>'; // Add '</ul>' after the loop
        document.querySelector("#newsfeed").innerHTML += rivit;
      }
  }
}