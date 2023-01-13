import React from "react";
import { getCategoriesAll } from "../../services";
import Head from "next/head";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Component.module.css';

const Categories = ({categories}) => {
    
    return (
      <div>
        <Head>
            <link rel="shortcut icon" href='carthage.png' />
            <title>Project Carthage</title>
        </Head>
        <div className="grid grid-cols-3 pt-8 px-4 grid-flow-col md:grid-flow-row text-sm">
          {categories.map((category, index) => 
          <Button className={styles.button} href={"/categories/"+category.slug} key={category.category}>
            <span className="text-base lg:text-xl">
              {category.category}
            </span>
          </Button>
            
          )}
        </div>
      </div>
    )
  }
  
export async function getServerSideProps() {
    const categories = (await getCategoriesAll()) || []
    console.log(categories)
    return {props:{categories}}
}

export default Categories