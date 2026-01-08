let navX = -100
let sideX = 100

function dynamicNav() {
    if (navX === 0) {
        document.getElementById("navbarOpen").style.transform = "translateX(-100%)";
        navX = -100
    } else {
        document.getElementById("navbarOpen").style.transform = "translateX(0)";
        navX = 0
    }
}

function dynamicSide() {
    if (sideX === 100) {
        document.getElementById("sidebarOpen").style.transform = "translateX(0)";
        sideX = 0
    } else {
        document.getElementById("sidebarOpen").style.transform = "translateX(100%)"
        sideX = 100
    }
}