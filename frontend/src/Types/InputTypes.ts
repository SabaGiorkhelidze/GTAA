export interface CustomInputPropTypes {
  width: string | number;
  variant: string;
  placeholder: string;
  onChange: () => void;
}

export interface CustomDateInputPropTypes {
  width: string | number;
  onChange: () => void;
}

export interface TextAreaPropTypes {
  placeholder: string;
  onChange?: () => void;
  size: string;
}
