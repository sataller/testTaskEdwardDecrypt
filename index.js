const resultMessage = document.querySelector(".resultMessage");
const decryptButton = document.querySelector(".decryptButton");

const edwardDecrypt = () => {
    const message = document.querySelector(".message").value.split("");
    let result = message.map((item, index) => {
        if (item === message[index - 1] && item === message[index + 1]) {
            return item
        } else if (item !== message[index - 1] && item !== message[index + 1]) {
            return item
        }
    });
    result = result.join("");
    resultMessage.value = result;
}

decryptButton.addEventListener("click", edwardDecrypt);
