import { NextPage } from 'next';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import HowWorks from '@/components/HowWorks';
import Dishes from '@/components/Dishes';
import Order from '@/components/Order';


const Home: NextPage = () => {

  return (
    <Layout title="Home" description="Home page">
      <div className="bg-[#FFFBF3]">
        <Header />
        <Hero />
      </div>
      <HowWorks />
      <Dishes />
      <div className="bg-[#FFFBF3]">
        <Order />
      </div>
    </Layout>
  );
};

export default Home;
