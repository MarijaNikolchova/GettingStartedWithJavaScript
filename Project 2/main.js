let userName = prompt("Enter your name: ");

let message; 

switch (userName.toLowerCase()) {
    case "boban":
    case "ljupcho":
    case "maja":
    case "filip":
    case "valmira":
    case "ilija":
        message = "Hello friend"
        break;

    default: 
        message = "I don't know you"
        break;
}

alert(message);