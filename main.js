const init = () => {
    //vars
    let input_pwd = document.getElementById("pwd");

    let btn = document.getElementById("check")

    btn.addEventListener("click", e => {
        let score = 0;
        input_value = input_pwd.value;
        if(input_value.length == 0) score = 0;
        if(input_value.length >= 5) score++;
        if(input_value.length >= 8) score++;
        let up = false;
        let down = false;
        for (let index = 0; index < input_value.length; index++) {
            let letter = input_value[index];
            if (letter.toUpperCase() === letter) {
                up = true;
            }
            if (letter.toLowerCase() === letter) {
                down = true;
            }
            if(up && down){
                score++;
                break;
            }
        }
        console.log(score);
    })


}





document.addEventListener("DOMContentLoaded", init);