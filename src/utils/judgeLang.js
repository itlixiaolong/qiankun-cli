module.exports=function(arr){
    if(arr.length===1){
        if(arr.includes('js')){
            return 'pureJs'
        }else if(arr.includes('vue')){
            return 'pureVue'
        }else{
            return 'pureReact'
        }
    }else if(arr.length===2){
        if(arr.includes('js')&&arr.includes('vue')){
            return 'js&&Vue'
        }else if(arr.includes('js')&&arr.includes('react')){
            return 'jsA&&React'
        }
    }else{
        return 'js&&vue&&react'
    }
}