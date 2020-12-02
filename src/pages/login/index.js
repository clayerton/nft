import React, {useEffect, useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
const Login = props => {
    useEffect(()=>{
        
    },[])
    return (
        <div>登录</div>
    )
}
const mapStateToProps = (state) => ({data:state});

const mapDispatchToProps = (dispatch) => ({
//   getDevicesX: (payload) => dispatch(getDevices(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));