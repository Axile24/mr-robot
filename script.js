function createCanvasWithControls(canvasColor = 'red') {
    // Skapar canvas och lägger till den i dokumentet
    const myCanvas = document.createElement("canvas");
    myCanvas.width = 200;
    myCanvas.height = 200;
    document.body.appendChild(myCanvas);
    const ctx = myCanvas.getContext('2d');
    ctx.fillStyle = canvasColor;
    ctx.fillRect(0, 0, 150, 150);

    // Funktion för att skapa en progress bar och tillhörande knapp
    function createProgressBarAndButton(progressBarValue = 0, progressBarMax = 100, buttonText = "Increase") {
        // Skapar progress bar
        const prog = document.createElement('progress');
        prog.style.height = '20px';
        prog.style.width = '300px';
        prog.value = progressBarValue;
        prog.max = progressBarMax;
        document.body.appendChild(prog);

        // Skapar knapp
        const btn = document.createElement("button");
        btn.textContent = buttonText;
        document.body.appendChild(btn);

        // Lägg till funktionalitet för knappen att öka progress bar
        btn.addEventListener('click', () => {
            if (prog.value < prog.max) {
                prog.value += 10;
            }
        });

        // Skapar radbrytning för nästa progress bar och knapp
        const br = document.createElement("br");
        document.body.appendChild(br);
    }

    // Skapar fyra progress bars och knappar
    for (let i = 0; i < 4; i++) {
        createProgressBarAndButton();
    }
}

// Anropar funktionen för att skapa canvas och fyra progress bars med knappar
createCanvasWithControls();
