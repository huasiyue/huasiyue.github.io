function show_runtime() {
    window.setTimeout("show_runtime()", 1000);
    const X = new Date("10/29/2023 00:00:00"); // 这里设置您的建站时间
    const Y = new Date();
    const T = (Y.getTime() - X.getTime());
    const M = 24 * 60 * 60 * 1000;
    const a = T / M;
    const A = Math.floor(a);
    const b = (a - A) * 24;
    const B = Math.floor(b);
    const c = (b - B) * 60;
    const C = Math.floor((b - B) * 60);
    const D = Math.floor((c - C) * 60);
    document.getElementById("runtime_span").innerHTML = "本站已运行: " + A + "天" + B + "小时" + C + "分" + D + "秒";
}
show_runtime();