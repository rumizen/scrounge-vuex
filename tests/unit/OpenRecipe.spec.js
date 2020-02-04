import { shallowMount, createLocalVue } from "@vue/test-utils";
import OpenRecipe from "../../src/components/OpenRecipe.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("OpenRecipe.vue", () => {
  let state;
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state
    });

    state = {
      selectedRecipe: {
        title: "mock",
        sourceUrl: "mockURL",
        image: "mockImage",
        sourceName: "mockName"
      },
      selectedRecipeIngredients: [
        {
          amount: {
            metric: {
              unit: "g",
              value: 222.0
            },
            us: {
              unit: "cups",
              value: 1.5
            }
          },
          image: "blueberries.jpg",
          name: "blueberries"
        }
      ],
      selectedRecipeSteps: [
        {
          name: "",
          steps: [
            {
              equipment: [
                {
                  id: 404784,
                  image: "oven.jpg",
                  name: "oven",
                  temperature: {
                    number: 200.0,
                    unit: "Fahrenheit"
                  }
                }
              ],
              ingredients: [],
              number: 1,
              step: "Preheat the oven to 200 degrees F."
            }
          ]
        }
      ],
      recipeIsOpen: true
    };
  });

  it("matches the snapshot", () => {
    const wrapper = shallowMount(OpenRecipe, {
      store,
      localVue,
      stubs: {
        transition: false
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
