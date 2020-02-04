import { mount } from "@vue/test-utils";
import Header from "../../src/components/Header.vue";

describe("Header.vue", () => {
  it("matches the snapshot", () => {
    const wrapper = mount(Header);
    expect(wrapper.element).toMatchSnapshot();
  });
});
