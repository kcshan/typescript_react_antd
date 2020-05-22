### 1.课程导读
#### 1.为什么要学习TypeScript
1. JavaScript的增强
添加可选择类型标注
提高不断发展JavaScript特性
2. 未来前端开发趋势
3. 技术转型的趋势
4. 提升个人能力和竞争力

#### 2.做什么？
1. 使用TypeScript从零实现一个axios库
2. 为什么实现axios库
知名库
掌握axios原理
代码量适中

#### 3.哪些内容？
1. TypeScript基础知识
2. ts-axios开发实战
3. 项目的测试、构建与发布

#### 4.TypeScript常用语法
1. 基础类型
2. 变量声明
3. 接口
4. 类
5. 函数
6. 泛型
7. 类型推新
8. 高级类型

#### 5.axios JS库 抽丝剥茧
1. 项目脚手架
2. 基础功能实现
3. 异常情况处理
4. 接口扩展
5. 拦截器实现
6. 配置化实现
7. 取消功能实现
8. 更多功能实现

#### 6.前端工具运用
1. Jest
2. Commitizen
3. RollupJS
4. TSLint
5. Prettier
6. Semantic release

#### 7.课程安排
1. 课程导学（1）
2. TypeScript常用语法讲解（2-3）
3. 从零实现一个ts-axios库（4-11）
4. ts-axios库单元测试、构建和发布（12-14）

#### 8.讲授方式
1. 理论+实战
2. axios库抽丝剥茧，循序渐进
3. 需求分析-代码实现-demo演示
4. 电子书作为辅助教材

#### 9.课程收获
1. 学会使用TypeScript开发实际项目
2. 学会造轮子，并学会写单元测试
3. 学会使用先进的前端工具辅助开发
4. 完全掌握axios的实现原理
5. 内功修炼，个人技术能力提升

#### 10.学习前提
1. 有一定原生JavaScript功底
2. 熟悉ES6一些常见的语法和API

#### 11.课程优势
1. TypeScript理论加实战
2. 原生TypeScript造轮子课程，全网稀缺
3. 使用TypeScript编写完整的单元测试
4. 有电子书作为教材，辅助视频学习

### 2.初识TypeScript
#### 1.安装TypeScript
``` shell
npm install -g typescript
```
查看ts版本
``` shell
tsc -V
```
#### 2.编写第一个TypeScript程序
##### 1.学习内容：
1. 类型注解
2. 接口
3. 类

##### 2.新建文件夹examples：
新建greeter.ts
JavaScript是TypeScript的子集
``` typescript
function greeter(person) {
  return 'Hello ' + person
}

let user = 'kcs'
```
编译greeter.ts
``` shell
tsc greeter.ts
node greeter.js
```
1. 类型注解
``` typescript
function greeter(person: string) {
  return 'Hello ' + person
}

let user = 'kcs'
console.log(greeter(user))
```
2. 接口 interface
``` javascript
interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName
}
let user = {
  firstName: 'Kong',
  lastName: 'Cshan'
}
console.log(greeter(user))
```
编译greeter.ts
``` shell
tsc greeter.ts
node greeter.js
```
3. 类 class
``` javascript
iclass User {
  fullName: string
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + ' ' + lastName
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName
}
let user = new User('Kong', 'Cshan')
console.log(greeter(user))
```
编译greeter.ts
``` shell
tsc greeter.ts
node greeter.js
```

### 3.Typescript 类型系统
#### 1.基础类型
TypeScript作为JavaScript的超集，几乎支持所有JavaScript的类型，另外增加了一些新的类型

##### 1.学习内容
1. 布尔值
2. 数字
3. 字符串
4. 数组
5. 元组 Tuple
6. 枚举
7. any
8. void
9. null和undefined
10. never
11. object
12. 类型断言

