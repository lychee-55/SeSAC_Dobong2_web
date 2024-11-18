const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request,response){
    // console.log(request)  // 요청 객체 정보

    console.log('url:',request.url)  // 분기처리를 해서 서버를 만들수도 있음.

    // response
    response.writeHead(200,{"content-type":"text/html; charset=utf-8"}) // {}은 글꼴 설정
    // response.write('<p>응답1</p>')
    // response.write('<p>응답2</p>')
    // response.write('<p>응답3</p>')
    // response.end('<h3>응답 종료</h3>')
    
    
    // html파일을 응답으로 보내주기
    // const data = fs.readFileSync('./index.html')
    // response.end(data)
    
    try{
        // try문
        // 실행코드
        const data = fs.readFileSync('./inde.html')
        response.end(data)
    }catch(err){
        // try 문에서 어떤 에러가 발생되었는지 error 객체를 넘겨줌 (생략가능)
        // try 문에서 에러가 났을 때 실행될 코드
        console.log(err)

        // 404.html을 만들고 
        // 파일 이름 읽을 때 오타가 났을때 404페이지 보여주기
        // response.end('<h1>page not found</h1>')
        const data = fs.readFileSync('./404.html')
        response.end(data)
    }
})

const PORT = 8080

// 서버 이벤트 - connection, request
server.on('connection',function(request,response){
    console.log('connection event 발생') // 새로운 고객이 서버에 들어올 때
})

server.on('request',function(request,response){
    console.log('request event 발생')   // 새로고침할 때
})

// 포트 열기
server.listen(PORT,function(){
    console.log(`server listening on ${PORT}`)
    // 서버종료는 ctrl+c
})
