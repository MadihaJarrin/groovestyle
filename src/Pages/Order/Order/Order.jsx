import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import shopImg from '../../../assets/Shop/shop4.jpg'

import ParallaxCover from '../../Home/Home/Shared/ParallaxCover/ParallaxCover';
import { useState } from 'react';
import useCategories from '../../../Hooks/useCategories';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {

    const categories = ['dress', 'bags', 'shoes'];
    const { category } = useParams();
    // console.log(category);
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [list] = useCategories();
    const dress = list.filter(item => item.category === 'dress');
    const bags = list.filter(item => item.category === 'bags');
    const shoes = list.filter(item => item.category === 'shoes');
    const makeup = list.filter(item => item.category === 'makeup');
    const accessories = list.filter(item => item.category === 'accessories');

    return (
        <div>
            <Helmet>
                <title>GrooveStyle | Our Shop</title>
            </Helmet>
            <ParallaxCover img={shopImg} title={'Order Your desire'} className="h-[200px]"></ParallaxCover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='flex justify-center bg-yellow-500 p-1'>
                    <Tab>Clothes</Tab>
                    <Tab>Bags</Tab>
                    <Tab>Shoes</Tab>
                    <Tab>Makeup</Tab>
                    <Tab>Accessories</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={dress}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={bags}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={shoes}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={makeup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={accessories}></OrderTab>
                </TabPanel>

            </Tabs>
        </div >
    );
};

export default Order;