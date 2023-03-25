import car1_photo_1 from '../../images/cars/corolla2000/corolla2001_1.jpg'
import car1_photo_2 from '../../images/cars/corolla2000/corolla2001_2.jpg'
import car1_photo_3 from '../../images/cars/corolla2000/corolla2001_3.jpg'
import car2_photo_1 from '../../images/cars/civic2020/civic2020_1.jpg'
import car2_photo_2 from '../../images/cars/civic2020/civic2020_2.jpg'
import car2_photo_3 from '../../images/cars/civic2020/civic2020_3.jpg'
import car3_photo_1 from '../../images/cars/argo2021/argo2021_1.jpg'
import car3_photo_2 from '../../images/cars/argo2021/argo2021_2.jpg'
import car3_photo_3 from '../../images/cars/argo2021/argo2021_3.jpg'
import car4_photo_1 from '../../images/cars/civic2007/civic2007_1.jpg'
import car4_photo_2 from '../../images/cars/civic2007/civic2007_2.jpg'
import car4_photo_3 from '../../images/cars/civic2007/civic2007_3.jpg'
import car5_photo_1 from '../../images/cars/gol2011/gol2011_1.jpg'
import car5_photo_2 from '../../images/cars/gol2011/gol2011_2.jpg'
import car5_photo_3 from '../../images/cars/gol2011/gol2011_3.jpg'
import car6_photo_1 from '../../images/cars/corolla2023/corolla2023_1.jpg'
import car6_photo_2 from '../../images/cars/corolla2023/corolla2023_2.jpg'
import car6_photo_3 from '../../images/cars/corolla2023/corolla2023_3.jpg'
import car7_photo_1 from '../../images/cars/uno2014/uno2014_1.jpg'
import car7_photo_2 from '../../images/cars/uno2014/uno2014_2.jpg'
import car7_photo_3 from '../../images/cars/uno2014/uno2014_3.jpg'
import car8_photo_1 from '../../images/cars/gol2011/gol2011_1.jpg'
import car8_photo_2 from '../../images/cars/gol2011/gol2011_2.jpg'
import car8_photo_3 from '../../images/cars/gol2011/gol2011_3.jpg'

const carData = {    
    car1: 
    {
        id : '#01',
        marca : 'Toyota',
        modelo: 'Corolla',
        ano: 2000,
        km: 189123,
        preco: 22800.00,
        photo_1: car1_photo_1,
        photo_2: car1_photo_2,
        photo_3: car1_photo_3,
        equipamentos: {
            arcondicionado: 'sim',
            faroldemilha: 'sim',
        }  
    },
    car2:
    {
        id : '#02',
        marca : 'Honda',
        modelo: 'Civic',
        ano: 2020,
        km: 18432,
        preco: 132019, 
        photo_1: car2_photo_1,
        photo_2: car2_photo_2,
        photo_3: car2_photo_3        
    },
    car3:
    {
        id : '#03',
        marca : 'Fiat',
        modelo: 'Argo Drive',
        ano: 2021,
        km: 24021,
        preco: 62340,      
        photo_1: car3_photo_1,
        photo_2: car3_photo_2,
        photo_3: car3_photo_3   
    },
    car4:
    {
        id : '#04',
        marca : 'Honda',
        modelo: 'Civic',
        ano: 2007,
        km: 85100,
        preco: 28000,
        photo_1: car4_photo_1,
        photo_2: car4_photo_2,
        photo_3: car4_photo_3 
               
    },
    car5:
    {
        id : '#05',
        marca : 'Volkswagen',
        modelo: 'Gol',
        ano: 2011,
        km: 79543,
        preco: 21000,
        photo_1: car5_photo_1,
        photo_2: car5_photo_2,
        photo_3: car5_photo_3       
    },
    car6:
    {
        id : '#06',
        marca : 'Toyota',
        modelo: 'Corolla ',
        ano: 2023,
        km: 0,
        preco: 205320,
        photo_1: car6_photo_1,
        photo_2: car6_photo_2,
        photo_3: car6_photo_3       
    },
    car7:
    {
        id : '#06',
        marca : 'Fiat',
        modelo: 'Uno ',
        ano: 2014,
        km: 74000,
        preco: 29000,
        photo_1: car7_photo_1,
        photo_2: car7_photo_2,
        photo_3: car7_photo_3       
    }
  };

  export default carData