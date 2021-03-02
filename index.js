const resultMessage = document.querySelector(".resultMessage");
const decryptButton = document.querySelector(".decryptButton");

const edwardDecrypt = () => {
    const message = document.querySelector(".message").value.split("");
    let counter = "";
    let result = message.map((item, index) => {
        if (item === message[index+1]){
            counter++
        } else if (item !== message[index+1] && 
            counter%2 !== 0){
                counter = 0;
        }else {
            return item
        }
    });
    result = result.join("");
    resultMessage.value = result;
}

decryptButton.addEventListener("click", edwardDecrypt);
