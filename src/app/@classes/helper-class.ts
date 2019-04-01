import {config} from '../@models/app-settings';

/**
 * @author cristian stiven p <styven21121@gmail.com>
 */
export class Helper {

  static route(values: any, params: any = null): string {
    let url = config.api;

    if (Array.isArray(values)) {
      values.forEach((value, index) => {

        if (params[index]) {
          url += `/${value}/${params[index]}`;

        } else if (params !== null) {

          if (index === 0) {
            url += `/${value}/${params}`;

          } else {
            url += `/${value}`;

          }
        } else {
          url += `/${value}`;

        }
      });
    } else {
      if (!params) {
        url += `/${values}`;
      } else {
        url += `/${values}/${params}`;
      }
    }
    return url;
  }

  static formDataFromArray(data: any[]): any[] {
    const formDataArr = [];
    data.forEach(value => {
      const item = Helper.formData(value);
      formDataArr.push(item);
    });
    return formDataArr;
  }

  static formData(data: {}): any {
    const formData = new FormData();
    for (const key in data) {
      if (key === 'anexo') {
        formData.append(key, data[key]);
        const file = data['anexo'];
        data['anexo'] = formData;
      }
    }
    return data;
  }
}
