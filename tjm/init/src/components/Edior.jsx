import React from 'react';
import { Link } from "react-router-dom"

class Login extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">首页</Link>
                <h1>添加事件</h1>
            </div>
        )
    }
}
export default Login