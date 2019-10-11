import React,{Component} from 'react';
import SideBar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Article from './components/article/article';
import Card from './components/card/card';
import SocialFooter from './components/social_footer/social_footer';
import Footer from './components/footer/footer';
import './App.css';

class App extends Component {
  state = {
    items:[{"title": "Blog/Article","price":"500","source_url": "http://www.101cookbooks.com/archives/saag-paneer-recipe.html",
"image_url": "https://media.istockphoto.com/vectors/peacock-drawing-fantasy-bird-vector-id1143520232", "desc":"Typically 450-400 words,an e-book is perfect for your target audience rangine from prospective customers to users",
"product_url": "http://www.101cookbooks.com"},{"title": "Newsletter/E-mailer","price":"1000","source_url": "http://www.101cookbooks.com/archives/saag-paneer-recipe.html",
"image_url": "https://media.istockphoto.com/vectors/peacock-drawing-fantasy-bird-vector-id1143520232", "desc":"Typically 450-400 words,an e-book is perfect for your target audience rangine from prospective customers to users",
"product_url": "http://www.101cookbooks.com"},{"title": "Whitepaper","price":"2000","source_url": "http://www.101cookbooks.com/archives/saag-paneer-recipe.html",
"image_url": "https://media.istockphoto.com/vectors/peacock-drawing-fantasy-bird-vector-id1143520232", "desc":"Typically 450-400 words,an e-book is perfect for your target audience rangine from prospective customers to users",
"product_url": "http://www.101cookbooks.com"},{"title": "e-book","price":"1000","source_url": "http://www.101cookbooks.com/archives/saag-paneer-recipe.html",
"image_url": "https://media.istockphoto.com/vectors/peacock-drawing-fantasy-bird-vector-id1143520232", "desc":"Typically 450-400 words,an e-book is perfect for your target audience rangine from prospective customers to users",
"product_url": "http://www.101cookbooks.com"},{"title": "Report/Guide","price":"1000","source_url": "http://www.101cookbooks.com/archives/saag-paneer-recipe.html",
"image_url": "https://media.istockphoto.com/vectors/peacock-drawing-fantasy-bird-vector-id1143520232", "desc":"Typically 450-400 words,an e-book is perfect for your target audience rangine from prospective customers to users",
"product_url": "http://www.101cookbooks.com"},{"title": "Product Description","price":"500","source_url": "http://www.101cookbooks.com/archives/saag-paneer-recipe.html",
"image_url": "https://media.istockphoto.com/vectors/peacock-drawing-fantasy-bird-vector-id1143520232", "desc":"Typically 450-400 words,an e-book is perfect for your target audience rangine from prospective customers to users",
"product_url": "http://www.101cookbooks.com"},{"title": "Website Content","price":"1000","source_url": "http://www.101cookbooks.com/archives/saag-paneer-recipe.html",
"image_url": "https://media.istockphoto.com/vectors/peacock-drawing-fantasy-bird-vector-id1143520232", "desc":"Typically 450-400 words,an e-book is perfect for your target audience rangine from prospective customers to users",
"product_url": "http://www.101cookbooks.com"},{"title": "Video Script","price":"1000","source_url": "http://www.101cookbooks.com/archives/saag-paneer-recipe.html",
"image_url": "https://media.istockphoto.com/vectors/peacock-drawing-fantasy-bird-vector-id1143520232", "desc":"Typically 450-400 words,an e-book is perfect for your target audience rangine from prospective customers to users",
"product_url": "http://www.101cookbooks.com"},{"title": "Company Profile/Brochure","price":"2000","source_url": "http://www.101cookbooks.com/archives/saag-paneer-recipe.html",
"image_url": "https://media.istockphoto.com/vectors/peacock-drawing-fantasy-bird-vector-id1143520232", "desc":"Typically 450-400 words,an e-book is perfect for your target audience rangine from prospective customers to users",
"product_url": "http://www.101cookbooks.com"},{"title": "Press Release","price":"2000","source_url": "http://www.101cookbooks.com/archives/saag-paneer-recipe.html",
"image_url": "https://media.istockphoto.com/vectors/peacock-drawing-fantasy-bird-vector-id1143520232", "desc":"Typically 450-400 words,an e-book is perfect for your target audience rangine from prospective customers to users",
"product_url": "http://www.101cookbooks.com"}]
  }
  
  render(){
  return (
    <div>
    <div className="header">
      <Header />
    </div>
    <div className="row">
      <div className="side">
        <SideBar/>
      </div>
      <div className="main">
        <h2>Content Store</h2>
        <Article />
        <Card items={this.state.items} />
        <SocialFooter/>
        <Footer />
      </div>
    </div>
    </div>
  );
}
}

export default App;
