time = 0;
ws = wsGet();
ans = gen(ws);
console.log(ans);
document.querySelector("#submit").addEventListener("click", submit);
document.querySelector("#num").addEventListener("keyup", function () {
    if (verify(this.value, ws)) {
        document.querySelector("#status").innerHTML = "";
    } else {
        document.querySelector("#status").innerHTML = "<font color=\"red\">输入错误！</font>";
    }
});
document.querySelector("#num").addEventListener("keydown", (key) => {
    if (key.key === "Enter") {
        submit();
    }
});
function submit() {
    let usrAns = document.querySelector("#num");
    if (verify(usrAns.value, ws)) {
        time++;
        if (compare(ans, usrAns) === "correct") {
            usrAns.value = "";
            alert(`答对了!\n你用了${time}次机会！`);
            location.reload();
        }
        let node = document.createElement("p");
        node.innerHTML = `${usrAns.value}=>${compare(ans, usrAns)}`;
        document.querySelector("#result").append(node);
        usrAns.value = "";
    }
}
function wsGet() {
    let ws = 0;
    do {
        ws = prompt("请输入位数");
    } while (!(ws === "" || verify(ws, 1)));
    return ws * 1;
}