### 自定义Hook
#### HOC - Higher order component（高阶组件）
- 高阶组件就是一个函数，接收一个组件作为参数，返回一个新的组件

#### 示例
安装axios
``` shell
npm install axios --save
```
[api地址](http://dog.ceo/api/breeds/image/random)<br/>
src/components/WithLoader.tsx
``` javascript
import React from 'react'
import axios from 'axios'

interface ILoaderState {
  data: any,
  isLoading: boolean
}

interface ILoaderProps {
  data: any
}

const WithLoader = <P extends ILoaderState>(WrappedComponent: React.ComponentType<P>, url: string) => {
  return class LoaderComponent extends React.Component<Partial<ILoaderProps>, ILoaderState> {
    constructor(props: any) {
      super(props)
      this.state = {
        data: null,
        isLoading: false
      }
    }
    componentDidMount() {
      this.setState({
        isLoading: true
      })
      axios.get(url).then(result => {
        this.setState({
          data: result.data,
          isLoading: false
        })
      })
    }
    render() {
      const { data, isLoading } = this.state
      return (
        <>
          {
            (isLoading || !data) ? <p>data is loading</p> :
            <WrappedComponent {...this.props as P} data={data}/>
          }
        </>
      )
    }
  }
} 

export default WithLoader
```
App.tsx
``` javascript
import React, { useState } from 'react';
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import WithLoader from './components/WithLoader'
import './App.css';

interface IShowResoult {
  message: string;
  status: string;
}

const DogShow: React.FC<{data: IShowResoult}> = ({ data }) => {
  return (
    <>
      <h2>Dog show: {data.status}</h2>
      <img src={data.message}/>
    </>
  )
}

function App() {
  const [show, setShow] = useState(true)
  const WrappedDogShow = WithLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={() => { setShow(!show) }}>Toggle Tracker</button>
        </p>
        <WrappedDogShow/>
        <LikeButton/>
        { show && <MouseTracker/> }
      </header>
    </div>
  );
}

export default App;

```

#### HOC的缺点
- 要不断的添加节点
- 难以理解