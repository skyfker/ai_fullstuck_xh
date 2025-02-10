import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

function initState() {
    return {
        isCollapse: false,       
        tags:[
            {
                path:'/home',
                name:'home',
                label:'首页',
                icon:'house',
                url:'Home'
            },
        ],
        currentMenu:null,
        menuList:[],
        token:'',
        routerList:[]
    }
}

export const useAllDataStore = defineStore('allData', () => {
    // ref-->state属性
    // computed-->getters
    // function-->actions

    const state = ref(initState())
    watch(state, (newState) => {
        if(!newState.token) return
        localStorage.setItem('store', JSON.stringify(newState))
    }, { deep: true })
    function selectMenu(val) {
        if (val.name === 'home') {
            state.value.currentMenu = null
        } else {
            // console.log(val.name);
            // console.log(state.value.tags);
            state.value.currentMenu = val
            state.value.tags.findIndex(item => item.name === val.name) === -1 ? state.value.tags.push(val) : ''
        }
    }
    function undateTags(tag){
        let index = state.value.tags.findIndex(item => item.name === tag.name)
        state.value.tags.splice(index,1)
    }
    function updateMenuList(val) {
        state.value.menuList = val
    }
    function addMenu(router,type) {
        if(type === 'refresh') {
            if(JSON.parse(localStorage.getItem('store'))){
                state.value = JSON.parse(localStorage.getItem('store'))
                state.value.routerList = []
            }
        }
        const menu = state.value.menuList;
        const module = import.meta.glob('../views/**/*.vue') //Vite官方提供的功能--Glob导入，用于从文件系统中导入模块
        const routeArr = []
        menu.forEach(item => {
            if (item.children) {
                item.children.forEach(val => {
                    let url = `../views/${val.url}.vue`
                    val.component = module[url]
                    routeArr.push(...item.children)
                })
            }
            else {
                let url = `../views/${item.url}.vue`
                item.component = module[url]
                routeArr.push(item)
            }
        })
        let routers = router.getRoutes()
        routers.forEach(item => {
            if(item.name === 'main' || item.name === 'login' || item.name === '404') {
                return
            }else {
                router.removeRoute(item.name)
            }
        })
        routeArr.forEach(item => {
            state.value.routerList.push(router.addRoute("main",item))
        })
    }
    function clean() {
        state.value.routerList.forEach(item => {
            if(item) item()
        })
        state.value = initState()
        localStorage.removeItem('store')
    }
    return { 
        state,
        selectMenu,
        undateTags,
        updateMenuList,
        addMenu,
        clean
    }
  })