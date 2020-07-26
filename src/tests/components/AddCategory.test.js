import React  from 'react'

const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe('Pruebas en AddCategory', () => {
    test('debe de mostrarse correctamente', () => {
        const wrapper = shallow(<AddCategory />)
    });
});