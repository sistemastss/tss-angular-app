export interface SubMenu {
  route: string;
  title: string;
  icon: string;
}

export interface Menu {
  route: string;
  title: string;
  icon: string;
  color: string;
  subMenu: object[];
}

/**
 * servicios table definitions
 */
export interface DataTable {
  headers: string[];
  rows: Row[];
}

interface Row {
  columns: Column[];
}

interface Column {
  fieldTitle: string;
  fieldType: string;
  inputType?: string;
  placeholder?: string;
  content?: any;
  buttons?: object[];
}

/**
 *
 */

export enum Type { date, text, buttons }
