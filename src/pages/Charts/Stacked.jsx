import React from 'react';

import { ChartsHeader, Stacked as StackedChart } from '../../components';

const Stacked = () => (
  <div className="m">
    <ChartsHeader category="Stacked" title="Individual and Average Confidence" />
    <div className="w">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;