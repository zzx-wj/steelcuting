import React, { useState } from 'react';

import { Tabs } from "antd"
import Calculate from "../../components/Calculate"
import { steelArr } from "../../utils/util"

const Index = () => {
  const tabsItem = steelArr.map((item) => {
    return {
      label: item.name,
      key: item.key,
      children: <Calculate title={item.name} opt={item.opt} />,
    }
  })
  return (
    <div>
      <Tabs
        items={tabsItem}
        onTabClick={(key) => {
          // console.log(key)
        }}
        size={'large'}
        tabPosition='left'
        tabBarGutter={30}
        destroyInactiveTabPane={false}
        type='line'
      >
      </Tabs>
    </div>
  );
}

export default Index;
