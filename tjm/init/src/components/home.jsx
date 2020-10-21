import React from 'react';
import { Link } from "react-router-dom"
class Home extends React.Component {
    render() {
        return (
            <div >
                <Link to="/">首页</Link>
                <Link to="/edior">添加事件</Link>
                <h1>事件总览</h1>
            </div>
        )
    }
}
export default Home