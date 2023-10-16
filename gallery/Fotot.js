const imgbanjo = [
    {
        "src": './banjo imgs/banjo-img-1.jpg',
        "alt": 'bathroom photo',
        "title": '',
        "description": ''
    },
    {
        "src": './banjo imgs/banjo-img-2.jpg',
        "alt": 'bathroom photo',
        "title": '',
        "description": ''
    },
    {
        "src": './banjo imgs/banjo-img-3.jpg',
        "alt": 'bathroom photo',
        "title": '',
        "description": ''
    },
    {
        "src": './banjo imgs/banjo-img-4.jpg',
        "alt": 'bathroom photo',
        "title": '',
        "description": ''
    },
    {
        "src": './banjo imgs/banjo-img-5.jpg',
        "alt": 'bathroom photo',
        "title": '',
        "description": ''
    },
    {
        "src": './banjo imgs/banjo-img-6.jpg',
        "alt": 'bathroom photo',
        "title": '',
        "description": ''
    },
    {
        "src": './banjo imgs/banjo-img-7.jpg',
        "alt": 'bathroom photo',
        "title": '',
        "description": ''
    }
]

const imgpllaka = [
    {
        "src": './banjo imgs/banjo-img-1.jpg',
        "alt": 'bathroom photo',
        "title": '',
        "description": ''
    },
    {
        "src": './banjo imgs/banjo-img-2.jpg',
        "alt": 'bathroom photo',
        "title": '',
        "description": ''
    },
    {
        "src": './banjo imgs/banjo-img-3.jpg',
        "alt": 'bathroom photo',
        "title": '',
        "description": ''
    },
    {
        "src": './banjo imgs/banjo-img-4.jpg',
        "alt": 'bathroom photo',
        "title": '',
        "description": ''
    },
    {
        "src": './banjo imgs/banjo-img-5.jpg',
        "alt": 'bathroom photo',
        "title": '',
        "description": ''
    }
]

// const imgparket = [
//     {
//         "src": '',
//         "alt": '',
//         "title": '',
//         "description": '',
//     }
// ]

export function initImgBanjo(){
    let html = ``
    for(let img of imgbanjo){
        html += `<img src="${img.src}" class="rounded col-xl-3 col-lg-4 col-md-5 col-sm-5  img-fluid p-0" alt="${img.alt}">`
    }
    return html
}
export function initImgPllaka(){
    let html = ``
    for(let img of imgpllaka){
        html += `<img src="${img.src}" class="rounded col-xl-3 col-lg-4 col-md-5 col-sm-5  img-fluid p-0" alt="${img.alt}">`
    }
    return html
}