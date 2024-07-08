# pnpm 命令

```shell
# 在subPackage子包中执行安装包，类似于npm i
pnpm i --filter subPackage

# 把xx依赖安装到subPackage的devDependencies中
pnpm i xx -wD --filter subPackage

# 把xx依赖从subPackage中删除
pnpm rm xx --filter subPackage
```

# nx 命令

```shell
npx nx dev app1

npx nx build app1

npx nx watch --projects=app1 --includeDependentProjects -- nx build \$NX_PROJECT_NAME
```
