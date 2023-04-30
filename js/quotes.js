
const quotes = [
    {
        quote : "승자는 시간을 관리하며 살고, 패자는 시간에 끌려 산다.",
        author: "J.하비스",
    },
    {
        quote : "아무것도 하지 않으면 아무 일도 일어나지 않는다.",
        author: "기시미 이치로",
    },
    {
        quote : "일단 시작해라. 나중에 완벽해지면 된다.",
        author: "론 무어",
    },
    {
        quote : "오늘 할 수 있는 일을 내일로 미루지 마라.",
        author: "벤자민 프랭클린",
    },
    {
        quote : "위험은 자신이 무엇을 하는지 모르는 데서 온다.",
        author: "워런 버핏",
    },
    {
        quote : "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
        author: "단테",
    },
    {
        quote : "변명 중에서도 가장 어리석고 못난 변명은 '시간이 없어서'이다.",
        author: "에디슨",
    },
    {
        quote : "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
    },
    {
        quote : "Do one thing every day that scares you.",
        author: "Anonymous",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function quotePrint(){
    const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

    quote.innerHTML = `${todayQuote.quote}`;
    author.innerHTML = `-${todayQuote.author}-`;
}
quotePrint();
setInterval(quotePrint, 5000);