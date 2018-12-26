// pages/enter/enter.js
Page({
  data: {
    'travelId': null,
    'liftList':[
      "请选择能否搭车", "不能搭车","能搭车"
    ],
    'liftCountList':[
      '请选择搭车人数', '1人', '2人', '3人', '4人'
    ],
    //是否正在提交信息
    'isPosting':0,
    'enterInfo':{
      'sex': null,
      'haveCar':null,
      'lift':0,
      'liftCount':0,
      'address':'',
      'phone':''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      travelId: options.id
    });
    console.log(this.data.travelId);
    //判断
    if (!this.data.travelId) {
      //提示信息

      //跳转到列表页
      wx.reLaunch({
        url: '/pages/travelList/travelList'
      });
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //自定义方法
  //选择性别
  choseSex: function (e) {
    setEnterInfoValue(this, 'sex', e.currentTarget.dataset.id);
  },
  //选择有无车
  choseCar: function(e) {
    setEnterInfoValue(this, 'haveCar', e.currentTarget.dataset.id);
  },
  //选择能否搭车
  liftChange: function(e){
    setEnterInfoValue(this, 'lift', e.detail.value);
  },
  //选择搭车人数
  liftCountChange: function(e) {
    setEnterInfoValue(this, 'liftCount', e.detail.value);
  },
  //地址输入框
  inputAddress: function(e) {
    setEnterInfoValue(this, 'address', e.detail.value);
  },
  //手机号输入框
  inputPhone: function(e) {
    //验证手机号

    setEnterInfoValue(this, 'phone', e.detail.value);
  },
  //提交信息获取二维码
  getActiveCode: function(e) {
    //验证必填,处理数据数据
    var postData = checkPostData(this.data.enterInfo);
    if (!postData) {
      showPrompt("请填写必要信息");
      return false;
    }
    //防止重复提交
    this.setData({
      isPosting: 1
    });
    
    //post 提交信息
    wx.request({
      url: '',
    });

  }
})

//检查提交信息 并返回提交的数据
var checkPostData = function (enterInfo) {
  //性别、车
  if (enterInfo.sex == null || enterInfo.haveCar == null) {
    return false;
  } 
  if (enterInfo.address == '' || enterInfo.phone == '') {
    return false;
  }
  var returnData = {
    sex: enterInfo.sex,
    haveCar: enterInfo.haveCar,
    address: enterInfo.address,
    phone: enterInfo.phone
  };
  if (enterInfo.haveCar == 1) {
    //有车
    if (enterInfo.lift == 0) {
      //未填写搭车信息
      return false;
    } else if (enterInfo.lift == 1) {
      //不能搭车
      returnData.liftCount = 0;
    } else {
      //可以搭车
      returnData.liftCount = enterInfo.liftCount;
    }
  }
  return returnData;
}

//将数据set到 EnterInfo 中
function setEnterInfoValue(_this, key, value) {
  var enterInfo = _this.data.enterInfo;
  enterInfo[key] = value;
  _this.setData({
    enterInfo:enterInfo
  });
}

//错误提醒弹框
function showPrompt(content) {
  wx.showModal({
    title: '提示',
    content: content,
    showCancel: false
  });
}




