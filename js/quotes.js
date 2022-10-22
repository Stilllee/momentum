const quote_list = [
  {
    quote: "인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다.",
    author: "- 넬슨 만델라",
  },
  {
    quote: "일기예보에도 불구하고, 봄처럼 살아라.",
    author: "- 릴리 퓰리쳐",
  },
  {
    quote: "모든 진보는 안전 구역 밖에서 이루어진다.",
    author: "- 마이클 존 보박",
  },
  {
    quote: "무언가를 시작하고 실패하는 것보다 더 나쁜 것은…아무것도 시작하지 않는 것이다.",
    author: "- 세스 고딘",
  },
  {
    quote: "모든 위대한 변화는 혼돈에서 온다.",
    author: "- 디팩 초프라",
  },
  {
    quote: "그리고 여전히, 나는 일어선다.",
    author: "- 마야 안젤루",
  },
]

const quote = document.querySelector("#quote_and_autor p:first-child");
const author = document.querySelector("#quote_and_autor p:last-child");
const todaysQuote = quote_list[Math.floor(Math.random() * quote_list.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


