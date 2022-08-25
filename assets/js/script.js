const loadPicture = () =>{
    //fetch
    fetch('Picture.json').then(response => response.json()).then(data => {
const result = data.Picture
        for (let i = 0; i < result.length; i++) {
            document.getElementById('data-hero').innerHTML += `
            <div class="card">
                        <img src="${result[i].img}" alt="">
                        <div class="card-body">
                            <h4>${result[i].name}</h4>
                            <p>${result[i].location}</p>
                        </div>
                    </div>`
        }
    }).catch(err =>{
        console.log(err);
    })
}

loadPicture();