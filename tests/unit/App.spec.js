import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "../../src/App.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("App.vue", () => {
  let state;
  let actions;
  let store;

  beforeEach(() => {
    state = {
      ingredients: ["mockPeas", "mockCarrots"],
      selectedRecipe: { title: "mock" },
      recipeIsOpen: true
    }
    actions = {
      toggleOpenRecipe: jest.fn(),
    };
    store = new Vuex.Store({
      state,
      actions
    });
  });

  it("matches the snapshot", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("dispatches toggleOpenRecipe when recipe card is clicked", () => {
    const wrapper = shallowMount(App, { store, localVue });
    wrapper.find(".toggle-icon-wrapper").trigger("click");
    expect(actions.toggleOpenRecipe).toHaveBeenCalled();
  });
});
