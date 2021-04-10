!function(){
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0,n)
            // 每次循环上卷内容
            container.scrollTop = container.scrollHeight
            //判断代码长度等于代码长度停止
            if(n >= code.length) {
                window.clearInterval(id)
                // 有回调就调用回调
                fn && fn.call()
            }
        },27)

    }
    let code = `
        /*
        * 首先准备皮卡丘的皮 哈哈哈！
        */
        .preview {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FEE433;
    }
    .wrapper {
        position: relative;
        width: 100%;
        height: 165px;
    }
    /*
    * 然后我们来画皮卡丘的鼻子
    */
    .nose {
        position: absolute;
        left: 50%;
        top: 28px;
        transform: translateX(-11px);
        width: 22px;
        height: 22px;
        border-radius: 11px;
        border: 11px solid black;
        border-width: 10px 12px;
        /* 其他颜色设置透明 */
        /* border-color: red green blue yellow; */
        border-color: black transparent transparent transparent;
    }
    /*
    * 然后我们来画皮卡丘的眼镜
    */
    .eye {
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        border-radius: 50%;
        border: 2px solid #000;
    }
    /*
    * 接下来是眼珠子
    */
    .eye::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 6px;
        border: 2px solid #000;
        background: white;
        border-radius: 50%;
    }
    /*
    * 左眼放左边
    */
    .eleft {
        position: absolute;
        left: 50%;
        transform: translateX(-131px); 
    }
    /*
    * 右眼放左边
    */
    .eright {
        position: absolute;
        left: 50%;
        transform: translateX(90px); 
    }
    /*
    * 接着再画皮卡丘的脸
    */
    .face {
        width: 68px;
        height: 68px;
        background-color: #Fc0d1c;
        border: 2px solid black;
        border-radius: 50%;
        
    }
    /*
    * 脸部归位
    */
    .fleft {
        position: absolute;
        right: 50%;
        top: 85px;
        margin-right: 116px;
    }
    .fright {
        position: absolute;
        left: 50%;
        top: 85px;
        margin-left: 116px;
    }
    /*
    * 上嘴唇
    */
    .UperLip {
        width:  84px;
        height:22px;
        border: 3px solid black;
        background-color: #FEE433;
    }
    .uleft {
        position: absolute;
        top: 52px;
        right: 50%;
        border-top: none;
        border-right: none;
        border-bottom-left-radius: 40px 25px;
        transform: rotate(-20deg);
    }
    .uright {
        position: absolute;
        top: 52px;
        left: 50%;
        border-top: none;
        border-left: none;
        border-bottom-right-radius: 40px 25px;
        transform: rotate(20deg);
    }
    /*
    * 下嘴唇
    */
    .lowerLip-wrapper {
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -150px;
        height: 107px;
        width: 300px;
        overflow: hidden;
    }
    .lowerlip {
        width: 300px;
        height: 3500px;
        background-color: #990513;
        border-radius: 400px/3500px;
        border: 5px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    /*
    * 加上小舌头
    */
    .lowerlip::after{
        content: '';
        position: absolute;
        left: 50%;
        bottom: -25px;
        margin-left: -50px;
        width: 100px;
        height: 100px;
        background-color: #FC4A62;
        border-radius: 50%;
    }
    /*
    * 好了,画好了,收工!!!
    */
    `
    writeCode('',code)
}.call()