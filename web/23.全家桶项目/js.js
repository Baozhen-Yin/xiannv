      var YZ = []; //存放计算结果
      var index = 0;

      function fenjie(num) {
          for (var i = 2; i <= num / 2; i++) {
              if (num % i == 0) {
                  YZ[index++] = i; //每得到一个质因数就存进YZ
                  fenjie(num / i);
                  break;
              }
          }
          if (i > num / 2) {
              YZ[index++] = num; //存放最后一次结果
          }
          return YZ
      }

      console.log(fenjie(30));