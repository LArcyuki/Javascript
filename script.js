function getElement(){
    elements = document.querySelectorAll('.shop li');

    let len = elements.length;
    for (let i = 0; i < len; i++){
        console.log(elements.item(i).textContent);
    }
}

//　外部JavaScript
/*
外部JavaScriptファイルは
読み込まれたらすぐに実行されます。
*/
