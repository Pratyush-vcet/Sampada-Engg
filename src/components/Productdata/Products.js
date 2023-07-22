import ProdData from './ProdData';
import './diestyle.css'

function Products() {
  return (
    <div className='trip '>
        <h1>Our Supplied Products</h1>

        <div className="tripcard innerWidthh">
            <ProdData
            image="./Extruded-Profile-Dies1.jpg"
            heading= "Our Developed Dies"
            />
            <ProdData
            image="./Extruded-Profile-Dies1.jpg"
            heading= "Our Developed Dies"
            />
            <ProdData
            image="./Extruded-Profile-Dies1.jpg"
            heading= "Our Developed Dies"
            />  
            <ProdData
            image="./Extruded-Profile-Dies1.jpg"
            heading= "Our Developed Dies"
            />
            <ProdData
            image="./Extruded-Profile-Dies1.jpg"
            heading= "Our Developed Dies"
            />
            <ProdData
            image="./Extruded-Profile-Dies1.jpg"
            heading= "Our Developed Dies"
            />
            <ProdData
            image="./Extruded-Profile-Dies1.jpg"
            heading= "Our Developed Dies"
            />
            <ProdData
            image="./Extruded-Profile-Dies1.jpg"
            heading= "Our Developed Dies"
            />
        </div>
    </div>
  );
}

export default Products