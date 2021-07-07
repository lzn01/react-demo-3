import React from 'react'

class App extends React.Component {
//  1.初始化
    constructor(props) {
        super(props)
        // 2.设置变量
        this.state = {
            n: 1
        }
    }
    // 3. 让n+1又-1,UI不会变化，但是每次点击按钮都render了一次
    onClick = () =>{
        this.setState(state => ({
            n: state.n + 1
        }))
        this.setState(state => ({
            n: state.n - 1
        }))
        // {n:1} 和 {n:1} 是不同的对象，但值一样
    }
    // 比较新旧n是否改变
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.n !== this.state.n;
        // 返回true不阻止UI更新
        // 返回false阻止UI更新
    }

    render() {
        console.log('render 了一次')
        return(
            <div>App
                <div>
                    {this.state.n}
                    <button onClick={
                        this.onClick
                    }>+1</button>
                </div>
            </div>
        )
    }
}

export default App;
