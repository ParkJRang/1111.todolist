//변수선언
const btn1 = document.getElementById('btn1');//입력버튼 변수
const del_btn = document.getElementById('del_btn');//삭제버튼 변수
const addValue = document.getElementById('addValue');//입력내용 변수
let result = document.querySelector('ul');//출력되는 곳 변수
let addV_a=1;//취소선 적용 위한 토글기능 초기값 변수

//1. 글추가 버튼(+) 클릭시 내용 출력하는 함수 작성
btn1.addEventListener('click',()=>{
  addTo();
});
// addValue.addEventListener('keydown',()=>{
//   addTo();
// });
//2. 함수 호출
function addTo(){
  // alert('글 내용 추가');
  if(addValue.value===''){//입력양식에 내용이 비어있다면, ".value"는 기존에 없는 입력값을 가져오는 속성, ".textContent"는 이미 태그에 존재하는 데이터값을 가져오는 속성, 둘다 가져오는 값은 '문자열' 데이터
    // alert('글내용을 입력하세요.');//메세지 띄우기
  }else{//그렇지 않다면(글 입력했다면)
    let list = document.createElement('li');
    let remove = document.createElement('button');
    list.innerHTML=addValue.value;//목록에 글내용 출력
    list.style.position='relative';
    result.appendChild(list);//ul태그 자손으로 li태그 새로 추가
    //삭제버튼 서식적용
    remove.innerText='삭제';
    remove.style.textAlign='right';
    remove.style.fontSize='1rem';
    remove.style.border='none';
    remove.style.position='absolute';
    remove.style.right='4px';
    remove.style.background='#fff';
    remove.style.cursor='pointer';
    

    list.addEventListener('click',()=>{  
      if(addV_a==0){//해당 글 목록 클릭시 '취소선', 글자색 '회색'으로 표시
        list.style.textDecoration='line-through';
        list.style.color='#e6e6e6';
        addV_a=1;
      }else{//다시 해당 글 목록 클릭시 원래대로 변경
        list.style.textDecoration='none';
        list.style.color='#000';
        addV_a=0;
      };
    });
    list.appendChild(remove);
    addValue.value='';//입력한 값은 지워지게 하기
    addValue.focus();//입력 커서 자동으로 띄우기

    //del(X) 버튼 클릭시 해당 글 삭제 => 클릭한 li태그 삭제
    remove.addEventListener('click',function(e){
      let li_remove = e.target.parentElement;
      li_remove.remove();//닫기 버튼의 부모 li태그 지우기
    });
  };
};
//전체글 삭제
del_btn.addEventListener('click',function(){
  clearAll();//함수호출
});
//전체글 삭제 함수
function clearAll(){ //확인 선택시 글 내용 있는지 확인후, 없으면 알림, 하나라도 있으면 전체삭제.
  if(confirm('버튼을 클릭시 글 내용이 모두 삭제됩니다. 정말로 삭제하시겠습니까?')==true){
    if(result.innerText==''){
      alert('삭제할 글 목록이 없습니다.');
    }else{
      result.innerText='';
    };
  }else{ //취소시 false값 출력하고 종료
    return false;
  };
};