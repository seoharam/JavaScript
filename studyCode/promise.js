'use strict'
/////////////////////////////////////////////////////////////////////////////////////////////
// XMLHttpRequest : event handler ---> 비동기 처리
// Promise : fetch ---> promise ---> 비동기 처리
// fetch : 가져오다. 서버로부터 web page를 가져오다.
//  ㄴ fetch의 return 값이 promise
//  ㄴ return => resolve = response argument => then : web server와의 통신이 성공했을 때 실행되는 함수
//  ㄴ throw => reject = err argument => catch : web server와의 통신이 실패했을 때 실행되는 함수
// async : syntactic sugar(쓰기 쉽게 만들어 놓은 것) for promise
/////////////////////////////////////////////////////////////////////////////////////////////

// function
async function fetchUser(a) {
    console.log('Run Promise !')
    if (a>0){
        return 'End running !'
    }
    else {
        throw new Error('negative number')
    }
}

// ------------ Under contents don't change
const a = fetchUser()

// resolve
a.then((response)=>{
    // Executable statement
    console.log(`fetchUser result: ${response}`)
})

// reject
.catch((error)=>{
    console.log(`Error Happenning: ${error}`)
})

// common
.finally(()=>{
    // Without considering resolve and reject, when Promise is end, then commonly have to be run
    console.log('End of promise from finally')
})