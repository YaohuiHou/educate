const Link = 'https://daole.qyer.com'
class globalFun{
    async ajax (url , type, data) {
      return new Promise(function(resolve, reject) {
        uni.request({
            url: Link+url, //仅为示例，并非真实接口地址。
            data: data,
            method: type,
            header: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json; charset=UTF-8',
                  auth: 'qyer2020'
            },
            success: (res) => {
                resolve(res);
            },
            fail:(err)=>{
              reject(err);
            }
        });
      })
    }
}

export default new globalFun()