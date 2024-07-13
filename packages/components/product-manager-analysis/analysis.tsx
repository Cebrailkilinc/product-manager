import React from 'react'
import "./analysis.scss"
import AnalysisCard from '@/module/product-manager/component/analysis/analysis-card';

// Analiz verisi arayüzü
interface AnalysisData {
    title: string;
    value: number;
  }
  
  // Analiz verileri
  const analysisData: AnalysisData[] = [
    { title: 'Net Profit', value: 129000 },
    { title: 'Net Profit', value: 150000 },
    { title: 'Net Profit', value: 175000 },
    { title: 'Net Profit', value: 200000 },
  ];

const Analysis = () => {
  return (
   <div className='analysis-content'>
      {analysisData.map((data, index) => (
        <AnalysisCard key={index} title={data.title} value={data.value} />
      ))}
    </div>
  )
}

export default Analysis
