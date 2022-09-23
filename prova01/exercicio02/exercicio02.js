// vermelho,azul,verde,rosa,amarelo

const quadrado = document.getElementById("quadrado");
let contador = 0;

const cores = {
    1() {
        quadrado.style["background-color"] = "red";
    },
    2() {
        quadrado.style["background-color"] = "blue";
    },
    3() {
        quadrado.style["background-color"] = "green";
    },
    4() {
        quadrado.style["background-color"] = "pink";
    },
    5() {
        quadrado.style["background-color"] = "yellow";
    }
}

quadrado.addEventListener("click", () => {
    if (contador != 5) {
        contador++;
    }
    else {
        contador = 1;
    }
    const mudarCor = cores[contador];
    mudarCor();
})
