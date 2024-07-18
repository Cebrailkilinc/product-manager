import { DollarSign } from 'lucide-react'
import React from 'react'

interface AnalysisData {
    title: string;
    value: number;
  }

const AnalysisCard: React.FC<AnalysisData> = ({ title, value }) => {

    // Analiz verisi arayüzü


    return (
        <div className='analysis-content-product'>
            <div className='analysis-content-product-header'>
                <div className='product-header-net-profit'>
                    <DollarSign color='#ffff' className='product-header-net-profit-icon' />
                    <h1 className='product-header-title'>{title}</h1>
                </div>
            </div>
            <div className='analysis-content-product-footer'>
                {value}
            </div>
        </div>
    )
}

export default AnalysisCard
