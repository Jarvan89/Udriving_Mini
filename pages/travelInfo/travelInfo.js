// pages/travelInfo/travelInfo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "info":{
      'id':1,
      'imgUrls':[
        '/images/img2.jpeg',
        '/images/img2.jpeg'
      ],
      'title':'8.11-8.12哈法地址火上流星雨',
      'detail':'哈达火山群主要的火山有8个，分别由东北向西南一字排列，总距离大概有十几公里。其中比较大的是3号火山到8号火山，除了编号，还有当地人给起的名字：别由东北向西南一字排列，总距离大概有十几公里。其中比较大的是3号火山到',
      'days':4,
      'gather':'北京朝阳望京地铁sdfsssssssss站',
      'destination':'北京朝阳望京',
      'attention':[
        '的火山有8个，分别由东北向西南一字排列，总距离大概有十几公里。其中比较大的是3号火山到8号火山，除了编号，还有当地人给起的名字：别由东北',
        '的火山有8个，分别由东北向西东北',
        '的火山有名字：别由东北'
      ]
    },
    //自驾协议
    "agreement":[
      '所有自驾游活动的参与者应发扬团结互助、助人为乐的精神，在力所能及的范围内尽量给予他人便利与帮助。但任何便利与帮助的给予并不构成法律上的义务，更不构成分担其他参与者损失或责任的法律依据。',
      '所有自驾游活动的参与者应发扬团结互助、助人为乐的精神，在力所能及的范围内尽量给予他人便利与帮助。但任何便利与帮助的给予并不构成法律上的义务，更不构成分担其他参与者损失或责任的法律依据。',
      '所有自驾游活动的参与者应发扬团结互助、助人为乐的精神，在力所能及的范围内尽量给予他人便利与帮助。但任何便利与帮助的给予并不构成法律上的义务，更不构成分担其他参与者损失或责任的法律依据。',
      '所有自驾游活动的参与者应发扬团结互助、助人为乐的精神，在力所能及的范围内尽量给予他人便利与帮助。但任何便利与帮助的给予并不构成法律上的义务，更不构成分担其他参与者损失或责任的法律依据。',
      '所有自驾游活动的参与者应发扬团结互助、助人为乐的精神，在力所能及的范围内尽量给予他人便利与帮助。但任何便利与帮助的给予并不构成法律上的义务，更不构成分担其他参与者损失或责任的法律依据。',
      '所有自驾游活动的参与者应发扬团结互助、助人为乐的精神，在力所能及的范围内尽量给予他人便利与帮助。但任何便利与帮助的给予并不构成法律上的义务，更不构成分担其他参与者损失或责任的法律依据。',
    ],
    //自驾协议显示状态
    'showAgreement':0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.navigateTo({
      url: '/pages/enter/enter?id=' + this.data.info.id
    });
    /*
    wx.showLoading({
      title: `loading...`,
    });
    console.log(options);
    //根据id，请求数据
    var id = options.id;
    //请求详细信息
    wx.request({
      url: 'test.php', 
      data: {
        x: ''
      },
      header: {
        'content-type': 'application/json'
      },
      complete(){
        wx.hideLoading();
      },
      success(res) {
        //判断数据

        //将数据放入data中
      }
    })
    wx.hideLoading();
    */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 以下为 自定义方法
   */
  //我要报名
  wantSignUp: function (){
    this.setData({
      showAgreement: 1
    });  
  },
  //联系TA
  contactTa: function () {

  },
  //控制弹框的显示
  agreeStatus:function(e){
    var status = e.currentTarget.dataset.status;
    //同意 跳转
    if (status == 1) {
      console.log("调转报名页");
      wx.navigateTo({
        url: '/pages/enter/enter?id=' + this.data.info.id
      });
    }
    //关闭弹框
    this.setData({
      showAgreement: 0
    });
  },
})

function showPrompt(content) {
  wx.showModal({
    title: '提示',
    content: content,
    showCancel: false
  });
}