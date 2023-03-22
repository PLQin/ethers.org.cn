### 参考

看了就会的Next.js SSR/SSG实战教程 - 掘金
https://juejin.cn/post/7133395475675217933

A Next.js site using new SSG support with a Notion backed blog - GitHub
https://github.com/ijjk/notion-blog


### 以SSR模式运行项目
执行以下命令，build项目：
```
yarn build
```

执行后，在项目根目录下会生成一个.next的目录。这个目录就是用于运行SSR的代码，仅能运行在服务端，不能被浏览器直接运行。

然后再执行以下命令，以SSR模式运行项目：
```
yarn start
```

※注： 每次代码更新，在执行yarn start之前，一定要先执行yarn build。否则运行的并不是最新build的项目。

现在打开http://localhost:3000，看到是SSR模式运行的项目。打开调试工具，看到_document.js设置的代码已生效：

yarn start默认是运行在3000端口，如果想运行在4000端口，可以执行以下命令：
```
yarn start -p 4000
```

更多Next.js CLI命令，可参阅官方说明。
```
Next.js CLI官方说明：https://nextjs.org/docs/api-reference/cli
```


### 引用图片
next自带的<Image>可以认为是<img>的升级版，提供了非常方便的尺寸适配、加载等属性。但也会自动增加很多样式，会影响原生的<img>样式。

所以要根据情况选用。如果只是简单引入图片，无需使用<Image>。

非常建议为<Image>包裹一个父容器，并为父容器定义样式。<Image>会自动适配父容器的大小，因此可以不用为<Image>特意设置width和height。

如果直接使用<Image>，其自动生成的<sapn>容器自带很多样式，很容易导致页面样式错乱。此时，在dev和SSR模式下是可以正常运行的，但在SSG静态化 （export，下一章节介绍）的过程中会报错。

由于<Image>自带的各种优化功能AP1是用于SSR的，是根据客户端的情況（设备类型、屏幕尺寸等）进行图片的动态优化处理，因此无法在SSG中使用（后续章节会讲到SSG)。

解决办法如下，修改next.config.js:
```
  const nextConfig = {
+      images: {
+        unoptimized: true,
+      }
  }
```

next export中关于Image的官方说明：
https://nextjs.org/docs/messages/export-image-api

关闭图片自动优化的官方说明：
https://nextjs.org/docs/api-reference/next/image#unoptimized


### react next 在dev模式下中如何接口请求
在dev模式下，next会自动启动一个本地的服务，端口号默认是3000。
可以在next.config.js中配置proxy。

修改next.config.js:
```
  const nextConfig = {
+      async rewrites() {
+        return [
+          {
+            source: '/api/:path*',
+            destination: 'http://localhost:8080/api/:path*',
+          },
+        ]
+      },
  }
```

修改后，重启项目，就可以在dev模式下请求接口了。

※注： 8080是后端服务的端口号，根据实际情况修改。


### getStaticProps函数在dev模式下并不是默认执行的

突然自己就好了;


### next build && next export 后，打开项目，再次刷新非index页面后，提示异常 Cannot GET
dev和ssr模式下, 不会出现这个问题;
ssg模式下, 生成的都是html页面, 例如demo.html; 

所以访问 http://localhost:3000/demo 时无法准确定位到demo.html所以会提示异常 Cannot GET

手动更改为 http://localhost:3000/demo.html 访问, 可以正常访问;

方法一:   
可以通过设置trailingSlash: true解决   
https://nextjs.org/docs/api-reference/next.config.js/exportPathMap#adding-a-trailing-slash

但这样会导致url从 http://localhost:3000/demo 变为 http://localhost:3000/demo/


方法二:  
通过设置nginx.conf配置路由映射, 例如:  
```
location /demo {
  rewrite ^/demo/(.*)$ /demo.html last;
}
```


### next build && next export 后, out目录下存在index.html的同时还存在index/index.html
解决办法:
去除 pages/index/index.tsx, 保留 index.js 即可;
同时为避免歧义, 将 pages/index/index.module.scss 变更名为 pages/home/index.module.scss



### next build && next export 动态路由时, 提示异常 Error: Export encountered errors on following paths

eg: 
```
> Build error occurred
Error: Export encountered errors on following paths:
        /profile/[id]: /profile/1
        /profile/[id]: /profile/2
        /profile/[id]: /profile/3
```

解决办法:
先执行 next dev, 保持服务器运行状态, 再执行 next build && next export;

原因:
这是因为在dev模式下, 会自动启动一个本地的服务, 端口号默认是3000;
而动态路由, 会根据dev模式下的接口数据生成多个页面, 例如: /profile/1, /profile/2, /profile/3;
不启动dev模式, 会导致动态路由无法生成多个页面, 从而导致异常;


### SSG模式下, 404页面无法访问
在dev和SSR模式下，如果访问一个不存在的地址，是可以自动显示404页面的。

但在SSG模式下，404页 面被静态化成了 404.html，访问一个不存在的地址并不会自动跳转至404.html。需要结合Apache或 者Nginx的配置来实现。


### next dev 下, http请求会执行2次
