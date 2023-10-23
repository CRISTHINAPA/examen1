import {IFlight} from './interfaces/IFlight'

const functions: IFlight[] = [
    {
        id: 1,
        number: 101,
        from: 'Manta',
        to: 'Guayaquil',
        capacity: 200,
        passenger: [
          {
            id: 1,
            passportNumber: 'CRIS2023',
            gender: 'Femenino',
            address: 'La Aurora, Manta',
            flightId: 1
          },
          {
            id: 2,
            passportNumber: 'JJJ2223',
            gender: 'Femenino',
            address: 'Manta 2000, Manta',
            flightId: 1
          }
        ]
      },
      {
        id: 2,
        number: 202,
        from: 'Manta',
        to: 'Quito',
        capacity: 150,
        passenger: [
          {
            id: 3,
            passportNumber: 'DDD2023',
            gender: 'Masculino',
            address: 'Ciudadela Universitaria, Manta',
            flightId: 2
          }
        ]
      },
      {
        id: 3,
        number: 303,
        from: 'Quito',
        to: 'Guayaquil',
        capacity: 180,
        passenger: [
          {
          id: 2,
          passportNumber: 'JJJ2277',
          gender: 'Femenino',
          address: 'Manta 6000, Manta',
          flightId: 1
          }
        ]
      }
];

  

  function eliminarElementoPorID(arr: IFlight[], idEliminar: number): void {
    const elementoAEliminar = arr.find((elemento) => elemento.id === idEliminar);
    if (elementoAEliminar) {
      elementoAEliminar.eliminado = true;
    }
  }
  

  const flights: IFlight[] = [
    { id: 1, number: 101, from: 'New York', to: 'Los Angeles', capacity: 200, passenger: [] },
    { id: 2, number: 202, from: 'Chicago', to: 'Miami', capacity: 150, passenger: [] },
    { id: 3, number: 303, from: 'San Francisco', to: 'Seattle', capacity: 180, passenger: [] },
  ];
  
  console.log('Antes de eliminar:');
  console.log(flights);
  
  eliminarElementoPorID(flights, 2);
  
  console.log('Después de eliminar:');
  console.log(flights);
  