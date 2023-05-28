const common = require('../common/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 地址选择器
    selectAddress_text: "选择地址：",
    showAddress: false,
    currentSelect: '当前选择：',
    currentText: "",

    // 省
    provincesList: common.provinces,
    provincesTab: '',
    // 城市
    cityList: "",
    city_scroll_top: 0,
    cityTab: '',
    // 县区
    countyDistrictList: "",
    countyDistrictList_scroll_top: 0,
    countyDistrictListTab: '',

    linkage: '',
    districtCode: '',
    use_districtCode: '',
    selectConfirm: '确定',
    selectCancel: '取消',
    // 地址选择器end
  },



  //------------------------------------------------------ 地址选择器start

  selectAddress: function () {
    this.setData({
      showAddress: true,
    })
    console.log("selectAddress:", "开始")
  },

  // 选择省份
  selectProvinces: function (e) {
    // linkage 用于判断是否有县区，直辖市为空，其余根据索引选择
    let index = e.currentTarget.dataset.index;
    let linkage = e.currentTarget.dataset.linkage;
    let id = e.currentTarget.dataset.id;
    console.log("选择省份:selectProvinces")
    console.log("选择省份-id:", id)
    console.log("选择省份-index", index)
    console.log("选择省份:", common.provinces[index].fullname)
    console.log("-------------------------------------------------------")
    this.setData({
      provincesTab: index,
      cityList: common.city[index],
      city_scroll_top: 0,
      countyDistrictList_scroll_top: 0,
      linkage: linkage,
      cityTab: '',
      countyDistrictList: '',
      countyDistrictListTab: '',
      currentText: common.provinces[index].fullname,
    })
  },

  // 选择城市
  selectCity: function (e) {
    let index = e.currentTarget.dataset.index;
    let id = e.currentTarget.dataset.id;
    let linkage = this.data.linkage;
    let countyDistrict = '';
    let currentText = '';

    console.log("选择城市:selectCity")
    console.log("选择城市-id:", id)
    console.log("选择城市-index", index)
    console.log("选择城市:", this.data.cityList[index].name)
    console.log("-------------------------------------------------------")


    currentText = (common.provinces[this.data.provincesTab].name + "-" + this.data.cityList[index].name);
    if (linkage > 0 || linkage === 0) {
      countyDistrict = common.countyDistrict[linkage][index];
      id = '';
    };
    this.setData({
      cityTab: index,
      countyDistrictList: countyDistrict,
      districtCode: id,
      currentText: currentText,
      countyDistrictListTab: '',
    })
  },

  // 选择县区
  selectCountyDistrict: function (e) {
    let index = e.currentTarget.dataset.index;
    let id = e.currentTarget.dataset.id;
    let currentText = '';

    console.log("选择县区:selectCountyDistrict")
    console.log("选择县区-id:", id)
    console.log("选择县区-index", index)
    console.log("选择县区:", common.countyDistrict[this.data.linkage][this.data.cityTab][index].fullname)
    console.log("-------------------------------------------------------")


    currentText = (common.provinces[this.data.provincesTab].name + "-" + this.data.cityList[this.data.cityTab].name + "-" + common.countyDistrict[this.data.linkage][this.data.cityTab][index].fullname);

    this.setData({
      countyDistrictListTab: index,
      districtCode: id,
      currentText: currentText,
    })
  },

  // 取消选择
  selectCancel: function () {
    this.setData({
      showAddress: false,
    })
    console.log("selectCancel:", "取消")
  },
  // 确定选择
  selectConfirm: function () {
    // districtCode判断是否选择了城市或者县区，值是一个id
    let districtCode = this.data.districtCode;
    if (districtCode) {
      console.log("确定选择:", "selectConfirm")
      console.log("selectAddress_text:", this.data.currentText)
      console.log("districtCode=id:", districtCode)
      this.setData({
        showAddress: false,
        selectAddress_text: this.data.currentText,
        use_districtCode: districtCode, //
        districtCode: "", //

        cityList: '',
        countyDistrictList: '',
        provincesTab: '',
        cityTab: '',
        countyDistrictListTab: '',
      })
    } else {
      common.myShowModal("选择地址！")
    }
  },
  //------------------------------------------------------ 地址选择器end

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

  }
})