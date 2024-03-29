/**
 * 图片路径转成canvas
 * @param {图片url} url
 */
async function imgToCanvas(url) {
  // 创建img元素
  const img = document.createElement("img");
  img.src = url;
  img.setAttribute("crossOrigin", "anonymous"); // 防止跨域引起的 Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.
  await new Promise((resolve) => (img.onload = resolve));
  // 创建canvas DOM元素，并设置其宽高和图片一样
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  // 坐标(0,0) 表示从此处开始绘制，相当于偏移。
  canvas.getContext("2d").drawImage(img, 0, 0);
  return canvas;
}

/**
 * canvas添加水印
 * @param {canvas对象} canvas
 * @param {水印文字} text
 */
function addWatermark(canvas, text) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 20, 20);
  return canvas;
}

/**
 * canvas转成img
 * @param {canvas对象} canvas
 */
function convasToImg(canvas) {
  // 新建Image对象，可以理解为DOM
  var image = new Image();
  // canvas.toDataURL 返回的是一串Base64编码的URL
  // 指定格式 PNG
  image.src = canvas.toDataURL("image/png");
  return image;
}

// 运行示例
(async function run() {
  const imgUrl =
    "https://cdn.jsdelivr.net/gh/zhangpanfei/static@demo/img/test.jpg";
  // 1.图片路径转成canvas
  const tempCanvas = await imgToCanvas(imgUrl);
  // 2.canvas添加水印
  const canvas = addWatermark(tempCanvas, "zpfei.ink");
  // 3.canvas转成img
  const img = convasToImg(canvas);
  // 查看效果
  document.body.appendChild(img);
})()