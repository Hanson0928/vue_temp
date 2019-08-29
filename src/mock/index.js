import {UsersData} from './data/uerInfo'

import axios from 'axios'

import mockAdapter from 'axios-mock-adapter';

let mock =new mockAdapter(axios);

mock.onGet('/login').reply(config=>{
    console.log(config)
    // let loginInfo=config
    let params=config.params
    for(let i=0;i<UsersData.length;i++){
        if(UsersData[i].username==params.username){
            if(UsersData[i].password==params.password){
                return [200,{msg:'登录成功',status:1,userInfo:UsersData[i]}]
            }else{
                return [200,{msg:'密码错误',status:-2}]
            }
        }
    }
    return [200,{msg:'账号不存在',status:-1}]
})

//-1 账号不存在
//-2 密码错误
//-3 用户已经注册
//1 登录成功
//2注册成功


mock.onPost('/register').reply(config=>{
    
    let params=JSON.parse(config.data).data
    console.log(params)
    for(let i=0;i<UsersData.length;i++){
        if(UsersData[i].username==params.username){
            return [200,{msg:'该用户已注册',status:-3}]
        }
    }
    UsersData.push(params)
    return [200,{msg:'注册成功',status:2}]
    
})

export default axios;