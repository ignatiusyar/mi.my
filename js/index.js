  ;(function(){
      // new Date();
      // (1) 传时间戳    new Date(1541649237148);
      // (2) new Date( 日期字符串 );
      //     new Date( "2018-11-08 11:54")  有兼容性问题, 只要日期格式中出现了 - , ios平台都不支持
      //     new Date( "2018/11/08 11:54")
      //     (必然会遇到的兼容性问题)

      // 找对象
      var timeBox = document.querySelectorAll(".clock div");

      // 进入页面调用
      setTime();
      var timer = setInterval(setTime,1000);

      // 根据秒杀时间,设置span
      function setTime (){
          // 秒杀时间
          var seckillTime = new Date("2019/01/18 22:00");
          // 当前时间
          var now = new Date();
          // 需要倒计时的时间的秒数
          var time = parseInt((seckillTime - now ) / 1000);

          if(time < 0) {
              // 设定时间已到
              clearInterval(timer); // 清楚定时器
              time = 0; // 设定时间为0,
            //   alert('小哥哥,赶紧来抢呀!');
          }

          // 转换成时分秒
          var hours = parseInt ( time / 3600 ); // 小时
          var minites = parseInt ( time / 60 ) % 60; //求得所有的分钟数, 再对60取余数, 超过60的部分进位了, 不管
          var seconds = time % 60; // 让秒数对60取余数,超过60的部分进位了,不管

            //   console.log(hours + ":" + minites + ":" + seconds);
            // 设置时分秒 给 span
            timeBox[0].innerHTML = addZero(hours);
            timeBox[1].innerHTML = addZero(minites);
            timeBox[2].innerHTML = addZero(seconds);

        // 封装一个小方法,专门用于给小于10的数字,前面加0;
        function addZero ( n ) {
            return n < 10 ? "0" + n : n ;
        }
      }
    })();

    ;(function(){
        var search = document.querySelector(".search")
        var input = document.querySelector(".search input");
        var ads = document.querySelector(".search > a");

        // console.log(ads)
        input.addEventListener("focusin",function(){
            // console.log('xixi');
            search.removeChild(ads);
        })
        input.addEventListener("focusout",function() {
            search.appendChild(ads);
        })
    })()