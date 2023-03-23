const mainWidth = document.getElementById('main')
console.log(mainWidth.offsetWidth)
window.addEventListener('resize',()=>{
    // 卡片容器寬度
    let targetWidth = mainWidth.offsetWidth;
    // 每行卡片數量
    let cardCount = Math.floor(targetWidth /380);
    // 最後一行卡片數量
    let lastRowCard = random % cardCount;
    console.log('剩餘卡片',random % cardCount);
    
    // 補齊空白卡片
    if(cardCount - lastRowCard == 2){
        console.log(cardCount - lastRowCard)
        cardBox.innerHTML += '<div style="width:380px;"></div><div style="width:380px;"></div>'
    }else if(cardCount - lastRowCard == 1){
        console.log(cardCount - lastRowCard)
        cardBox.innerHTML += '<div style="width:380px;"></div>'
    }
})