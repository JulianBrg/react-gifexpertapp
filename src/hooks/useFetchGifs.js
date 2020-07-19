//Todos los hooks inician con la palabra 'use'

import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Solo se dispara cuando cambia la [category]
    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            });
    }, [category]);

    return state;
}