function createTable(data){
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    let headerRow = document.createElement('tr');
    let headers = ['№', 'Name', 'Domain', 'Web'];
    for(let i = 0; i < headers.length; i++){
        let th = document.createElement('th');
        th.textContent = headers[i];
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    for(let j = 0; j < data.length; j++){
        let univeristy = data[j];
        let row = document.createElement('tr');

        let indexCell = document.createElement('td');
        indexCell.textContent = j + 1;
        row.appendChild(indexCell);

        let nameCell = document.createElement('td');
        nameCell.textContent = university[j];
        row.appendChild(nameCell);

        let domainCell = document.createElement('td');
        domainCell.textContent = university.domain;
        row.appendChild(domainCell);

        let webCell = document.createElement('td');
        let webLink = document.createElement('a');
        webLink.href = university.web_pages[0];
        webLink.textContent = university.web_pages[0];
        webCell.appendChild(webLink);
        row.appendChild(webCell);

        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    return table;
}

document.getElementById('btnSend').addEventListener('click', function(){
    let countryInput = documnet.getElementById('countryInput');
    let country = countryInput.value;
    if(country.trim() === ''){
        alert('Enter the country!');
        return;
    }

    let resultTable = document.getElementById('resultTable');
    resultTable.innerHTML = '';

    
})