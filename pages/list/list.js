// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrList: []
  },

  //微信官方提供的事件处理函数，当页面上拉触底时候自动调用该函数
  onReachBottom() {
    console.log('到达页面底部运行此函数');
    this.updateArrList();
  },

  updateArrList() {
    let arr = this.data.arrList
    arr.push(...this.createData())
    this.setData({
      arrList: arr
    })
  },
  
  createData() {
    let length = this.data.arrList.length
    if (length >= 30) return [];
    return Array.from({ length: 3 }, (v, i) => `数据${1 + i + length}`)
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})