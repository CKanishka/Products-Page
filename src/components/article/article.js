import React,{Component} from 'react';
import './article.css'
class Article extends Component{
    render(){
        return (
          <div className="article-container">
            <h5>Got bulk orders or almost similar orders ? Fill the order brief in an excel sheet </h5>
            <p className="article-desc">If you're wondering about an easy way to place orders in large numbers,we provide a way customized just for that.
            Download our excel sheet,and fill the order brief in the prescribed format and submit.In case you need any help,<a href="#link">we 
            are just a click away to assist you in placing the order </a></p>
            <button className="button-excel">Order via Excel Sheet</button>
          </div>
        );
      }
}

export default Article;