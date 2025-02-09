import { defineStore } from 'pinia'
import { ref } from 'vue'

function initState() {
    return {
        isCollapse: false,       
        tags:[
            {
                path:'/home',
                name:'home',
                lable:'首页',
                icon:'house',
                url:'Home'
            },
        ],
        currentMenu:null
    }
}

export const useAllDataStore = defineStore('allData', () => {
    // ref-->state属性
    // computed-->getters
    // function-->actions

    const state = ref(initState())
    function selectMenu(val) {
        if (val.name === 'home') {
            state.value.currentMenu = null
        } else {
            // console.log(val.name);
            // console.log(state.value.tags);
            state.value.tags.findIndex(item => item.name === val.name) === -1 ? state.value.tags.push(val) : ''
        }
    }
    function undateTags(tag){
        let index = state.value.tags.findIndex(item => item.name === tag.name)
        state.value.tags.splice(index,1)
    }
    return { 
        state,
        selectMenu,
        undateTags
    }
  })