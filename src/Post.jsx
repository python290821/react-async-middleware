import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./actions";

const Posts = () => {
    
    const dispatch = useDispatch();
    console.log(dispatch)
    // this returns the state from the store
    // you can choose to modify the state 
    // in the function below
    const state = useSelector(function(state) { return state });

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    // how does dispatch looks like-
    //function dispatch(f) {
        //  if f == function:
            //  f(real_dispatch, current_state)
        //  elif f == json:
            //  real_dispatch(json)
    //}

    const renderPosts = () => {
        if (state.loading) {
            return <h1>Loading</h1>
        }

        return state.items.map(el => {
            return <h3 key={el.id}>{el.title}</h3>
        })
    }

    return (
        <div>
            {renderPosts()}
        </div>
    );
}

export default Posts;