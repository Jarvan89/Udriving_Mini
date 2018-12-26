Page({
  data: {
    "date1":{},
    "travellist": [
      {
        "id": 1,
        "from": "北京",
        "to": "乌兰察布",
        "toCity": "内蒙",
        "juli":"1000",
        "money": 100.00,
        "beginDate": "2018.08.08",
        "endDate" : "2018.08.09",
        "initiator": "小亮",
        "viewCount": 199,
        "imgSrc": "/images/img2.jpeg",
        "title": "看流星雨",
        "days":2
      },
      {
        "id": 1,
        "from": "北京",
        "to": "乌兰察布",
        "toCity": "内蒙",
        "juli": "1000",
        "money": 100.00,
        "beginDate": "2018.08.08",
        "endDate": "2018.08.09",
        "initiator": "小亮",
        "viewCount": 199,
        "imgSrc": "/images/img.png",
        "title": "看流星雨",
        "days": 2
      },
      {
        "id": 1,
        "from": "北京",
        "to": "乌兰察布",
        "toCity": "内蒙",
        "juli": "1000",
        "money": 100.00,
        "beginDate": "2018.08.08",
        "endDate": "2018.08.09",
        "initiator": "小亮",
        "viewCount": 199,
        "imgSrc": "/images/img2.jpeg",
        "title": "看流星雨",
        "days": 2
      },
      {
        "id": 1,
        "from": "北京",
        "to": "乌兰察布",
        "toCity": "内蒙",
        "juli": "1000",
        "money": 100.00,
        "beginDate": "2018.08.08",
        "endDate": "2018.08.09",
        "initiator": "小亮",
        "viewCount": 199,
        "imgSrc": "/images/img2.jpeg",
        "title": "看流星雨",
        "days": 2
      },
    ]
  },

  toTravelInfo: function (e) {
    
    var id = e.currentTarget.dataset.id;
    // var app  = getApp();
    // app.requestDetailid = id;
    console.log("-----"+id);
    wx.navigateTo({
      url: '/pages/travelInfo/travelInfo?id='+id
    })
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail),
    aa = e.detail;
    this.setData({
      date: e.detail.value
    })
  }
})