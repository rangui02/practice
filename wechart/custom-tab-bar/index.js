// custom/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
        pagePat: "/pages/index/index",
        iconPath: "/image/crama_bar.png",
        selectedIconPath: "/image/crama.png",
        text: "首页"
      },
      {
        pagePath: "/pages/find/find",
        iconPath: "/image/menu_bar.png",
        selectedIconPath: "/image/menu.png",
        text: "发现"
      },
      {
        pagePath: "/pages/conte/conte",
        iconPath: "/image/menu_bar.png",
        selectedIconPath: "/image/menu.png",
        text: "通讯录"
      },
      {
        pagePath: "/pages/mine/mine",
        iconPath: "/image/menu_bar.png",
        selectedIconPath: "/image/menu.png",
        text: "我的"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      let url = this.data.list[data.index].pagePath
      if (data.index === 0) {
        url = "/pages/index/index"
      }
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})