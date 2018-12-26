// pages/publish/publish.js
Page({
  data: {
    'publishInfo':{
      'imgList':[

      ],
      'title':'',
      '':''
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  // 上传文件
  chooseImage() {
    const self = this

    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success(res) {
        var imageSrc = 'data:image/png;base64,' + wx.getFileSystemManager().readFileSync(res.tempFilePaths[0], "base64");
        console.log(imageSrc);

        console.log('chooseImage success, temp path is', res.tempFilePaths[0]);
        self.setData({
               imageSrc
               });
      },

      fail({ errMsg }) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  }
})

