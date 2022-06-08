import Vue from 'vue'
import Vuex from 'vuex'
//vuex参数放在此处统一管理
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        vname: "",
        vIdnumber: "",
        vnumber: "",
        vsex:'',
        vnation:'',
        venterTime:'',
        vleaveTime:'',
        vsubeject: [],
        vdesc: "",
    },
    mutations: {
        ADDFROM(state,from){
            state.vname = from.name
            state.vIdnumber = from.Idnumber
            state.vnumber = from.number
            state.vsex = from.sex
            state.vnation = from.nation
            state.venterTime = from.enterTime
            state.vleaveTime = from.leaveTime
            state.vsubeject = from.subeject
            state.vdesc = from.desc

        }

    },
    actions:{
        addfrom(contenxt,from){
            contenxt.commit('ADDFROM',from)
        }
    }
})

export default store