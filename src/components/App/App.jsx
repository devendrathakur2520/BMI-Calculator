import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import BmiForm from '../BmiForm/BmiForm';
import Info from '../Info/Info';
import Bar from '../Bar/Bar';
import { getData, storeData } from '../../helpers/localStorage';
import { useSelector, useDispatch } from 'react-redux';
//import {setData} from '../../reducers/setData';
import { setData, setStoreData } from '../../action';
const App = () => {
  // const initialState = () => getData('data') || [];
  // const [state, setState] = useState(initialState);
  // const [data, setData] = useState({});
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.setAllData.setLocalData)
  const newD = useSelector((state) => state.setAllData.setData)
  console.log("dsfdsf", Data)
  useEffect(() => {
    // storeData('data', state);
    // const date = state.map(obj => obj.date);
    // const bmi = state.map(obj => obj.bmi);
    // let newData = { date, bmi };
    // setData(newData);
    storeData('data', Data);
    const date = Data.map(obj => obj.date);
    const bmi = Data.map(obj => obj.bmi);
    let newData = { date, bmi };
    dispatch(setStoreData(newData))
  }, [Data])

  const handleChange = val => {
    let heightInM = val.height / 100;
    val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2);
    val.id = uuidv4();
    let newVal = [...Data, val];
    let len = newVal.length;
    if (len > 7) newVal = newVal.slice(1, len);
    //setState(newVal);
    dispatch(setData(newVal))
  };

  const handleDelete = id => {
    // storeData('lastState', state);
    storeData('lastState', Data);
    let newState = Data.filter(i => {
      return i.id !== id;
    });
    //setState(newState);
    dispatch(setData(newState))
  };

  const handleUndo = () => {
    //setState(getData('lastState'));
    dispatch(setData(getData('lastState')))
  };

  return (
    <div className='container'>
      <div className='row center'>
        <h1 className='white-text'> BMI Tracker </h1>
      </div>
      <div className='row'>
        <div className='col m12 s12'>
          <BmiForm change={handleChange} />
          <Bar labelData={newD.date} bmiData={newD.bmi} />
          <div>
            <div className='row center'>
              <h4 className='white-text'>7 Day Data</h4>
            </div>
            <div className='data-container row'>
              {Data.length > 0 ? (
                <>
                  {Data.map(info => (
                    <Info
                      key={info.id}
                      id={info.id}
                      weight={info.weight}
                      height={info.height}
                      date={info.date}
                      bmi={info.bmi}
                      deleteCard={handleDelete}
                    />
                  ))}
                </>
              ) : (
                <div className='center white-text'>No log found</div>
              )}
            </div>
          </div>
          {getData('lastState') !== null ? (
            <div className='center'>
              <button className='calculate-btn' onClick={handleUndo}>
                Undo
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
