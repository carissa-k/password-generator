var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// letters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
var choices;

// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Prompts to generate password function
function generatePassword() {

    enter = parseInt(prompt("Please select a password length between 8 and 128 characters."));

    // Display alert if user selects cancel on first prompt 
    if (!enter) {
        alert("You must enter a value to continue.");
    } else if (enter < 8 || enter > 128) {

        // Validates length of password

        enter = parseInt(prompt("Please select a password length between 8 and 128."));

    } else {

        confirmNumber = confirm("Do you want your password to contain numbers?");
        confirmCharacter = confirm("Do you want your password to contain special characters?");
        confirmUppercase = confirm("Do you want your password to contain uppercase letters?");
        confirmLowercase = confirm("Do you want your password to contain lowercase letters?");
    };

    // else if user selects cancel to all 4 prompts
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("Your password must have a length between 8-128 characters and you must include at least one of the following options: number, special character, uppercase letter or lowercase letter. Please click the Create My Password button to start over.");

    }
    // else if says yes to all 4 choices
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    // else if says yes to 3 choices
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    // else if says yes to 2 choices
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    // else if says yes to 1 choice
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    

    // allow user to generate length of password
    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// Display password in password container
    function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}


