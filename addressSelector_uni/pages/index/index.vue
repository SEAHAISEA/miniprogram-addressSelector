<template>
	<view class="page">
		<view class="positionCenter width_100">
			<view class="width_100 myFlex view_h88rpx">
				<view class="width_90 myFlexSpace_between color_ff0000 border_bottom_167df5" @tap="selectAddress">
					<text class="fontSize_32">{{ selectAddress_text }}</text>
					<image src="/static/right.png" mode="widthFix" class="right_png"></image>
				</view>
			</view>
		</view>

		<block v-if="showAddress">
			<view class="overlay">
				<view class="marginTop_150">
					<!-- 当前选择 -->
					<view class="width_100 myFlex bgColor_ffffff letterSpacing_5 border_bottom_ebedf0 tab_item">
						<view class="width_90 myFlex color_ff0000">{{ currentSelect }}{{ currentText }}</view>
					</view>
					<!-- 选择器 -->
					<view class="address_box myFlex">
						<!-- 省 -->
						<view>
							<scroll-view class="scroll_view" :scroll-y="true">
								<view v-for="(item, index) in provincesList" :key="index">
									<view :class="'tab_item myFlex ' + (provincesTab === index ? 'select_area' : '')"
										:data-index="index" :data-linkage="item.linkage" :data-id="item.id"
										@tap="selectProvinces">
										{{ item.name }}
									</view>
								</view>
							</scroll-view>
						</view>
						<!--  -->
						<view v-if="cityList">
							<scroll-view class="scroll_view" :scroll-y="true" :scroll-top="city_scroll_top">
								<view v-for="(item, index) in cityList" :key="index">
									<view :class="'tab_item myFlex ' + (cityTab === index ? 'select_area' : '')"
										:data-id="item.id" :data-index="index" @tap="selectCity">
										{{ item.name }}
									</view>
								</view>
							</scroll-view>
						</view>
						<!--  -->
						<view v-if="countyDistrictList">
							<scroll-view class="scroll_view" :scroll-y="true"
								:scroll-top="countyDistrictList_scroll_top">
								<view v-for="(item, index) in countyDistrictList" :key="index">
									<view
										:class="'tab_item myFlex ' + (countyDistrictListTab === index ? 'select_area' : '')"
										:data-index="index" @tap="selectCountyDistrict" :data-id="item.id">
										{{ item.fullname }}
									</view>
								</view>
							</scroll-view>
						</view>
					</view>
					<!-- 按钮 -->
					<view class="width_100 fontSize_32 myFlex bgColor_ffffff letterSpacing_5 border_top_167df5">
						<view class="width_90 myFlexSpace_between">
							<view class="color_aaaaaa btnView myFlex" @tap="selectCancelFun">{{ selectCancel }}</view>
							<view class="color_08c363 btnView myFlex" @tap="selectConfirmFun">{{ selectConfirm }}</view>
						</view>
					</view>
				</view>
				<!-- end -->
			</view>
		</block>
	</view>
</template>

<script>
	const common = require('../common/common.js');
	export default {
		data() {
			return {
				// 地址选择器
				selectAddress_text: '选择地址：',

				showAddress: false,
				currentSelect: '当前选择：',
				currentText: '',

				// 省
				provincesList: common.provinces,
				provincesTab: '',

				// 城市
				cityList: '',
				city_scroll_top: 0,
				cityTab: '',

				// 县区
				countyDistrictList: '',
				countyDistrictList_scroll_top: 0,
				countyDistrictListTab: '',

				linkage: '',
				districtCode: '',
				use_districtCode: '',
				selectConfirm: '确定',
				selectCancel: '取消',
			};
		}, //------------------------------------------------------ 地址选择器end

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {},


		methods: {
			//------------------------------------------------------ 地址选择器start

			selectAddress: function() {
				this.setData({
					showAddress: true
				}, this);
				console.log('selectAddress:', '开始');
			},

			// 选择省份
			selectProvinces: function(e) {
				// linkage 用于判断是否有县区，直辖市为空，其余根据索引选择
				let index = e.currentTarget.dataset.index;
				let linkage = e.currentTarget.dataset.linkage;
				let id = e.currentTarget.dataset.id;
				console.log('选择省份:selectProvinces');
				console.log('选择省份-id:', id);
				console.log('选择省份-index', index);
				console.log('选择省份:', common.provinces[index].fullname);
				console.log('-------------------------------------------------------');
				this.setData({
					provincesTab: index,
					cityList: common.city[index],
					city_scroll_top: 0,
					countyDistrictList_scroll_top: 0,
					linkage: linkage,
					cityTab: '',
					countyDistrictList: '',
					countyDistrictListTab: '',
					currentText: common.provinces[index].fullname
				}, this);
			},

			// 选择城市
			selectCity: function(e) {
				let index = e.currentTarget.dataset.index;
				let id = e.currentTarget.dataset.id;
				let linkage = this.linkage;
				let countyDistrict = '';
				let currentText = '';
				console.log('选择城市:selectCity');
				console.log('选择城市-id:', id);
				console.log('选择城市-index', index);
				console.log('选择城市:', this.cityList[index].name);
				console.log('-------------------------------------------------------');
				currentText = common.provinces[this.provincesTab].name + '-' + this.cityList[index].name;
				if (linkage > 0 || linkage === 0) {
					countyDistrict = common.countyDistrict[linkage][index];
					id = '';
				}
				this.setData({
					cityTab: index,
					countyDistrictList: countyDistrict,
					districtCode: id,
					currentText: currentText,
					countyDistrictListTab: ''
				}, this);
			},

			// 选择县区
			selectCountyDistrict: function(e) {
				let index = e.currentTarget.dataset.index;
				let id = e.currentTarget.dataset.id;
				let currentText = '';
				console.log('选择县区:selectCountyDistrict');
				console.log('选择县区-id:', id);
				console.log('选择县区-index', index);
				console.log('选择县区:', common.countyDistrict[this.linkage][this.cityTab][index].fullname);
				console.log('-------------------------------------------------------');
				currentText =
					common.provinces[this.provincesTab].name + '-' + this.cityList[this.cityTab].name + '-' + common
					.countyDistrict[this.linkage][this.cityTab][index].fullname;
				this.setData({
					countyDistrictListTab: index,
					districtCode: id,
					currentText: currentText
				}, this);
			},

			// 取消选择
			selectCancelFun: function() {
				this.setData({
					showAddress: false
				}, this);
				console.log('selectCancel:', '取消');
			},

			// 确定选择
			selectConfirmFun: function() {
				// districtCode判断是否选择了城市或者县区，值是一个id
				let districtCode = this.districtCode;
				if (districtCode) {
					console.log('确定选择:', 'selectConfirm');
					console.log('selectAddress_text:', this.currentText);
					console.log('districtCode=id:', districtCode);
					this.setData({
						showAddress: false,
						selectAddress_text: this.currentText,
						use_districtCode: districtCode,
						//
						districtCode: '',
						//
						cityList: '',
						countyDistrictList: '',
						// 
						provincesTab: '',
						cityTab: '',
						countyDistrictListTab: ''
					}, this);
				} else {
					common.myShowModal('选择地址！');
				}
			},

			setData: function(obj, that) {
				// let that = this;
				let keys = [];
				let val, data;
				Object.keys(obj).forEach(function(key) {
					keys = key.split(".");
					val = obj[key];
					data = that.$data;
					keys.forEach(function(key2, index) {
						if (index + 1 == keys.length) {
							that.$set(data, key2, val);
						} else {
							if (!data[key2]) {
								that.$set(data, key2, {});
							}
						}
						data = data[key2];
					});
				});
			}
			//------------------------------------------------------ 地址选择器start
		}
	};
</script>
<style>
	.page {
		width: 100%;
		height: 100%;
	}

	.myFlex {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.myFlexSpace_around {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.myFlexSpace_between {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/* 居中 */
	.positionCenter {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.width_90 {
		width: 90%;
	}

	.width_100 {
		width: 100%;
	}

	.view_h88rpx {
		height: 88rpx;
	}

	.right_png {
		width: 27px;
		height: 27px;
	}

	.marginTop_150 {
		margin-top: 150rpx;
	}

	.border_bottom_167df5 {
		border-bottom: 1rpx solid #167df5;
	}

	.border_bottom_ebedf0 {
		border-bottom: 1px solid #ebedf0;
	}

	.border_top_167df5 {
		border-top: 1px solid #167df5;
	}

	.bgColor_ffffff {
		background-color: #ffffff;
	}

	.fontSize_32 {
		font-size: 32rpx;
	}

	/* 字间距 */
	.letterSpacing_5 {
		letter-spacing: 5rpx;
	}

	/* 遮罩层 */
	.overlay {
		background-color: rgba(0, 0, 0, 0.3);
		height: 100%;
		left: 0;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 99;
	}

	/* -------------------- */
	.address_box {
		width: 100%;
		height: 600rpx;
		background-color: #fff;
	}

	.scroll_view {
		width: 250rpx;
		height: 580rpx;
	}

	.tab_item {
		height: 80rpx;
		font-size: 32rpx;
	}

	.select_area {
		color: #167df5;
		font-weight: bold;
	}

	/* 按钮 */
	.btnView {
		height: 100rpx;
		width: 300rpx;
	}

	.color_08c363 {
		color: #08c363;
	}

	.color_aaaaaa {
		color: #aaaaaa;
	}

	.color_ff0000 {
		color: #ff0000;
	}
</style>