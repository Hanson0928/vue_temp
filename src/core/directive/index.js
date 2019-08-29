
export default (Vue) => {
    Vue.directive("fileUpload", (el, binding, vnode) => {
        let val=binding.value
        createFile(val)
        function createFile(data){
            let node=document.createElement('input')
            node.type='file'
            node.accept='image/jpeg,image/png,image/jpg'
            node.multiple=data.multiple?'multiple':"";
            node.style.display='none';
            el.prepend(node);
            el.onclick=function(){
                el.children[0].click();
            }
        }
        el.children[0].onchange=function(evt){
            let file=evt.target.files[0]
            console.log(URL.createObjectURL(file))
            let fn=val.fn
            vnode.context[fn](URL.createObjectURL(file))
        }
    })
  
}