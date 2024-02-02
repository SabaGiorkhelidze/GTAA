export interface CustomInputPropTypes {
  width: string | number;
  variant: string;
  placeholder: string;
}

export interface CustomDateInputPropTypes {
  width: string | number;
}

export interface TextAreaPropTypes {
  placeholder: string;
  onChange?: () => void;
  size: string;
}
