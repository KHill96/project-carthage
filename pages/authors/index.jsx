import React from "react";
import Head from "next/head";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Component.module.css';
import { getAuthors } from "../../services";


const Authors = ({authors}) => {
    
    return (
      <div>
        <Head>
            <link rel="shortcut icon" href='carthage.png' />
            <title>Authors</title>
        </Head>
        <div className="grid grid-rows-2 pt-8 grid-flow-col auto-rows-fr auto-cols-fr text-sm">
          {authors.map((author, index) => 
          <Button className={styles.button} href={"/authors/"+author.slug} key={author.name}>
            <span className="lg:text-xl sm:text-sm">
              {author.name}
            </span>
          </Button>
          
          )}
         
         
        </div>
      </div>
    )
  }
  
export async function getServerSideProps() {
    const authors = (await getAuthors()) || []
    console.log(authors)
    return {props:{authors}}
}

export default Authors