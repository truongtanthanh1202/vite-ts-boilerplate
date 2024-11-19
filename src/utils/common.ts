/* eslint-disable no-param-reassign */
import { isNumber } from 'lodash';
import JSONbig from 'json-bigint';

export const jsonDecode = (str: any) => {
  try {
    // return JSON.parse(str);
    return JSONbig({ storeAsString: true }).parse(str);
  } catch (error) {
    return null;
  }
};

export const jsonEncode = (data: any) => {
  try {
    // return JSON.stringify(data);

    return JSONbig({ storeAsString: true }).stringify(data);
  } catch (error) {
    return null;
  }
};

export const asciify = (sstr, force = false) => {
  let str = sstr;
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  if (!force) return str;
  str = str.replace(/[^\w ]/g, ''); // remove all special character
  str = str.replace(/ +/g, ' '); // remove duplicate space to single
  return str;
};

export const formatMoney = (num, { separator = ',', fraction = '.', defaultReturn = null } = {}) => {
  const formatedNum = parseFloat(num);

  if (!isNumber(formatedNum)) {
    return defaultReturn || num;
  }

  return formatedNum.toLocaleString('en-US').replace(/\./, fraction).replace(/,/g, separator);
};

export const parserMoney = (val: any) => {
  if (!val) {
    return 0;
  }

  // eslint-disable-next-line no-useless-escape
  return val.replace(/[^\d\.]/g, '').replace(/\..*/, '');
};

export const delayGet = async (fn) => {
  return new Promise((rel) => {
    setTimeout(() => {
      rel(fn());
    }, 50);
  });
};

export const formatterMoneyInput = (val: any) => {
  if (!val) {
    return val;
  }

  return formatMoney(val);
};

export const parserMoneyInput = (val: any) => {
  return val.replace(/\$\s?|(,*)/g, '');
};

export const parserPercentInput = (val: any) => {
  val = val.replace(/\$\s?|(,*)/g, '');
  val = val.replace(/-/g, '');

  return val;
};

export const sleep = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
