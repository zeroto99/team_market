// 뒤로가기
function goBack(){
  // console.log('뒤로 보내조');
  // window.history;
  window.history.back();
}
const btnBack = document.querySelector('.btn-back');
btnBack.addEventListener('click', goBack);

// title 수정
function changeTitle() {
  htmlTitle = document.title;
  document.title = checkAccountName() + ' | ' + htmlTitle;
}

// id값 체크
function checkAccountName() {
  const accountName = (location.search.split('id=')[1]) ? location.search.split('id=')[1] : localStorage.getItem('accountname');
  return accountName;
}

// prodid값 체크
function checkProdId() {
  const prodId = (location.search.split('productId=')[1]) ? location.search.split('productId=')[1] : null;
  return prodId;
}

// 모달 
const open = () => {
  document.querySelector(".modal").classList.remove("hidden");
}
const close = () => {
  document.querySelector(".modal").classList.add("hidden");  
}  

document.querySelector(".btn-menu").addEventListener("click", open);
document.querySelector(".hidden-menu").addEventListener("click", close); 

const btn = document.querySelector('.log-out-btn');
const pop = document.querySelector('.dimm');
const out = document.querySelector('.cancle-btn');

const logout = document.querySelector('.logout-btn');

btn.addEventListener('click',viewOption);
out.addEventListener('click',cancleOption);

logout.addEventListener('click',checkLogout);

function viewOption() {
  pop.style.display = 'block';
}
function cancleOption() {
  pop.style.display = 'none';
}

// const removeToken = (userToken) => {
// localStorage.removeItem("token");
// setToken(null);

function checkLogout(){
  localStorage.removeItem("Token");
    location.href="./login.html";
}
