var rock_paper_scissor = /** @class */ (function () {
    function rock_paper_scissor() {
        this.b = 1;
        this.c = 2;
        this.d = 3;
        this.score = 0;
        this.score1 = 0;
    }
    rock_paper_scissor.prototype.campare = function (choice) {
        switch (choice) {
            case 1:
                if (choice == this.b) {
                    console.log('draw');
                    result.textContent = '' + 'draw';
                    //    let result=(document.getElementById("score"));
                    // result.textContent=this.score;
                    break;
                }
                else if (choice == this.c) {
                    this.score1 += 1;
                    console.log(this.score, 'user win');
                    result.textContent = '' + 'user win';
                    break;
                }
                else
                    (choice == this.d);
                {
                    this.score += 1;
                    console.log(this.score, 'user win');
                    result.textContent = 'admin win';
                    break;
                }
            case 2:
                if (choice >= this.c) {
                    this.score += 1;
                    console.log(this.score, 'user win');
                    result.textContent = '' + 'user win';
                    break;
                }
                else if (choice == this.c) {
                    console.log('draw');
                    result.textContent = '' + 'draw';
                    break;
                }
                else
                    (choice == this.c);
                {
                    this.score1 += 1;
                    console.log(this.score1, 'admin win');
                    result.textContent = '' + 'admin win';
                    break;
                }
            case 3:
                if (choice >= this.d) {
                    this.score1 += 1;
                    console.log(this.score1, 'admin win');
                    result.textContent = 'admin win';
                    break;
                }
                else if (choice <= this.d) {
                    this.score += 1;
                    console.log(this.score, 'user win');
                    result.textContent = '' + 'user win';
                    break;
                }
                else
                    (choice == this.d);
                {
                    // let result=document.getElementById("score");
                    // result.textContent=this.score;
                    console.log(0, 'draw');
                    result.textContent = '' + 'draw';
                    break;
                }
            case 4:
                console.log('sorry');
        }
    };
    return rock_paper_scissor;
}());
window.onload = function () {
    var obj = new rock_paper_scissor();
    var a1 = parseInt(document.getElementById("1").value);
    var a2 = parseInt(document.getElementById("2").value);
    var a3 = parseInt(document.getElementById("3").value);
    // document.getElementById("1").onclick=function(){new rock_paper_scissor().campare(1)}
    // let a2=document.querySelector("#2");
    // let a3=document.querySelector("#3");
};
// let m1=new rock_paper_scissor()
// m1.campare()
var result = document.getElementById("score");
