import React from 'react'

export default function Instructions() {
	return (
		<div className='max-w-[1300px] bg-white rounded-xl shadow-lg w-[95%] mx-auto p-6 flex flex-col gap-6'>
			<h2 className='text-center font-semibold text-2xl'>Instrucciones</h2>
			<ul className='flex flex-col gap-3 list-disc pl-6'>
				<li>Con el slider, arrastra hasta alcanzar la longitud que deseas que sea tu nueva contraseña.</li>
				<li>Presionando en las casillas, selecciona el tipo de carateres que quieres en tu nueva contraseña.</li>
				<li>Al crear tu contraseña, tendrás la opción de copiarla y también de guardarla, junto con el nombre que elijas para identificarla.</li>
			</ul>
		</div>
	)
}
