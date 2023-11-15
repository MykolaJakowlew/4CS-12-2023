
import { useContext, useEffect } from 'react';
import './style.css';
import SearchContext from '../../context/search.context';

/**
 * 
 * @param {Object} props 
 * @param {string} props.title 
 * @param {string} props.keyName
 * @param {Array<{ value: string, name: string }>} props.dataSet
 */
const SelectorComponent = (props) => {

 const { addSearchParameter } = useContext(SearchContext);

 useEffect(() => {
  addSearchParameter(
   props.keyName,
   props.dataSet[0].value
  );
 }, []);

 const onChange = (event) => {
  const value = event.target.value;
  addSearchParameter(props.keyName, value);
 };

 return (
  <div className='selector-wrapper'>
   {props.title}:
   <select onChange={onChange}>
    {
     props.dataSet.map(el => {
      return (<option value={el.value}>{el.name}</option>);
     })
    }
   </select>
  </div>
 );
};

export default SelectorComponent;