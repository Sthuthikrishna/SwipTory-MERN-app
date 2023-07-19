import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCategory } from '../../actions';

export default function Categories() {
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getAllCategory())
    }, []);
  return (
    <div>

    </div>
  )
}
