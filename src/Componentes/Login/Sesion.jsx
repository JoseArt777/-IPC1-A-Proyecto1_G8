import React, { useState } from 'react';
import './Sesion.css';
import { FaUserAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BsGenderAmbiguous } from "react-icons/bs";

const Login = () => {
    
    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };
    return (
        <div className={`wrapper${action}`}>
            <div className='form-box sesion'>
            <form action = ''>
                <h1> Inicio de Sesion </h1>
                <div className = "input-box">
                   <input type="text" placeholder = 'Correo' required/> 
                   <FaUserAlt className='icon'/>
                </div>
                <div className = "input-box">
                   <input type="password" placeholder = 'Contraseña' required/> 
                   <CiLock className='icon' />
                </div>

                <div className ="remember-forgot">
                    <label><input type ="checkbox"/> Recordar </label>
                    <a href="#"> Olvido Contraseña</a>
                </div>

                <button type="submit">Login</button>


                <div className="register-link">
                        <p>No tiene una cuenta? <a href="#" onClick={registerLink}>Registro</a> </p>
                    </div>
            </form>
        </div>


           <div className='form-box registro'>
            <form action = ''>
                <h1> Nuevo Usuario</h1>
                <div className = "input-box">
                   <input type="text" placeholder = 'Nombre' required/> 
                   <FaUserAlt className='icon'/>
                </div>
                <div className = "input-box">
                   <input type="text" placeholder = 'Apellido' required/> 
                   <FaUserAlt className='icon'/>
                </div>
                <div className = "input-box">
                   <input type="text" placeholder = 'Genero' required/> 
                   <BsGenderAmbiguous  className='icon'/>
                </div>
                <div className = "input-box">
                   <input type="email" placeholder = 'Correo' required/> 
                   <FaEnvelope  className='icon'/>
                </div>
                <div className = "input-box">
                   <input type="password" placeholder = 'Contraseña' required/> 
                   <CiLock className='icon' />
                </div>
                <div className = "input-box">
                   <input type="number" placeholder = 'Fecha de Nacimiento' required/> 
                   <MdDateRange  className='icon'/>
                </div>

                <div className ="remember-forgot">
                    <label><input type ="checkbox"/> I agree with the terms & condition </label>
                </div>

                <button type="submit">Guardar</button>
                <div className="register-link">
                    <p> Ya tiene una cuenta? <a href='3'>Inicio</a> </p>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Login