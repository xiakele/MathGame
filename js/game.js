function gen(ws = 4) {
    let ans = [];
    let num = Array.from({ length: 10 }, (rubbish, num) => num);
    ans.push(num.splice(num.slice(1)[Math.floor(Math.random() * 9)], 1).toString());    //先截取[1,2,...,9]，再随机抽一个元素返回并删除
    for (let i = 1; i < ws; i++) {
        ans.push(num.splice(Math.floor(Math.random() * num.length), 1).toString());
    }
    return ans;
}

function verify(num,ws) {
    let target = new Set(num);
    let reg = new RegExp(`^[1-9]\\d{${ws - 1}}$`);
    if (target.size === num.length && reg.test(num)) {
        return true;
    }
    return false;
}

function compare(ans, usrAns) {
    let result = {
        A: 0,
        B: 0
    };
    usrAns = Array.from(usrAns.value);
    if (ans.toString() === usrAns.toString()) {
        return "correct";
    }
    usrAns.forEach((value, index) => {
        if (ans.indexOf(value) === index) {
            result.A++;
        } else if (ans.includes(value)) {
            result.B++;
       }
    });
    // console.log(result);
    return ("A".repeat(result.A)+"B".repeat(result.B)||"None");
}