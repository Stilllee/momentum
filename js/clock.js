const date_and_time = document.getElementById("date_and_time");

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const secounds = String(date.getSeconds()).padStart(2, "0");
  date_and_time.innerText = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
}

getClock();
setInterval(getClock, 1000);

