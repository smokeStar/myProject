import { TODOSTH,CALLSOMEBODY,EVAL } from './mutations-types';
export default {
  [TODOSTH](state,{name,sex,age}){
    state.name = name;
    state.sex = sex;
    state.age = age;
  }
}
