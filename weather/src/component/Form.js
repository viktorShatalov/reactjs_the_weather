import React from 'react';

const Form = props => (
    <div>
        <form onSubmit={props.gettingWeather}>
            <input type='text' name='city' placeholder='Город'></input>
            <button>Получить погоду</button>
        </form>
    </div>
)

export default Form;