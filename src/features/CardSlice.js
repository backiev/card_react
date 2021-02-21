import { createSlice } from '@reduxjs/toolkit';

const newReducerWrapper = (items, defaultValue, values) => {
  let index = undefined;
  
  Object.keys(values).map(item => {
    const payload = items.payload[item];
    values[item].animate = false;

    if (values[item].value !== payload && payload) {
      values[item].value = payload;
      index = item;
    } else if (!payload) {
      values[item].value = defaultValue;
    }

  });

  if (index) {
    values[index].animate = true;
  }
  index = undefined;
}

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card: {
      num: {
        0: {
          value: '#',
          animate: false
        },
        1: {
          value: '#',
          animate: false
        },
        2: {
          value: '#',
          animate: false
        },
        3: {
          value: '#',
          animate: false
        },
        4: {
          value: '#',
          animate: false
        },
        5: {
          value: '#',
          animate: false
        },
        6: {
          value: '#',
          animate: false
        },
        7: {
          value: '#',
          animate: false
        },
        8: {
          value: '#',
          animate: false
        },
        9: {
          value: '#',
          animate: false
        },
        10: {
          value: '#',
          animate: false
        },
        11: {
          value: '#',
          animate: false
        },
        12: {
          value: '#',
          animate: false
        },
        13: {
          value: '#',
          animate: false
        },
        14: {
          value: '#',
          animate: false
        },
        15: {
          value: '#',
          animate: false
        }
      },
      name: {
        0: {
          value: 'M',
          animate: false
        },
        1: {
          value: 'a',
          animate: false
        },
        2: {
          value: 's',
          animate: false
        },
        3: {
          value: 't',
          animate: false
        },
        4: {
          value: 'a',
          animate: false
        },
        5: {
          value: 'k',
          animate: false
        },
        6: {
          value: '',
          animate: false
        },
        7: {
          value: '',
          animate: false
        },
        8: {
          value: '',
          animate: false
        },
        9: {
          value: '',
          animate: false
        },
        10: {
          value: '',
          animate: false
        },
        11: {
          value: '',
          animate: false
        },
        12: {
          value: '',
          animate: false
        },
        13: {
          value: '',
          animate: false
        },
        14: {
          value: '',
          animate: false
        },
        15: {
          value: '',
          animate: false
        }
      },
      cvv: {
        0: {
          value: 1,
          animate: false
        },
        1: {
          value: 2,
          animate: false
        },
        2: {
          value: 3,
          animate: false
        }
      },
      date: {
        day: {
          value: '18',
          animate: false
        }, 
        month: {
          value: '02',
          animate: false
        }
      }
    }
  },
  reducers: {
    newNum: (state, items) => {
      newReducerWrapper(items, '#', state.card.num);
    },
    newName: (state, items) => {
      newReducerWrapper(items, '', state.card.name);
    },
    newCvv: (state, items) => {
      newReducerWrapper(items, '', state.card.cvv);
    },
    newDate: (state, items) => {
      const date = state.card.date;
      const month = items.payload[0];
      const day = items.payload[1];
      date.day.animate = false;
      date.month.animate = false;
      // console.log(items.payload.day)
      if (parseInt(date.day.value) !== day && day) {
        // console.log(123)
        date.day.value = day;
        date.day.animate = true;
      }

      if (parseInt(date.month.value) !== month && month) {
        date.month.value = month;
        date.month.animate = true;
      }
    }
  },
});

export const { newNum, newName, newCvv, newDate } = cardSlice.actions;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectNum = state => state.card.card.num;
export const selectName = state => state.card.card.name;
export const selectCvv = state => state.card.card.cvv;
export const selectDate = state => state.card.card.date;


export default cardSlice.reducer;
