import React from 'react'
import './Tabs.scss'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import RewiessWrap from '../RewiewsWrap/RewiessWrap'
const TabsWrap = () => {
  return (
   <>

   <section className="tabs">
      <div className="container">
      <Tabs>
    <TabList>
      <Tab>Product Details</Tab>
      <Tab>Rating & Reviews </Tab>
      <Tab>FAQs</Tab>
    </TabList>
    <TabPanel>
    <div className="product-details">
                                <ul>
                                    <li>Свободная модель оверсайз</li>
                                    <li>Футболка унисекс</li>
                                    <li>M размер 48-50: На рост 155-165, вес до 75 кг</li>
                                    <li>L размер 50-54: На рост 165-180, вес до 100 кг</li>
                                    <li>XL размер 54-58 : На рост 180-195, вес до 130 кг</li>
                                </ul>
                            </div>


    </TabPanel>
    <TabPanel>
    <RewiessWrap/>  
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>



  

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>



  </Tabs>
   
      </div>
   </section>


     
   </>
  )
}

export default TabsWrap