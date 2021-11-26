import Vue from "vue";
import Vuex from "vuex";
import accounts from "./modules/accounts";
import contracts from "./modules/contracts";
import tokenCreator from "./modules/tokenCreator";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    accounts,
    contracts,
    tokenCreator,
  },
});
