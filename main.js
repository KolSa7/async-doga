async function init() {
    const response=await fetch('./patrons.json');
    const patrons=await response.json();
    
    patrons.forEach(patron => {
        const table=document.getElementById('content'); 
        const row=document.createElement('tr');
        const name=document.createElement('td');
        name.innerText=patron.subscriber;
        row.appendChild(name);
        const premium=document.createElement('td');
        premium.classList.add('premCell');
        premium.innerText=patron.premium? '✅':'❌';
        row.appendChild(premium);
        const total=document.createElement('td');
        total.innerText=patron.paid_total+'$';
        total.style.backgroundColor=patron.paid_total>800? 'gold':null;
        row.appendChild(total);
        table.appendChild(row);
    });
    const buttons= document.getElementsByClassName('premCell');
    console.log(buttons.length)
    
    const alert=document.getElementById('alert');
    
    for(i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',()=>{
            console.log(i);
            patrons[i].premium=!patrons[i].premium;
            buttons[i].innerText=patrons[i].premium? '✅':'❌';
            alert.hidden=false;
            setTimeout(() => {
                alert.hidden=true;
            }, 5000);
        });
    }

}





/*patrons.forEach(patron=>{

    premium.addEventListener('click',()=>{
            const alert=document.getElementById('alert');
            patron.premium=!patron.premium;
            console.log(patron.name);
            premium.innerText=patron.premium? '✅':'❌';
            alert.hidden=false;
            setTimeout(() => {
                alert.hidden=true;
            }, 5000);
        });
});*/
init();