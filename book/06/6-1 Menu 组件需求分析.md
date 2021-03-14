### Menu组件需求分析
#### 需求分析
- Menu最基本的样式-横向
  - ![menu1.png](https://i.loli.net/2021/03/14/ZECx6cq7JKTFwun.png)
- Menu最基本的样式-纵向
  - ![menu2.png](https://i.loli.net/2021/03/14/jmZRq3Iuyi1oX9B.png)
- 大致分析组件的属性和方法长啥样
  - ![carbon (1).png](https://i.loli.net/2021/03/14/2TxB9wImZoj74sU.png)
``` javascript
// 一个不那么完美的解决方案
const items = [
  { disabled: false, element: (<a>title</a>) },
  { disabled: true, element: 'cool link' }
]

<Menu defaultIndex={0} items={items} onSelect={} model='vertical'></Menu>

// 更加语义化，更加像html的解决方案
<Menu defaultIndex={0} onSelect={} model='vertical'>
	<Menu.Item>
  		title one
  	</Menu.Item>  
	<Menu.Item disabled>
  		disabled link
  	</Menu.Item> 
    <Menu.Item>
  		<a href="http://www.google.com">Google!</a>
  	</Menu.Item> 
</Menu>

// 属性分析
interface MenuProps {
	activeIndex: number;
    mode: string;
  	onSelect: (selectedIndex: numner) => void;
    className: string;
}

interface MenuItemProps {
	index: number;
  	disabled: boolean;
  	className: string;
} 
```