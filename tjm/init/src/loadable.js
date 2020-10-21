import React from 'react';
import Loadable from 'react-loadable';
const LoadingComponent = function (arg) {
    return (
        <div >loading...</div>
    )
}
export default (loader, loading = LoadingComponent) => {
    return Loadable({
        loader,
        loading
    })
}