Page({
  data: {
    "travellist": [{
      "id": 1,
      "from": "北京",
      "to": "乌兰察布",
      "date": "2018.08.08",
      "initiator": "小亮",
      "title": "看流星雨"
    }, {
      "id": 2,
      "from": "北京",
      "to": "乌兰布统",
      "date": "2018.08.08",
      "initiator": "代码狗",
      "title": "草原2日游"
    }]
  },

  testJump: function (e) {
    
    var id = e.currentTarget.dataset.id;
    var app  = getApp();
    app.requestDetailid = id;
    console.log("-----"+id);
    wx.navigateTo({
      url: '/pages/index/index?id='+id
    })
  }
})