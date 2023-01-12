import './Card.css';

 export const Card = (props) => {
   const classes = 'card ' + props.className 
  return <div className={classes}>{props.children}</div>
 } 

 // Логикасы жок тупой компонента, обёртка учун керек