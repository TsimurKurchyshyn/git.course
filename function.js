function whatShallWear (temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    }
    else if (temp < 70) {
        console.log("Wear a sweater");
    }
    else {
        console.log("Wear t-shirt");
    }
}

whatShallWear(60);
whatShallWear(50);
whatShallWear(80);
