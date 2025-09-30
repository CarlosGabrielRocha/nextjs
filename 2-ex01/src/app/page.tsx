import { Card, CardDescription, CardHeader, CardImg, CardPrice, CardText, CardTitle } from "@/components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <h1>Conheça a família Macbook.</h1>
        <p>Agora com novos modelos M3</p>
      </div>
      <div className={styles.pageCards}>
        <Card>
          <CardImg src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png" alt="Macbook Air 13 e 15" />
          <CardHeader>
            <CardTitle>Macbook Air de 13 e 15 pol.</CardTitle>
            <CardDescription>Chip M2 ou M3</CardDescription>
          </CardHeader>
            <CardText>
              Superfinos e rápidos para trabalhar jogar ou criar aonde quer que você vá.
            </CardText>
          <CardPrice>
            A partir de R$ 916,58/mês ou R$ 10.999*
          </CardPrice>          
        </Card>
        <Card>
          <CardImg src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png" alt="Macbook Air 13 e 15" />
          <CardHeader>
            <CardTitle>Macbook Air de 14 e 16 pol.</CardTitle>
            <CardDescription>Chip M3, M3 Pro ou M3 Max</CardDescription>
          </CardHeader>
            <CardText>
              Os notebooks Mac mais avançados para fluxos de trabalhos pesados.
            </CardText>
          <CardPrice>
            A partir de R$ 1541,58/mês ou R$ 18.499*
          </CardPrice>   
        </Card>
      </div>
    </div>
  );
}
