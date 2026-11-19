async function init() {
    const response=await fetch('./patrons.json');

    const patrons=await response.json();
    
    const table=document.getElementById('content');
    patrons.forEach(patron => {
        const row=document.createElement('tr');
        const name=document.createElement('td');
        name.innerText=patron.subscriber;
        row.appendChild(name);
        const premium=document.createElement('td');
        premium.innerText=patron.premium? '✅':'❌';
        premium.addEventListener('click',(patron)=>{
            const alert=document.getElementById('alert');
            patron.premium=!patron.premium;
            console.log(patron.name);
            premium.innerText=patron.premium? '✅':'❌';
            alert.hidden=false;
            setTimeout(() => {
                alert.hidden=true;
            }, 5000);
        });
        row.appendChild(premium);
        const total=document.createElement('td');
        total.innerText=patron.paid_total+'$';
        total.style.backgroundColor=patron.paid_total>800? 'gold':null;
        row.appendChild(total);
        table.appendChild(row);
    });

}
init();