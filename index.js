var num = document.querySelectorAll(".drum").length
// console.log(num)

for (var i = 0; i < num; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("clicked")
        var btn = this.innerHTML

        switch (btn) {
            case 'A': var audio = new Audio("sounds/tom-1.mp3")
                audio.play();
                console.log("A")
                break;
            case 'S': var audio = new Audio("sounds/tom-2.mp3")
                audio.play();
                console.log("S")
                break;
            case 'D': var audio = new Audio("sounds/tom-3.mp3")
                audio.play();
                console.log("D")
                break;
            case 'F': var audio = new Audio("sounds/tom-4.mp3")
                audio.play();
                console.log("F")
                break;
            case 'J': var audio = new Audio("sounds/snare.mp3")
                audio.play();
                console.log("J")
                break;
            case 'K': var audio = new Audio("sounds/crash.mp3")
                audio.play();
                console.log("K")
                break;
            case 'L': var audio = new Audio("sounds/kick-bass.mp3")
                audio.play();
                console.log("L")
                break;
        }

    })
}


document.addEventListener("keypress", function (e) {
    var key = e.key.toLowerCase()
    switch (key) {
        case "A": var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            console.log("A")
            break;
        case 'S': var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            console.log("S")
            break;
        case 'D': var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            console.log("D")
            break;
        case 'F': var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            console.log("F")
            break;
        case 'J': var audio = new Audio("sounds/snare.mp3")
            audio.play();
            console.log("J")
            break;
        case 'K': var audio = new Audio("sounds/crash.mp3")
            audio.play();
            console.log("K")
            break;
        case 'L': var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            console.log("L")
            break;
            default:
                console.log(e.key)
    }
})