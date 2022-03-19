import React from 'react';

const WhoMakes = () => {
    return ( 
        // <p>Who Makes</p>
        <>
            <div className='h-screen py-5 m-4 bg-stone-50'>

                <div className='grid grid-cols-2 m-10'>
                    <div className='text-base not-italic text-black '>
                        <h2 className='text-4xl italic font-normal'><span className='text-orange-500' >Who Makes</span> Your Food?</h2>
                        <br></br>
                        <p className='font-bold'>Our mission is to help grow the local food ecosystem in BC and across Canada. Why?</p>
                        <br></br>
                        <ul className='my-2 font-medium list-disc list-outside marker:text-orange-500'>
                            <li>Because it connects us to the land we live on, and to the people who live here</li>
                            <br></br>
                            <li>Because it's more meaningful to cook and eat something made by a person nearby than by some distant corporation</li>
                            <br></br>
                            <li>Because good local food makes our corner of the world a better place to live</li>
                            <br></br>
                            <li>Because it supports local jobs</li>
                            <br></br>
                            <li>Because it makes more sense for the environment</li>
                        </ul>
                        <br></br>
                        <a href="https://www.rionegro.com.ar/frutos-rojos-con-valor-patagonico-999841/" target="_blank"
                        className='px-4 py-2 font-normal text-white bg-orange-700 rounded hover:bg-orange-500'
                        >Discover Our Producers</a>
                    </div>
                    <div className='w-full h-full'>
                        <div>
                            <img src="https://www.huelvainformacion.es/2020/03/09/provincia/Jornaleras-pleno-faena-recoleccion-fresa_1444666238_118332782_667x375.jpg" alt="Cosecha de Frutilla" />
                        </div>
                    </div>
                </div>

            </div>
        </>
     );
}
 
export default WhoMakes;