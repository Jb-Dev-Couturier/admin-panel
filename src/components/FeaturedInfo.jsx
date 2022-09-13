import React from 'react'

import {ArrowDownward,ArrowUpward} from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
    <div className='FeaturedInfo'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenues</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">2,451 €</span>
                <span className="featuredMoneyRate"> -11.4 <ArrowDownward className='featuredIcon negatif'/></span>
            </div>
            <span className="featuredSub">
                Comparer au mois dernier    
            </span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Ventes</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">4,655 €</span>
                <span className="featuredMoneyRate"> +5.55 <ArrowUpward className='featuredIcon'/></span>
            </div>
            <span className="featuredSub">
                Comparer au mois dernier    
            </span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Achat</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">451 €</span>
                <span className="featuredMoneyRate"> - 1.055 <ArrowDownward className='featuredIcon negatif'/></span>
            </div>
            <span className="featuredSub">
                Comparer au mois dernier    
            </span>
        </div>
    </div>
  )
}
