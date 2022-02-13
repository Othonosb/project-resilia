function scrollToBottom(classe){
    var element
    element = document.getElementsByTagName(classe)
    element.scrollTop = element.scrollHeight - element.clientHeight
}

