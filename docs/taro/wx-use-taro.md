## 原生微信小程序项目使用 Taro



### 背景

- 需求背景

在目前原生微信小程序项目进行升级改版，并且旧版和新版在完全没有升级完之前，一直要保存新旧功能共存

### 框架选择

| 框架    | 优缺点                                                       |
| :------ | ------------------------------------------------------------ |
| Taro    | 优点:跨端统一开发、使用React语法、插件生态丰富<br/>缺点:引入额外概念,学习成本较高,依赖React生态 |
| wepy    | 优点:使用类Vue.js语法,支持组件化和npm依赖<br/>缺点:功能受限,开发者社区较小 |
| uni-app | 优点:跨端开发,使用Vue.js语法,生态较为完整<br/>缺点:多端支持略有不足,性能可能不如原生 |

经过团队讨论推荐使用Taro框架,它拥有较为出色的多端适配能力和丰富的插件支持,是目前较为优秀的微信小程序跨端解决方案

### Taro与微信原生小程序共存

- 方案选择

| 方案                                                         | 优缺点                                                       |
| :----------------------------------------------------------- | ------------------------------------------------------------ |
| Taro 可以把原生微信小程序应用转换为 Taro 项目，从而使项目成为多端应用 | 优点：一次转换，一劳永逸，避免后续操作<br />缺点：转换后有些特性不支持，需要全局测试，耗费人力 |
| Taro 与原生微信小程序应用共存                                | 优点：新老页面完全独立<br />缺点：每次更新新功能，需要对路径资源进行处理 |

综合对比，共存方案相对稳定，资源的路径可以通过脚本或者公共函数进行处理



### 具体实现

- 项目结构分析

```js
├── pages                       原生小程序主包页面文件
├── pages_compass               原生小程序分包页面文件
├── app.wxss                    app 样式
├── app.js                      原生小程序入口 js
├── node-tools.js               打包后，脚本处理资源的路径，减少手工改动，避免出现遗漏
├── taro                        taro 新项目文件
|   ├── dist                    打包后的原生小程序产物
|       ├── pages               打包后的主包页面文件
|       └── app.js              入口文件
|       └── app-origin.wxss     app 样式
|       └── common.wxss         common 样式

```



- Taro 打包 dist 与 原生小程序融合

1. 原生入口 app.js 引入 Taro dist 文件下的 app.js，只需改动一次

   ```js
   require('taro/dist/app.js')
   // 原有 App 不需要任何改动
   App({})
   ```

   

2. 原生入口 app.wxss 引入 Taro dist 文件下的 app-origin.wxss 和 common.wxss， 只需改动一次

```css
@import "learn-taro/dist/app-origin.wxss";
@import "learn-taro/dist/common.wxss";

```



3. 更改 dist 下的资源路径，包括页面跳转和图片资源，每次打包需要自动更新或者手动微调

```js
// node-tools.js 
/**
 * /pages/report/daily-report-list/daily-report-list
 * /pages/compass/index
 * /pages/more/index'
 * learn-taro/dist 以上老页面手动还原 
 * oldPages 替换 pages 先执行脚本后执行全局（./learn-taro/dist）替换
 */
const fs = require('fs');
const path = require('path');

// // // 要替换的源字符串和目标字符串
const sourceString = "pages/";
const targetString = "learn-taro/dist/pages/";
// const sourceString = "assets/";
// const targetString = "learn-taro/dist/assets/";


// 要替换的文件路径
const directoryPath = 'learn-taro/dist/';
// 递归遍历文件夹
function traverseDirectory(dirPath) {
    fs.readdirSync(dirPath).forEach(file => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        traverseDirectory(filePath);
      } else {
        replaceContentInFile(filePath);
      }
    });
  }
  
  // 替换文件内容
  function replaceContentInFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`读取文件 ${filePath} 时出错:`, err);
        return;
      }
      const newContent = data.replace(new RegExp(sourceString, 'g'), targetString);
      
      if (newContent !== data) {
        fs.writeFile(filePath, newContent, 'utf8', (err) => {
          if (err) {
            console.error(`写入文件 ${filePath} 时出错:`, err);
          } else {
            console.log(`已将 ${filePath} 中的所有 "${sourceString}" 替换为 "${targetString}"`);
          }
        });
      }
    });
  }
  
  // 开始遍历 dist 文件夹
  traverseDirectory(directoryPath);

```

4. ⚠️注意包预览和上传，进行依赖分析，根据情况来减少包体积

   ![](/img/wx-lib-view.png)

### 参考链接

[Taro][link]

[link]: https://docs.taro.zone/docs/taro-in-miniapp

