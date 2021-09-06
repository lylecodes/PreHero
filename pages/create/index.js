import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import Head from "next/head";
import classes from "./index.module.css";
import OverviewContainer from "../../components/create/OverviewMenu/OverviewMenu";
import SelectorMenu from "../../components/create/SelectorMenu/SelectorMenu";

const CreatePage = () => {
  return (
    <div className={classes.body}>
      <Layout>
        <Head>
          <title>Create</title>
          <meta name="description" content="Create Your Pre-Workout!" />
        </Head>
        <h1 className={classes.heading}>Create Your Pre-Workout</h1>
        <main className={classes.createMain}>
          <section className={classes.overviewContainer}>
            <OverviewContainer />
          </section>
          <section className={classes.selectorMenu}>
            <SelectorMenu />
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default CreatePage;
