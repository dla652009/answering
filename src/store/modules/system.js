//系统模块
import {
    setStuInfo,
    getStuInfo
} from '@/utils/auth.js';
const state = {
    stuInfo: getStuInfo() && getStuInfo() != "undefined" ? getStuInfo() : {},
};

const mutations = {
    SAVE_USERINFO(state, value) { //存储学生信息
        state.stuInfo = value;
        setStuInfo(value);
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
