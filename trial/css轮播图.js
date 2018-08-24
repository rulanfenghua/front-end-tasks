// 加载完毕事件 在该事件中 写的js代码 去获取dom元素 就一定不会出现找不到的问题
window.onload = function() {
    // 顶部的通栏 滚动的效果
    headerScroll();

    // 倒计时的效果
    cutDownTime();

    // 轮播图的效果
    banner();
}

// 通栏方法
/*
	获取 导航栏的 高度

	在onscroll 事件中 去修改颜色
		0-1的透明度
		获取到 滚动的距离
		滚动的距离 /导航栏  0-1的浮点数
		滚动的距离 大于导航栏 >1  如果透明度 >1 变为1

		通过js  修改 顶部通栏的 透明度即可
			为了保证 子元素 能够正常显示 rgba()  hsla();

*/
function headerScroll() {

    //1. 获取一些 必须要知道的 参数
    /*
    	导航栏的高度
    	顶部的通栏 (为了在 onscroll 事件中 使用 避免 一只获取 造成的 性能浪费(很小))
    */
    // 距离 顶部的 高度
    // console.log('offsetTop:'+document.querySelector('.jd_nav').offsetTop);
    // 元素自身的 高度
    // console.log('offsetHeight:'+document.querySelector('.jd_nav').offsetHeight);

    // 获取 导航栏
    var navDom = document.querySelector('.jd_nav');

    //  希望获取的是 从顶部 到 导航栏 底部的 距离
    var maxDistance = navDom.offsetTop + navDom.offsetHeight;

    // 获取 顶部的通栏
    var headerDom = document.querySelector('.jd_header');

    // 0 为了保证默认是透明度 可以再这里 直接设置 rgba的a 为0
    // 使用js 修改的样式 会变为 行内式
    headerDom.style.backgroundColor = 'rgba(201,21,35,0)';


    // 2.注册 onscroll 事件 注册给谁
    /*
    	
    */
    window.onscroll = function() {
        // console.log('123');
        //  获取 滚动的距离 body 是通过 document 点出来的
        var scrollDistance = window.document.body.scrollTop;
        // console.log(scrollDistance);

        // 计算一个 0-1的百分数
        var percent = scrollDistance / maxDistance;
        console.log(percent);

        // 如果 超过了1 没有意义了 所以 还原为1
        if (percent > 1) {
            percent = 1;
        }

        // 到这 获取到的 一定是 0-1
        // 设置 顶部通栏的透明度
        headerDom.style.backgroundColor = 'rgba(201,21,35,' + percent + ')';

    }


}


// 倒计时方法
/*
	定义一个 倒计时的 总时间
	获取 想要修改的 li标签

	开启定时器
		判断 是否时间没有了
		递减时间
		修改 对应标签的显示
*/
function cutDownTime() {
    // 定义 总时间 写时间时 建议 这样写
    var totalHour = 3;

    // 转化为秒
    var totalSec = 3 * 60 * 60;

    // 加多一秒 让用户看到的时候 是从整数 开始
    // totalSec++;
    // var totalSec = 5;

    // 获取 想要修改的所有li标签
    // querySelectorAll  querySelector 这两个方法 可以传入 css,css3 中的选择器
    // 如果想要自己封装一个 类似于jq的东西 可以再内部 调用 这两个方法
    var liArr = document.querySelectorAll('.main_content:nth-child(1) .content_top li');
    // console.log(liArr);

    // 开启 定时器
    // 有了 定时器id 以后 就能够 干掉该id 对应的 定时器
    var timeId = setInterval(function() {

        // 0 判断 是否 小于0了
        if (totalSec <= 0) {
            // 干掉 定时器
            clearInterval(timeId);

            console.log('结束啦,你买不到了哦');

            return;
        }

        // 1递减
        totalSec--;

        // 当前的秒 对应到 多少小时 多少分 多少秒
        /*
        	3671
        	1小时
        	1分
        	11秒
        	/ 除法
        	% 取余 
        */
        var hour = Math.floor(totalSec / 3600);
        var minute = Math.floor(totalSec % 3600 / 60);
        var sec = totalSec % 60;


        // 2修改dom元素显示

        // 小时
        liArr[0].innerHTML = Math.floor(hour / 10); // 十位 41 / 10  =4.1 所以要取整数
        liArr[1].innerHTML = hour % 10; // 个位

        // 分
        liArr[3].innerHTML = Math.floor(minute / 10); // 是为 55/10 = 5.5 取整
        liArr[4].innerHTML = minute % 10;

        // 秒
        liArr[6].innerHTML = Math.floor(sec / 10);
        liArr[7].innerHTML = sec % 10;



    }, 1000)
}


// 轮播图方法
/*
	获取 必须知道的 变量

	步骤1: 不考虑过渡效果 直接 刷刷刷的 切换
		定时器中 index++
			    判断是否越界
			   修改 轮播图ul的 位置
			   考虑到 索引从1开始
			   css 默认 让ul 往左边窜一个屏幕宽度

	步骤2:	  下方的 索引li标签 修改 外观
		由于我们是使用.current 标示当前的索引值
		清空所有li的 class
		为当前的那个 li 添加current

	步骤3:然切换有动画效果
		使用css3中的transition
		.style.transition ='all .3s';
		在获取的时候 进行添加即可

	步骤4:当我切换到 最后一张时 瞬间 切到 第一张
		关闭过度
		瞬间切换到第一张

	步骤5:对代码 进行重构 添加进来了 过渡结束知识点
		由于 我们在修改 ul的位置时 会使用过度
		当注册了 过渡结束事件之后,每次 过渡完毕 都会 调用该事件
			将 判断 index  是否 越界 以及 修改 索引的 代码 全部 迁移到 过渡结束事件中

			定时器逻辑
				index++;

				修改 ul的 位置 ->开始过渡

			过渡结束事件逻辑
				判断 index是否有效
					进行修正
				修改索引li标签的 显示

	步骤6: 使用touch事件,实现 手指 拨动 ul滑动 效果
		touchstart
			记录开始值
			关闭定时器
			关闭过渡效果
		touchmove
			计算移动值
			修改ul的位置(在原始值的基础上进行修改,没有过渡效果的)
		touchend
			记录移动的距离(?)
			开启定时器(*)




*/
function banner() {

    //1 获取变量
    // 屏幕的宽度
    var width = document.body.offsetWidth;
    // console.log(width);\

    //  获取 轮播图的ul
    var moveUl = document.querySelector('.banner_images');

    // 添加过度效果 由于后面已经设置了 所以 这里 已经没有意义了
    // moveUl.style.transition = 'all .3s';

    // 索引的li标签
    var indexLiArr = document.querySelectorAll('.banner_index li');

    // 定义 index 记录 当前的 索引值
    // 默认 我们的ul 已经 往左边 移动了 一倍的宽度
    // (为什么 一位 最左边的图片 是用来做无限轮播的 不希望用户看到) 所以 index =1
    var index = 1;
    var tagIndex = 0;

    // 抽取的代码 提升代码的可读性,以及 降低维护的难度
    var startTransition = function() {
        moveUl.style.transition = 'all .3s';
    }

    var endTransition = function() {
        moveUl.style.transition = '';
    }

    // 由于 移动的距离 无法确定 所以提取为参数
    var setTransform = function(distance) {
        moveUl.style.transform = 'translateX(' + distance + 'px)';
    }


    // 开启定时器
    var timeId = setInterval(function() {
        // 累加
        index++;
        tagIndex=index-1;//单独定义一个控制标签页‘current’类显示的tagIndex变量

        // 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
        // moveUl.style.transition = 'all .3s';
        startTransition();

        // 修改 ul的位置
        // moveUl.style.transform = 'translateX('+index*width*-1+'px)';
        setTransform(index * width * -1);

        for (var i = 0; i < indexLiArr.length; i++) {
            indexLiArr[i].className = '';
        }

        // 有一个 1的 差值
        if (index > 8) {
            tagIndex = 0;

        } else if (index < 1) {
            tagIndex = 7;

        }
        indexLiArr[tagIndex].className = 'current';

    }, 2000);




    // 过渡 结束事件 用来 修正 index的值 并修改索引
    moveUl.addEventListener('webkitTransitionEnd', function() {
        console.log('过渡结束');

        //  如果 index 太大了 
        if (index > 8) {
            index = 1;

            // 关闭过渡
            // moveUl.style.transition = '';
            endTransition();

            // 瞬间 修改一下 ul 的位置
            // moveUl.style.transform = 'translateX('+index*width*-1+'px)';
            setTransform(index * width * -1);
        } else if (index < 1) {
            // 跳到倒数第二张
            index = 8;

            // 关闭过渡
            // moveUl.style.transition = '';
            endTransition();

            // 瞬间 修改一下 ul 的位置
            // moveUl.style.transform = 'translateX('+index*width*-1+'px)';
            setTransform(index * width * -1);
        }

        // 修改 索引li标签的 class
        // for (var i = 0; i < indexLiArr.length; i++) {
        // 	indexLiArr[i].className = '';
        // }

        // // 有一个 1的 差值
        // indexLiArr[index-1].className = 'current';

    })


    // 注册 三个 touch事件

    // 定义变量 记录 开始的X
    var startX = 0;

    // 记录移动的值
    var moveX = 0;

    // 记录 distanceX
    var distanceX = 0;


    // 触摸开始
    moveUl.addEventListener('touchstart', function(event) {
        // 关闭定时器
        clearInterval(timeId);

        // 关闭过渡效果
        // moveUl.style.transition = '';
        endTransition();

        // 记录开始值
        startX = event.touches[0].clientX;

    })

    // 触摸中
    moveUl.addEventListener('touchmove', function(event) {
        // 计算移动的值
        moveX = event.touches[0].clientX - startX;

        // 移动ul
        // 默认的移动值是 index*-1*width 
        // moveUl.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
        setTransform(moveX + index * -1 * width);
    })

    // 触摸结束
    /*
    	手指松开的时候 判断 移动的距离 进行 是否吸附
    		由于 不需要考虑 正负 只需要考虑 距离 Math.abs()
    			吸附回的值是 index*-1*width
    		如果移动的距离较大
    			需要判断正负
    				index++;
    				index--;
    				 index*-1*width
    */
    moveUl.addEventListener('touchend', function(event) {

        // 定义 最大的 偏移值
        var maxDistance = width / 3;

        // 判断 是否超过
        if (Math.abs(moveX) > maxDistance) {
            // 判断 到底是 往左 还是往右移动
            if (moveX > 0) {
                index--;
                tagIndex=index-1;
            } else {
                index++;
                tagIndex=index-1;
            }
            // 为了好看 将 过渡效果开启
            // moveUl.style.transition = 'all .3s';
            for (var i = 0; i < indexLiArr.length; i++) {
                indexLiArr[i].className = '';
            }

            // 有一个 1的 差值
            if (index > 8) {
                tagIndex = 0;

            } else if (index < 1) {
                tagIndex = 7;

            }
            indexLiArr[tagIndex].className = 'current';


            startTransition();



            // 吸附 一整页
            // moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
            setTransform(index * -1 * width);

        } else {
            // 如果 进到这里了 说明 没有超过 我们定义的 最大偏移值 吸附回去即可

            // 为了好看 将 过渡效果开启
            // moveUl.style.transition = 'all .3s';
            startTransition();

            // 吸附回去
            // moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
            setTransform(index * -1 * width);
        }

        // 记录结束值

        // 开启定时器
        timeId = setInterval(function() {
            // 累加
            index++;
            tagIndex=index-1;

            // 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
            // moveUl.style.transition = 'all .3s';
            startTransition();

            // 修改 ul的位置
            // moveUl.style.transform = 'translateX('+index*width*-1+'px)';
            setTransform(index * width * -1);

            for (var i = 0; i < indexLiArr.length; i++) {
                indexLiArr[i].className = '';
            }

            // 有一个 1的 差值
            if (index > 8) {
                tagIndex = 0;

            } else if (index < 1) {
                tagIndex = 7;

            }
            indexLiArr[tagIndex].className = 'current';
        }, 2000)
    })



}