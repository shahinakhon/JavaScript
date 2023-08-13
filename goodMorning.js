let hour = 21;

if (hour < 12) {
    console.log( "Good morning🌞, it is", hour, "EST");
} else if (hour > 12 && hour < 18) {
    console.log("Good afternoon, it is", hour, "EST");
} else if (hour > 18 && hour < 24) {
    console.log("Good evening🌆");
}
