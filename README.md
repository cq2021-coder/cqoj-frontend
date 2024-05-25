# cqoj-frontend

## 选择接口
这里扩展单体服务和微服务的接口功能都提供了，可以在 [OpenAPI.ts](generated%2Fcore%2FOpenAPI.ts) 中配置

## 自动生成api代码
```shell
openapi --input http://localhost:3039/api/v2/api-docs --output ./generated --client axios
```

## 项目相关命令
### 安装依赖
```
npm install
```

### 运行服务
```
npm run serve
```

### 构建项目
```
npm run build
```
