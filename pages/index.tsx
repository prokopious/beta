import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <img src="/static/bottle.png" alt="a" className="background-image" />
        <div className="promotional-message">
          <h3></h3>
          <h2>The Glass Phial</h2>
          <p><strong>A FINE COLLECTION OF PERFUMING COMPOUNDS</strong>.</p>
        </div>
        <ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
      {id: "Turkish Rose Absolute", name: "Turkish Rose Absolute", price: 40.00, image: "../static/rose.jpg",description: "Among the finest of rose absolutes, Turkish rose is known for its allspice note."} as IProduct,
      {id: "Alpha Irone", name: "Alpha Irone", price: 50.00, image: "../static/ionone.png", description: "This product is among the main constituents of orris butter."} as IProduct,

      {id: "Beeswax Absolute", name: "Beeswax Absolute", price: 7.50, image: "../static/wax.jpg", description: "Imparts a waxy note to rose and other floral accords."} as IProduct,
      {id: "nextjs_veiltail", name: "Veiltail Betta", price: 5.00, image: "../static/veiltail.jpg", description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards."} as IProduct,
    ]
  }
}

export default Index