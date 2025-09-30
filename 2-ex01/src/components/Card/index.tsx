import Image from "next/image";
import { ReactNode } from "react";
import styles from "./Card.module.css"
import { montserrat } from "@/app/layout";

interface DefaultProps {
  children?: ReactNode;
  className?: string;
}

interface CardImgProps extends DefaultProps {
  src: string;
  alt: string;
}

const Card:React.FC<DefaultProps> = ({ children }) => {
  return (
    <div className={styles.card}>
      {children}
      <div className={styles.cardButtons}>
        <button>Saiba Mais</button>
        <button>Comprar</button>
      </div>
    </div>
  )
}

const CardHeader:React.FC<DefaultProps> = ({ children }) => {
  return (
    <div className={styles.cardHeader}>
      {children}
    </div>
  )
}

const CardImg:React.FC<CardImgProps> = ({ src, alt }) => {
  return ( 
    <div className={styles.cardImg}>
      <Image 
        src={src} 
        alt={alt} 
        fill={true}
      /> 
    </div>
  )
}

const CardTitle:React.FC<DefaultProps> = ({ children }) => {
  return <h1>{children}</h1>
}

const CardDescription:React.FC<DefaultProps> = ({ children }) => {
  return <p className={styles.cardDescription}>{children}</p>
}

const CardText:React.FC<DefaultProps> = ({ children }) => {
  return <p className={styles.cardText}>{children}</p>
}

const CardPrice:React.FC<DefaultProps> = ({ children }) => {
  return <p className={styles.cardPrice}>{children}</p>
}

export { Card, CardHeader, CardImg, CardTitle, CardDescription, CardText, CardPrice }