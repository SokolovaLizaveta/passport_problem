const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all(){

    document.getElementsByTagName('div')[3].innerHTML='SOKOLOVA'
    //document.getElementsByTagName('div')[3].style.color = '#701810';//
    document.getElementsByTagName('div')[4].innerHTML='ELIZAVETA'
    document.getElementsByTagName('div')[7].innerText='01.05.2025'
}
node_for_click_all.addEventListener("click",find_edit_all)