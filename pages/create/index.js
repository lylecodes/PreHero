import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import Head from "next/head";
import classes from "./index.module.css";
import DropdownMenu from "../../components/create/DropdownMenu";
import CategoryItemsList from "../../components/create/MenuItemLists/CategoryItemsList";

const CreatePage = () => {
  return (
    <Fragment>
      <Layout>
        <Head>
          <title>Create</title>
          <meta name="description" content="Create Your Pre-Workout!" />
        </Head>
        <main className={classes.main}>
          <h1>Create!</h1>
        </main>
        <section className={classes.page}>
          <DropdownMenu />
        </section>
        <CategoryItemsList />
      </Layout>
    </Fragment>
  );
};

export default CreatePage;
