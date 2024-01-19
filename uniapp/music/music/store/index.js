import { creatStore } from 'vuex';

export default creatStore({
	state: {
		isShowMenu: true, // 控制菜单显示隐藏
	},
	mutations: {
		changeIsShowMenu(state, flag) {
			state.isShowMenu = flag;
		},
	},
});
