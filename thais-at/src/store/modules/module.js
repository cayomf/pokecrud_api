import axios from "axios";

const state = {
  pokes: []
};

const getters = {
  allPokes: state => state.pokes
};

const actions = {
  async getAll({ commit }) {
    const response = await axios.get(
      "http://localhost:3333/pokes"
    );

    commit("getAll", response.data);
  },
  async addPoke({ commit }, poke) {
      console.log("TA CHEGANDO!!")
    const response = await axios.post(
      "http://localhost:3333/pokes",
      poke
    );

    commit("addPoke", response.data);
  },
  async deletePoke({ commit }, _id) {
    await axios.delete(`http://localhost:3333/pokes/${_id}`);
    commit("deletePoke", _id);
  },

  async updatePoke({ commit }, poke) {
    const response = await axios.put(
      `http://localhost:3333/pokes/${poke._id}`,
      poke
    );

    commit("updatePoke", response.data);
  }
};

const mutations = {
  getAll: (state, data) => (state.pokes = data),
  addPoke: (state, data) => state.pokes.push(data),
  deletePoke: (state, _id) =>
    (state.pokes = state.pokes.filter(poke => poke._id !== _id)),
  updatePoke: (state, poke) => {
    const index = state.pokes.findIndex(poke => poke._id === poke._id);

    if (index >= 0) {
      state.pokes.splice(index, 1, poke);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};