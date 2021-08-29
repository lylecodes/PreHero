import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import Head from "next/head";
import classes from "./index.module.css";
import DropdownMenu from "../../components/create/DropdownMenu";
import IngredientDropdownMenu from "../../components/create/IngredientDropdownMenu/IngredientDropdownMenu";

const CreatePage = () => {
  return (
    <Fragment>
      <Layout>
        <Head>
          <title>Create</title>
          <meta name="description" content="Create Your Pre-Workout!" />
        </Head>
        <h1 className={classes.heading}>Create!</h1>
        <main className={classes.main}>
          {/* <DropdownMenu /> */}
          <IngredientDropdownMenu />
        </main>
      </Layout>
    </Fragment>
  );
};

export default CreatePage;
