// index

$(".lan-list").click(function(){
    $(".drop-list").toggle();
})

$(".top-tab").on('click',function(){
    // console.log("999")
    $(this).addClass("top-tab-active").siblings().removeClass("top-tab-active");
})


// 首頁之外的 navbar+searchBar 因為 position:fixed，其後之 <main> position: absolute 距離 top:高度
let resultNavH = $(".result-navbar").height();
$(".result-main").css("top",resultNavH);

// result-list　
// 搜尋結果列表的資料
let resultContent = document.querySelector(".result-list");
let resultStr = '';
fetch('./data/data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        // console.log(myJson);
        appendData(myJson);
    });

function appendData (myJson){
    for (let i=0; i<myJson.length; i++){
        let resultItem = 
            `<li class="pt-xs pb-xs result-b-btm-sec">
                <a href="./aloha-detail.html" class="result-card d-flex">
                    <div class="result-card-img">
                        <img src="${myJson[i].coverImg}" alt="">
                    </div>
                    <div class="result-card-info d-flex flex-d-col jc-center">
                        <div class="mb-1">
                            <div class="d-flex jc-space-between">
                                <div class="d-flex fz-ets color-tertiary">
                                    <p class="color-primary">${myJson[i].locationTown}</p>
                                    <p class="">．</p>
                                    <p class="">${myJson[i].farCenter}</p>
                                </div>
                                <div class="d-flex fz-xxs">
                                    <p class="color-basic-b mr-4">${myJson[i].stars}</p>
                                    <p class="color-tertiary">${myJson[i].score} (${myJson[i].reviewsNum})</p>
                                </div>
                            </div>
                            <h3 class="fw-bold fz-sm font-primary color-basic-b">${myJson[i].name}</h3>
                        </div>
                        <div class="d-flex jc-space-between">
                            <div class="d-flex flex-d-col jc-space-between">
                                <div class="mb-1">
                                    <p class="fw-bold fz-xxs">${myJson[i].roomType}</p>
                                    <p class="fz-ets color-tertiary">${myJson[i].bedType}</p>
                                </div>
                                <div class="d-flex fz-ets">
                                    <p class="result-card-tag">${myJson[i].deal1}</p>
                                    <p class="result-card-tag">${myJson[i].deal2}</p>
                                </div>
                            </div>
                            <div class="d-flex jc-space-between ai-flex-end">
                                <div class="result-card-info-discount ta-right">
                                    <p class="fz-ets color-tertiary">per night</p>
                                    <p class="fw-bold fz-sm font-primary color-primary">${myJson[i].price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>`
        resultStr += resultItem;
        resultContent.innerHTML = resultStr;
    }
    
}


// 
$('.pagination').on('click',function(){
    $(this).addClass('pagination-active').siblings().removeClass('pagination-active');
});

// choices-slider
// let choicesContent = document.querySelector(".choices-slider");
// let choicesStr = '';
// fetch('./data/index-choice.json')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(choicesJson) {
//         // console.log(choicesJson);
//         appendChoices(choicesJson);
//     });

// function appendChoices (choicesJson){
//     for(let i =0; i<choicesJson.length; i++){
//         let choicesItem = `
//         <li class="card choices-card">
//             <a href="./aloha-detail.html">
//                 <div class="card-img-wrap mb-tiny">
//                     <img src="${choicesJson[i].coverImg}" alt="">
//                 </div>
//                 <div class="card-txt-wrap">
//                     <p class="card-tit fw-bold color-basic-b">${choicesJson[i].name}</p>
//                     <div class="card-dec">
//                         <div class="d-flex ai-center mb-tiny">
//                             <span class="color-basic-b mr-tiny mr-4">${choicesJson[i].starts}</span>
//                             <span class="fz-xxs">${choicesJson[i].score}</span>
//                             <span class="fz-ets">${choicesJson[i].reviewsNum}</span>
//                         </div>
//                         <div class="d-flex ai-center">
//                             <p class="mr-tiny">${choicesJson[i].price}</p>
//                             <del class="fz-ets">${choicesJson[i].price*1.2}</del>
//                         </div>
//                     </div>
//                 </div>
//             </a>
//         </li>`;
//         choicesStr += choicesItem;
//         choicesContent.innerHTML = choicesStr;
//     }
// }