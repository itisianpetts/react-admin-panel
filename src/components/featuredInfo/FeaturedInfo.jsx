import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
    <div className='featured-container'>
      <div className='featured-item'>
        <span className='featured-title'>revenue</span>
        <div className='featured-money-container'>
          <span className='featured-money'>£1,845</span>
          <span className='featured-money-rate'>
            -11.4 <ArrowDownward className='featured-icon negative' />
          </span>
        </div>
        <span className='featured-subtitle'>compared to last month</span>
      </div>
      <div className='featured-item'>
        <span className='featured-title'>sales</span>
        <div className='featured-money-container'>
          <span className='featured-money'>£44,845</span>
          <span className='featured-money-rate'>
            -13.5 <ArrowDownward className='featured-icon negative' />
          </span>
        </div>
        <span className='featured-subtitle'>compared to last month</span>
      </div>
      <div className='featured-item'>
        <span className='featured-title'>cost</span>
        <div className='featured-money-container'>
          <span className='featured-money'>£1,845</span>
          <span className='featured-money-rate'>
            +16.2 <ArrowUpward className='featured-icon' />
          </span>
        </div>
        <span className='featured-subtitle'>compared to last month</span>
      </div>
    </div>
  );
}
