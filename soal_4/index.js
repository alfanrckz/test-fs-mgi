const arrayOfObject = [
    {
        nama: 'Smith',
        hobi: 'Self Service'
    },
    {
        nama: 'Dio',
        hobi: 'Design Grafis'
    },
    {
        nama: 'Agung',
        hobi: 'Bermain Game'
    },
];

const result = arrayOfObject.map(obj => {
    return {
        response: `${obj.nama} memiliki hobi ${obj.hobi}`
    };
});

const resultDiv = document.getElementById('result');
result.forEach(item => {
    const para = document.createElement('p');
    para.textContent = item.response;
    para.style.marginBottom = '10px'; 
    para.style.fontFamily = 'Arial, sans-serif'; 
    para.style.fontSize = '16px'; 
    para.style.color = '#333'; 
    resultDiv.appendChild(para);
});
