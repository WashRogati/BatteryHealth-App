
function iniciar(){
    var tela = document.querySelector(".tela-inicial");

    tela.style.animationName ="animation";
    tela.style.animationDuration = "1s";
    tela.style.animationFillMode = "forwards";
    tela.style.animationIterationCount = "1"
}

function dicasModal() {
    var Screen1 = document.querySelector("#dicasModal");
    var blur = document.querySelector(".blur");

    Screen1.style.display = "inline";
    blur.style.filter = "blur(5px)"
}

function configModal() {
    var Screen1 = document.querySelector("#config");
    var blur = document.querySelector(".blur");

    Screen1.style.display = "flex";
    blur.style.filter = "blur(5px)"
}

function modoClaro() {
    var checkbox = document.getElementById("toggle");
    var config = document.querySelector("#config");
    var body = document.querySelector("body");
    var main = document.querySelector("main");
    var aside = document.querySelector(".button");
    var aside2 = document.querySelector(".button2");
    var aside3 = document.querySelector(".button3");
    var section = document.querySelector("section");
    var dicasmodal = document.querySelector("#dicasModal");
    var det = document.querySelector("#det");

    if (checkbox.checked) {
        config.style.backgroundColor = "#ACACAC";
        body.style.backgroundColor = "white";
        main.style.background = "#ACACAC";
        main.style.boxShadow = "20px 20px 60px #ACACAC, -20px -20px 60px #cecece"
        aside.style.backgroundColor = "#ACACAC";
        aside2.style.backgroundColor = "#ACACAC";
        aside3.style.backgroundColor = "#ACACAC";
        section.style.backgroundColor = "#ACACAC";
        dicasmodal.style.backgroundColor = "#ACACAC";
        section.style.backgroundColor = "#ACACAC";
        det.style.backgroundColor = "#ACACAC";

        /* COR DE TEXTOS*/

        config.style.color = "#262626";
        body.style.color = "#262626";
        main.style.color = "#262626";
        aside.style.color = "#262626";
        aside2.style.color = "#262626";
        aside3.style.color = "#262626";
        section.style.color = "#262626";
        dicasmodal.style.color = "#262626";
        section.style.color = "#262626";
        det.style.color = "#262626";


    }
    else {
        config.style.backgroundColor = "#161616";
        main.style.background = "linear-gradient(145deg, #141414, #181818)";
        main.style.boxShadow = "20px 20px 60px #131313, -20px -20px 60px #191919"
        body.style.backgroundColor = "#313031";
        aside.style.backgroundColor = "#161616";
        aside2.style.backgroundColor = "#161616";
        aside3.style.backgroundColor = "#161616";
        section.style.backgroundColor = "#161616";
        dicasmodal.style.backgroundColor = "#161616";
        det.style.backgroundColor = "#161616";
        section.style.backgroundColor = "#161616";

        /* COR DE TEXTOS*/

        config.style.color = "white";
        body.style.color = "white";
        main.style.color = "white";
        aside.style.color = "white";
        aside2.style.color = "white";
        aside3.style.color = "white";
        section.style.color = "white";
        dicasmodal.style.color = "white";
        section.style.color = "white";
        det.style.color = "white";
    }
}

function detalhesModal() {
    var Screen1 = document.querySelector("#det");
    var blur = document.querySelector(".blur");

    Screen1.style.display = "inline";
    blur.style.filter = "blur(5px)"
}

function FecharModal() {
    var Screen1 = document.querySelector("#config");
    var Screen2 = document.querySelector("#dicasModal");
    var Screen3 = document.querySelector("#det");
    var Screen4 = document.querySelector("#noti");
    var blur = document.querySelector(".blur");

    Screen1.style.display = "none";
    Screen2.style.display = "none";
    Screen3.style.display = "none";
    blur.style.filter = "blur(0px)"
}

function mostrar() {
    navigator.getBattery().then((battery) => {
        var progress = document.querySelector("#progress-bar");
        var element = document.querySelector("#idCelular");

        element.innerHTML = `Nivel de carga: ${battery.level}<br>
         Estado de carregamento: ${battery.charging}<br>
         Tempo até carregar totalmente: ${battery.chargingTime}<br>
         Tempo até descarregar totalmente: ${battery.dischargingTime}`;

        document.querySelector("#level").textContent = battery.level * 100 + "%";
        progress.style.height = battery.level * 100 + "%";

        battery.onlevelchange = () => {
            document.querySelector("#level").textContent = battery.level * 100 + "%";
            progress.style.height = battery.level * 100 + "%";
            if (battery.level < 0.40) {
                progress.style.background = "linear-gradient(to top,#c70303 40%, #b66802 95.01%)";
            }
            else if (battery.level < 0.20) {
                progress.style.background = "red";
            }
            else {
                progress.style.background = "linear-gradient(277.39deg, #6CB602 0%, #C7A903 95.01%);";
            }
        }

        battery.onchargingtimechange = () => {
            var numero = battery.chargingTime / 60;
            if (battery.charging && numero > 10000) {
                document.getElementById("stateBatterytime").innerHTML = parseInt(numero.toString().substring(0, 2));
                console.log(numero);
                console.log(parseInt(battery.chargingTime.toString().substring(0, 2)));
            }
            else if (numero < 10000) {
                document.getElementById("stateBatterytime").innerHTML = parseInt(numero.toString().substring(0, 1));
                console.log(numero);
                console.log(parseInt(battery.chargingTime.toString().substring(0, 1)));
            }
            else {
                document.getElementById("stateBatterytime").innerHTML = "0";
                /*                 var numero2 = battery.dischargingTime / 60;
                                document.getElementById("stateBatterytime").innerHTML = parseInt(numero2.toString().substring(0, 1));
                                console.log(numero2);
                                console.log(parseInt(battery.dischargingTime.toString().substring(0, 1))); */
            }
        };

        battery.onchargingchange = () => {
            if (battery.charging) {
                document.querySelector("#stateBattery").textContent = 'Charging...⚡';
                document.querySelector("#stateBattery2").textContent = 'Charging...⚡';
            }
            else {
                document.querySelector("#stateBattery").textContent = 'Normal';
                document.querySelector("#stateBattery2").textContent = 'Normal';
            }
        };

    })
};