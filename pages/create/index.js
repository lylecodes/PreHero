import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import Head from "next/head";
import classes from "./index.module.css";
import IngredientDropdownMenu from "../../components/create/IngredientDropdownMenu/IngredientDropdownMenu";
import OverviewContainer from "../../components/create/OverviewMenu/OverviewMenu";

const CreatePage = () => {
  return (
    <div className={classes.body}>
      <Layout>
        <Head>
          <title>Create</title>
          <meta name="description" content="Create Your Pre-Workout!" />
        </Head>
        <h1 className={classes.heading}>Create!</h1>
        <main className={classes.createMain}>
          <section className={classes.overviewContainer}>
            <OverviewContainer />
          </section>
          <section className={classes.dropdownContainer}>
            <IngredientDropdownMenu />
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default CreatePage;
