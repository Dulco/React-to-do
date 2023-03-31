import React from "react";
import './TodosLoading.css';
import { Momentum } from '@uiball/loaders'

function TodosLoading(){
    return (
        <div className="loading">
            <Momentum
            size={40}
            speed={1.1} 
            color= "#f4d8f6"
        />
        </div>
        
    )
};

export {TodosLoading};