import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m">
      <ChartsHeader category="Color Mappping" title="Total Score (Confidence)" />
      <div className="w">
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ mode: 'Range', background: 'white' }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="Confidence"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;