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

const Page2 = (props: IIndexProps) => {
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
          <p><strong>A COLLECTION OF FINE PERFUMING SUPPLIES</strong>.</p>
        </div>
        <ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

Page2.getInitialProps = async () => {
  return {
    products: [
      {id: "Virginia Rose", name: "Rosa Virginiana", price: 40.00, image: "../static/rose.jpg",description: "The pride of the Commonwealth is no longer Virginia cedar."} as IProduct,
      {id: "Methyl Laitone", name: "Methyl Laitone", price: 50.00, image: "https://www.gardenia.net/storage/app/public/guides/detail/19587224_m.jpg", description: "Adds creamy notes to gardenia, sandalwood, etc."} as IProduct,

      {id: "Beeswax Absolute", name: "Beeswax Absolute", price: 7.50, image: "../static/wax.jpg", description: "Imparts a waxy note to rose and other floral accords."} as IProduct,
      {id: "nextjs_veiltail", name: "Veiltail Betta", price: 5.00, image: "../static/veiltail.jpg", description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards."} as IProduct,
    ]
  }
}

export default Page2