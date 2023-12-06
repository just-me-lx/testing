// UI 测试jest没弄出来,这部分没学完--第九章

import React from "react";
import { mount } from "enzyme";
import Demo from "./src/demo";
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('UI test #demo', () => {
    it('should have title', () => {
        const wrapper = mount(<Demo />);
        const title = wrapper.find('h1');
        expect(title).toHaveLength(1);
    })
})