import react from 'react';

function Description({children}){
 return(
    <div>
        <h2>Описание</h2>
        {children}
        <button type="button">Подробнее</button>
    </div>
 )
}
export default Description;