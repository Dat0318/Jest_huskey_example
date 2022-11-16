// Example let rules = [
// {
//     key: 'username',
//     value: username ? username : '',
//     rules: 'required|min_length[3]',
//     label: 'Username',
//   },
//   {
//     key: 'password',
//     value: password ? password : '',
//     rules: 'required|min_length[6]|max_length[32]',
//     label: 'Password',
//   },
// ];
// listErrors = validateForm(rules);
import { default as I18n } from './i18n';
interface Rule {
  key: string;
  value: any;
  rules: string;
  label: string;
}

interface Errors {
  key?: string;
  value?: string;
}

export function validateTrim(val: any) {
  if (Object.keys(val).length > 0) {
    for (const property in val) {
      if (Object.prototype.hasOwnProperty.call(val, property)) {
        val[property] = val[property]?.trim();
      }
    }
    return val;
  } else {
    return val?.trim();
  }
}

export function validateForm(rules: Rule[]) {
  let errors: any = {};
  rules.map((val: Rule) => {
    errors[val.key] = validateItem(val.value, val.rules, val.label);
  });
  cleanObject(errors);
  return errors;
}

export function validateItem(value: any, rules: string, label: string) {
  if (rules.length > 0) {
    let arrExp = rules.split('|');

    let error: string | true = '';
    for (var i = 0; i < arrExp.length; i++) {
      let elm, params, key, vParam;
      // tách phần tử để lấy tham số truyền vào
      elm = arrExp[i].split('[');
      if (elm.length > 1) {
        params = elm[1].split(']');
        vParam = params[0];
      }
      key = elm[0];
      switch (key) {
        case 'required':
          error = checkEmpty(value, label);
          break;
        case 'min_length':
          error = minLength(value, vParam, label);
          break;
        case 'max_length':
          error = maxLength(value, vParam, label);
          break;
        case 'email':
          error = checkMail(value, label);
          break;
        case 'phone':
          error = checkPhone(value, label);
          break;
        case 'match':
          error = checkConfirmPassword(value, vParam, label);
          break;
        case 'mustNumber':
          error = checkNumber(value, label);
          break;
        case 'mustSpecial':
          error = checkSpecial(value, label);
          break;
        case 'image':
          error = checkImage(value, label);
          break;
        case 'allNumber':
          error = checkAllNumber(value, label);
          break;
        default:
          break;
      }
      if (error !== true) break;
    }
    return error;
  }
  return;
}

export function checkEmpty(val: any, label: string) {
  let tempVal = val?.trim();
  if (val === '') {
    let name = I18n.trans('error.fieldRequired', { label: label });
    // let name = 'The ' + label + ' field is required.';
    return name;
  }
  if (label === 'password' || label === 'password confirmation') {
    if (tempVal.length !== val.length) {
      let name = I18n.trans('error.fieldRequired', { label: label });
      return name;
    }
  }

  return true;
}
export function minLength(val: any, length: string | undefined, label: string) {
  if (val != '' && val.length < Number(length)) {
    let name = I18n.trans('error.minLength', { label: label, length: length });
    // let name = 'The ' + label + ' must be at least ' + length + ' characters';
    return name;
  }
  return true;
}

export function maxLength(val: any, length: string | undefined, label: string) {
  if (val !== '' && val.length > Number(length)) {
    let name = I18n.trans('error.maxLength', { label: label, length: length });
    // let name =  'The ' + label + ' may not be greater than ' + length + ' characters';
    return name;
  }
  return true;
}

export function checkConfirmPassword(value: any, check_value: string | any, label: string) {
  if (value !== '' && check_value !== '' && value?.trim() !== check_value?.trim()) {
    let name = I18n.trans('error.passwordNotMatch');
    // let name = 'The password and retype password do not match.';
    return name;
  }
  return true;
}
export function checkMail(val: any, label: string) {
  if (val !== '') {
    let regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let is_email = regex.test(val?.trim());
    if (!is_email) {
      let name = I18n.trans('error.emailValid', { email: label });
      // let name = 'The ' + label + ' must be a valid email address.';
      return name;
    }
  }

  return true;
}
export function checkPhone(val: any, label: string) {
  // phone 9 numbers
  if (val !== '') {
    let regex = /((09|03|07|08|05)+([0-9]{8})\b)/;
    let is_phone = regex.test(val);
    if (!is_phone) {
      let name = label + ' malformed!';
      return name;
    }
  }
  return true;
}

export function checkNumber(val: any, label: string) {
  if (val !== '') {
    let regex = /\d/g;
    let is_phone = regex.test(val);
    if (!is_phone) {
      let name = I18n.trans('error.numberValid');
      // let name = 'The field must be a number.';
      return name;
    }
  }
  return true;
}

export function checkSpecial(val: any, label: string) {
  if (val !== '') {
    let regex = /\W/g;
    let is_phone = regex.test(val);
    if (!is_phone) {
      let name = label + ' must have special character!';
      return name;
    }
  }
  return true;
}

export function checkAllNumber(val: any, label: string) {
  if (val !== '') {
    let regex = /^[0-9\s]+$/;
    let is_phone = regex.test(val);
    if (!is_phone) {
      let name = label + ' must include all number!!';
      return name;
    }
  }
  return true;
}

export function checkImage(val: any, label: string) {
  if (val !== '') {
    let regex = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
    let is_image = regex.test(val);
    if (!is_image) {
      let name = I18n.trans('error.imageValid', { label: label });
      // let name ='The ' + label + ' incorrect format! include .png, .jpg, .jpeg type.';
      return name;
    }
  }
  return true;
}
export function checkImageFile(val: any, size: number | string, label: string) {
  if (Number(size) / (2048 * 1024) > 2) {
    let name = I18n.trans('error.imageFileSize', { label: label });
    // let name ='The' + label + ' must less than 2MB.';
    return name;
  }
  return true;
}

export function cleanObject(obj: any) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === true) {
      delete obj[propName];
    }
  }
  return obj;
}
