import {default as ImportText} from ".."

export default {
  title: "components/Text",
  component: ImportText,
};

export const Text = (args: any) => {
  return (<ImportText small={args.small}>{args.text}</ImportText>)
}

Text.args = {
  text: 'Text Component',
  small: false
};


