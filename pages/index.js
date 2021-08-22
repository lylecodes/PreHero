import { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";

const Dashboard = () => {
  return (
    <Fragment>
      <Head>
        <title>PreHub</title>
        <meta name="description" content="Customized pre workout!" />
      </Head>
      <Layout>
        <div>Dashboard!</div>
      </Layout>
    </Fragment>
  );
};

export default Dashboard;