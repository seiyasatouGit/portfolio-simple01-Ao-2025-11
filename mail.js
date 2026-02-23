// const { attachment } = require("express/lib/response");

document.getElementById("checkBtn").addEventListener("click",() => {
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("body").value;
    const attachment = document.getElementById("attachment").value;

    

    const warnings = [];


// @mycompany.co.jp
    if(!to.endsWith("@mycompany.co.jp")){
        warnings.push("社外宛てです");
    }

    // 件名未入力
    if(subject.trim() === "") {
        warnings.push("件名が未入力です");
    }

    // 添付ファイル未選択
    if (attachment.trim() !== "") {
        warnings.push("添付ファイルあります");
    }

    const result = document.getElementById("result");
    result.innerHTML = "";

    if (warnings.length === 0) {
        result.textContent = "問題はありませんでした。";
    } else {
        const ul = document.createElement("ul");

    warnings.forEach(warning => {
        const li = document.createElement("li");
        li.textContent = warning;
        ul.appendChild(li);
    });

    result.appendChild(ul);
    }
});



