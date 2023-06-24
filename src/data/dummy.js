import React from 'react';
import { AiOutlineCalendar,  AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiPieChart, FiCreditCard, } from 'react-icons/fi';
import { BsBarChart, BsCurrencyDollar, BsShield,  } from 'react-icons/bs';




export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};


export const barChartData = [
  [
    { x: 'Shivam', y: 100 },
    { x: 'Average', y: 125.175 },
  ],
  [
    { x: 'Shivam', y: 100 },
    { x: 'Average', y: 58.05},
  ],
  [
    { x: 'Shivam', y: 200 },
    { x: 'Average', y: 67.125 },
    
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Confidence',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Active Listening',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Overall',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];
export const colorMappingData = [
  [
    { x: 'Shivam', y: 100 },
    { x: 'Utkarsh', y: 57 },
    { x: 'Tushar', y: 61 },
    { x: 'Rohan', y: 37 },
    { x: 'Vidushi', y: 74 },
    { x: 'Sankalp', y: 28 },
    { x: 'Swastik', y: 50 },
    { x: 'Eshaan', y: 73 },
    { x: 'Salman', y: 68 },
    { x: 'Aamir', y: 37.5 },
    
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];

export const rangeColorMapping = [
  { label: '1 to 30',
    start: '1',
    end: '30',
    colors: colorMappingData[1] },

  { label: '31 to 80',
    start: '31',
    end: '80',
    colors: colorMappingData[2] },

  { label: '81 to 110',
    start: '81',
    end: '110',
    colors: colorMappingData[3] },

];

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Names',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
  title: 'Confidence',
};


export const links = [
  
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
     
    ],
  },
  {
    title: 'Charts',
    links: [
      
      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
      
      {
        name: 'color-mapping',
        icon: <BsBarChart />,
      },
      
      {
        name: 'stacked',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];



export const pieChartData = [
  { x: 'Above average Active Listening', y: 5, text: '45.45%' },
  { x: 'Below active', y: 6, text: '54.55%' },
 
];


export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];

export const stackedChartData = [
  [
    { x: 'Shivam', y: 58.5 },
    { x: 'Utkarsh', y: 58.5 },
    { x: 'Tushar', y: 58.5 },
    { x: 'Rohan', y: 58.5 },
    { x: 'Vidushi', y: 58.5 },
    { x: 'Sankalp', y: 58.5 },
    { x: 'Swastik', y: 58.5 },
    { x: 'Eshaan', y: 58.5 },
    { x: 'Salman', y: 58.5 },
    { x: 'Aamir', y: 58.5 },
  ],
  [
    { x: 'Shivam', y: 100 },
    { x: 'Utkarsh', y: 57 },
    { x: 'Tushar', y: 61 },
    { x: 'Rohan', y: 37 },
    { x: 'Vidushi', y: 74 },
    { x: 'Sankalp', y: 28 },
    { x: 'Swastik', y: 50 },
    { x: 'Eshaan', y: 73 },
    { x: 'Salman', y: 68 },
    { x: 'Aamir', y: 37.5 },
  ],
];

export const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Average',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Individual',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 20,
  maximum: 200,
  interval: 20,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

