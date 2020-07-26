import React from 'react'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en GridItem', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/no-img.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe de mostrar el componente correcatmente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    });

    test('debe de tener la img igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //Props son las propiedades que tiene los html como src o alt
        // console.log(img.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener animate__fadeInDownBig', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeInDownBig')).toBe(true);
    });
});