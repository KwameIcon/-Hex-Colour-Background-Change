document.addEventListener('DOMContentLoaded', () =>{

    
    const changeButton = document.querySelector(".changeBackround");

    changeButton.addEventListener('click', () =>{
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        const reverseColor = color[Math.floor(Math.random() * 6)];

        let header = document.querySelector(".header");
        let hexOutputField = document.querySelector(".hexadecimal");
        hexOutputField.textContent = color;
        document.body.style.backgroundColor = color;
        header.style.font-color = reverseColor;
    })
})