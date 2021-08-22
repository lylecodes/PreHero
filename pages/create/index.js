import { Fragment } from 'react';
import Layout from '../../components/layout/Layout';
import Head from "next/head";
import DropdownMenuContainer from '../../components/create/DropdownMenuContainer';


const CreatePage = () => {
    return (
        <Fragment>
        <Layout>
          <Head>
            <title>Create</title>
            <meta name="description" content="Create Your Pre-Workout!" />
          </Head>
          <div>Create!</div>
          <div>
          <DropdownMenuContainer />
          </div>
        </Layout>
      </Fragment>
    )
}

export default CreatePage;