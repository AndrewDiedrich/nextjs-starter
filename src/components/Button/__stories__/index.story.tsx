import {default as ImportButton} from "../"

export default {
  title: "components/Button",
  component: ImportButton,
};

export const Button = (args: any) => {

  return (<ImportButton bordered={args.bordered} disabled={args.disabled}>{args.label}</ImportButton>)
}

Button.args = {
  label: 'Button',
  bordered: false,
  disabled: false
};


