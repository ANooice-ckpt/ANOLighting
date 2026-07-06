// 北京市个体非视觉受光史大样本实验：一站式入口配置文件
// 只需要改这里，不需要改 index.html。
// 注意：不要把被试 ID 写进链接。被试 ID 应在问卷或上传表单内由被试填写/选择。

window.EXP_CONFIG = {
  studyTitle: "北京市个体非视觉受光史大样本实验",
  shortTitle: "每日任务入口",

  links: {
    morningSurvey: "https://example.com/morning-survey",
    eveningSurvey: "https://example.com/evening-survey",
    uploadPortal: "https://example.com/upload",
    deviceGuide: "https://example.com/device-guide.pdf"
  },

  contact: {
    name: "主试",
    display: "微信：your_wechat_id / 电话：138-0000-0000",
    href: "tel:13800000000"
  },

  notices: [
    "请按自己的被试编号填写问卷或上传文件。",
    "无需截图反馈，后台会自动记录填写情况；若缺失，主试会单独联系。",
    "若设备异常、无法上传或忘记编号，请直接联系主试。"
  ],

  uploadNaming: {
    light: "P001_20260706_LIGHT.csv",
    gps: "P001_20260706_GPS.gpx"
  }
};
