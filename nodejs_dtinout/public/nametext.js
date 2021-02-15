// // 데이터 수집 모듈

// const { update } = require("../models/user");

// // 데이터 수정, 삭제
// async function uddata(name){
//     try{
//         const res = await axios.get(`/users/${name}`); //routes 작성하면서 수정
//         const comments = res.data;
//         comments.map(function(comment){
//             const edit = document.createElement('button');
//             edit.textContent = '수정';
//             edit.addEventListener('click', async () => {
//                 const newtext = prompt('바꿀 내용을 입력하세요');
//                 if(!newtext){
//                     return alert('내용을 입력하세요!');
//                 }
//                 try{
//                     await axios.patch(`/users/${newtext}/comment`); //routes 작성하면서 수정
//                     uddata(comment.name);
//                 }catch(err){
//                     console.error(err);
//                 }
//             });
//             const remove = document.createElement('button');
//             remove.textContent = '삭제';
//             remove.addEventListener('click', async () => {
//                 try{
//                     await axios.delete(`/users/${comment.name}/comment`);
//                     uddate(comment.name);
//                 }catch(err){
//                     console.error(err);
//                 }
//             });
//             let td = document.createElement('td');
//             td.appendChild(edit);
//             row.appendChild(td);
//             td = document.createElement('td');
//             td.appendChild(remove);
//             row.appendChild(td);
//             tbody.appendChild(row);
//         });
//     }catch(err){

//     }
// }
// // 사용자 정보 로딩, uddata를 불러오고, 행 과 열 추가
// async function getUser(){
//     try{
//         const res = await axios.get('/routes/users.js');
//         const users = res.data;
//         console.log(users);
//         const tbody = document.querySelector('#user_info');
//         tbody.innerHTML='';
//         users.map(function(user){
//             const row = document.createElement('tr');
//             row.addEventListener('click', () => {
//                 uddata(user.name);
//             });
//             let td = document.createElement('td');
//             td.textContent = user.name;
//             row.appendChild(td);
//             td = document.createElement('td');
//             td.textContent = user.text;
//             row.appendChild(td);
//             tbody.appendChild(row);
//         });
//     }catch(err){
//         console.error(err);
//     }
// }

// // 사용자 및 text 등록
// document.getElementById('user_text').addEventListener('submit', async(e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const text = e.target.textarea.value;
//     if(!name){
//         return alert("이름을 입력하세요");
//     }
//     if(!text){
//         return alert("내용을 입력하세요");
//     }
//     try{
//         await axios.post('/routes/users.js', {name, text});
//         getUser();
//     }catch(err){
//         console.error(err);
//     }
//     e.target.name.value ='';
//     e.target.textarea.value ='';
// });

// 데이터 수집 모듈

// const { update } = require("../models/user");
// console.log('public 파일접근');
// 데이터 수정, 삭제
async function uddata(id){
    try{
        const res = await axios.get(`/users/${id}`); //routes 작성하면서 수정
        const comments = res.data;
        comments.map(function(comment){
            const edit = document.createElement('button');
            edit.textContent = '수정';
            edit.addEventListener('click', async () => {
                const newtext = prompt('바꿀 내용을 입력하세요');
                if(!newtext){
                    return alert('내용을 입력하세요!');
                }
                try{
                    await axios.patch(`/users/${newtext}/comment`); //routes 작성하면서 수정
                    uddata(comment.id);
                }catch(err){
                    console.error(err);
                }
            });
            const remove = document.createElement('button');
            remove.textContent = '삭제';
            remove.addEventListener('click', async () => {
                try{
                    await axios.delete(`/users/${comment.id}/comment`);
                    uddate(comment.id);
                }catch(err){
                    console.error(err);
                }
            });
            let td = document.createElement('td');
            td.appendChild(edit);
            row.appendChild(td);
            td = document.createElement('td');
            td.appendChild(remove);
            row.appendChild(td);
            tbody.appendChild(row);
        });
    }catch(err){

    }
}
// 사용자 정보 로딩, uddata를 불러오고, 행 과 열 추가
async function getUser(id){
    try{
       //const res = await axios.get('/routes/users.js');
       const res = await axios.get(`/users/${id}`);
        const users = res.data;
        console.log(users);
        const tbody = document.querySelector('#user_info tbody');
        tbody.innerHTML='';
        users.map(function(user){
            const row = document.createElement('tr');
            // row.addEventListener('click', () => {
            //     uddata(id);
            // });
            let td = document.createElement('td');
            td.textContent = user.name;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = user.text;
            row.appendChild(td);
            
            tbody.appendChild(row);
        });
    }catch(err){
        console.error(err);
    }
}

// 사용자 및 text 등록
document.getElementById('user_text').addEventListener('submit', async(e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const name = e.target.name.value;
    const text = e.target.textarea.value;
    if(!name){
        return alert("이름을 입력하세요");
    }
    if(!text){
        return alert("내용을 입력하세요");
    }
    try{
        await axios.post('/users', {id, name, text});
        getUser(id);
    }catch(err){
        console.error(err);
    }
    e.target.id.value='';
    e.target.name.value ='';
    e.target.textarea.value ='';
});