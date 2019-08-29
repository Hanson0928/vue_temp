export default (Vue)=>{
    Vue.filter("ellipsis",(val,num)=>{
        if(!val){
            return "";
        }
        if(val.length>=num){
            return val.slice(0,num)+"..."
        }
        return val
    })
}