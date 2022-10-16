import moment from 'moment';
export const GENDER_OPTIONS = [
  {
    id: 1,
    value: 'Male',
    label: 'Male',
  },
  {
    id: 2,
    value: 'Female',
    label: 'Female',
  },
  {
    id: 3,
    value: 'Other',
    label: 'Other',
  },
];

export const LOAN_DURATION = [
  {
    id: 1,
    label: '1 Week',
    value: moment().add(7, 'd'),
  },
  {
    id: 2,
    label: '1 Month',
    value: moment().add(1, 'M'),
  },
  {
    id: 3,
    label: '3 Month',
    value: moment().add(3, 'M'),
  },
  {
    id: 4,
    label: '6 Month',
    value: moment().add(6, 'M'),
  },
];
