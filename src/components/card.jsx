import './card.css';

export default function Card({unlimited, price, speed}){
    let cardClassName = '';
    if (price === '300') {
        cardClassName = 'card-300';
      } else if (price === '450') {
        cardClassName = 'card-450';
      } else if (price === '550') {
        cardClassName = 'card-550 Highlighted'; 
      } else if (price === '1000') {
        cardClassName = 'card-1000';
      }
    return(
        <div className={`Container ${cardClassName}`}>
            <div className="Unlimited">
                <p>Безлимитный {unlimited}</p>
            </div>
            <div className="PriceDiv">
                <div className="Rub"><p>руб</p></div>
                <div className="Price"><p>{price}</p></div>
                <div className="Month"><p>/мес</p></div>
            </div>
            <div className="Speed"><p>до {speed} мб/сек</p></div>
            <div className="Notes"><p>Объем включенного <br /> трафика не ограничен</p></div>
        </div>
    )
}