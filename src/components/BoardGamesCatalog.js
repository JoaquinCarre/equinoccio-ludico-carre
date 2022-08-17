import React from "react";
import logo1 from '../images/cajaRobomeke.png';
import logo2 from '../images/cajaPancú.png';
import logo3 from '../images/cajaRoliwar.png';
import logo4 from '../images/cajaEdificiosLocos.png';

const BoardGamesCatalog = () => {
    return (
        <>
            <h2 className='titlePages'>CATÁLOGO</h2>
            <div className="container p-3 accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item border border-dark border-1">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button style={{ backgroundColor: `#222` }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <img width={80} src={logo1} alt="Robomeke Board Game" className='img-fluid' /><h2 className="px-4 text-light"> Robomeke </h2>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div style={{ backgroundColor: `#555` }} className="accordion-body text-light text-start">Robomeke es un juego de estrategia donde los jugadores competirán para capturar la cápsula de suministros y llevarlas hacia su base para sobrevivir a la temporada de helada. Deberás pensar bien tus movimientos para lograr esquivar el hackeo de tus oponentes a las plataformas de paso que intentarán eliminar tu unidad robótica.</div>
                    </div>
                </div>
                <div className="accordion-item border border-dark border-1">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button style={{ backgroundColor: `#c2b500` }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <img width={80} src={logo2} alt="Robomeke Board Game" className='img-fluid' /><h2 className="px-4 text-dark"> Pancú </h2>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div style={{ backgroundColor: `#ffee05` }} className="accordion-body text-start">En Pancú cada jugador tendrá el rol de ser el mejor Chef Ogro de toda la aldea y para ello deberán formar los mejores Pancús para subir su reputación e intentar eliminar la competencia con trampas ogroríficas como una tostadora letal que desintegrará el pan del contrario eliminando toda posibilidad de formar un Pancú exquisito.</div>
                    </div>
                </div>
                <div className="accordion-item border border-dark border-1">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button style={{ backgroundColor: `#633207` }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <img width={80} src={logo3} alt="Robomeke Board Game" className='img-fluid' /><h2 className="px-4 text-light"> Roliwar </h2>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div style={{ backgroundColor: `#9e5200` }} className="accordion-body text-light text-start">La guerra se avecina, las colonias cercanas se fortalecen y tú no te puedes quedar atrás. En Roliwar deberás elegir entre formar tu ejército o comprarlo con recursos. A su vez deberás cosechar trigo para obtener más tropas de tus aliados como intercambio. Con solo 3 dados deberás decidir estratégicamente que camino seguir para vencer a tus enemigos en cada enfrentamiento.</div>
                    </div>
                </div>
                <div className="accordion-item border border-dark border-1">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button style={{ backgroundColor: `#ff9900` }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            <img width={80} src={logo4} alt="Robomeke Board Game" className='img-fluid' /><h2 className="px-4 text-dark"> Edificios Locos </h2>
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div style={{ backgroundColor: `#fc8300` }} className="accordion-body text-start">Edificios Locos es un juego de 18 cartas cuyo objetivo de los jugadores es construir los distintos pisos del edificio como mejor se destaquen para lograr mejor reputación ante la compañía rival. Ambos estarán a cargo del mismo edificio, pero aquel que lo haga mejor, se llevará toda la paga. Desafía tu cerebro y elimina la competencia.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoardGamesCatalog;