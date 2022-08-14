const creatcursor = (x, y) => {
    const curseur = document.createElement('div');
    curseur.className = 'curseur'; 
    curseur.style.left =`${x}px`;
    curseur.style.top =`${y}px` ;
    return curseur;
};

window.addEventListener('click', event =>{
    const curseur = creatcursor(event.pageX, event.pageY);
    document.body.append(curseur);
    setTimeout(() => {
        curseur.remove();
    }, 1000);
});


let srch = document.getElementById('srchvr');

console.log(srch);

srch.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        recherche();
    };
});

var entrer = document.getElementById('schrvr'); 

entrer.addEventListener('keyup', function() {
    const inputvr = entrer.nodeValue;
    console.log(inputvr);
})

function recherche() {
    let page = {page1: "partenaires de l'eni", page2: "eni praising christ" , page3: "club de l'eni" , page4: "basket eni" , page5:"hackathon interne" , page6: "actviter de l'eni" , page7: "partenaires"} 
    let x = document.getElementById('srchvr').value;
    console.log(x)
    x = x.toLowerCase();

    if(x == page.page1) {
        window.location.href="partenaires.html"
    }
    else if(x == page.page2) {
        window.location.href="évènements.html#epc"
    }
    else if(x == page.page3) {
        window.location.href="club.html"
    }
    else if(x == page.page4) {
        window.location.href="évènements.html#basket"
    }
    else if(x == page.page5) {
        window.location.href="évènements.html#hackathon"
    }
    else if(x == page.page7) {
        window.location.href="partenaires.html"
    }
    else {
        window.location.href="404notfound.html"
    }
}

function  retour() {
    window.location.href="index.html"
}