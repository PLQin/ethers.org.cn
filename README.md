<h1 align="center">Welcome to react-next-template 👋</h1>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D%2012.18.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-%3E%3D%206.14.0-blue.svg" />
  <a href="https://github.com/PLQin/react-next-template#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/PLQin/react-next-template/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/PLQin/react-next-template/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/plqin/react-next-template" />
  </a>
</p>

> React+NextJs的模板。拥有基本的页面，例子和恰到好处的配置，fork后就可以立即使用。
> 本仓库地址： https://github.com/PLQin/react-next-template。
> 如果它帮助到你，请给我一颗星星。  
> 你的star是我更新的动力。


## 💋 鸣谢

感谢 [看了就会的Next.js SSR/SSG实战教程](https://juejin.cn/post/7133395475675217933)。


## 😜 功能与配置

- 使用CLI命令动态生成目录  

  如果你的项目是一个比较通用的项目，希望通过CLI命令，根据需要动态生成不同的目录和basePath，那就不能把basePath写死在next.config.js里了。

  这种场景适合于自动化部署，即：根据传递过来的目录名参数，动态生成静态化目录。

  先安装cross-env这个插件，用来統一跨平台的环境变量写法。  
  Window:
  ```
"customBuild": "cross-env BASE_PATH=%npm_config_base% next build && next export -o %npm_config_out%",
  ```

  MacOS:
  ```
"customBuild": "cross-env BASE_PATH=$npm_config_base next build && next export -o $npm_config_out%",
  ```

  Windows系统接收传参的格式是 `npm_config_***%`

  MacOS/Linux系统接收传参的格式是： `$npm_config_***`  

  `npm_config_base` 用来接收命令行里的base参数值。

  `npm_config_out` 用来接收命令行里的out参数值。

  最后执行：`npm run customBuild --base=/diy --out=diy`

  注：必须使用npm执行命令。
  

## 😁 所有命令

```shell
  # 安装
  npm run install

  # 启动开发环境
  npm run dev

  # 生成ssr适配的静态文件
  npm run build

  # 生成ssg适配的静态文件
  npm run ssg

  # 代码校验
  npm run lint
```


## 😥 常见问题

- 执行build或者ssg命令失败

一般多执行几次就可以成功; 或者先执行dev命令，再执行build或者ssg命令。


## 🔑 环境配置

- node >= 12.18.0
- npm >= 6.14.0


## 👤 贡献者

* Website: [@PLQin](https://segmentfault.com/u/_raymond)
* Github: [@PLQin](https://github.com/PLQin)

## 🤝 参与贡献

问题或功能请求都是受欢迎的! 请查看[issue页面](https://github.com/PLQin/react-next-template/issues). 

## 📝 License

Copyright © 2020 [PLQin](https://github.com/PLQin).<br />
This project is [MIT](https://github.com/PLQin/react-next-template/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_