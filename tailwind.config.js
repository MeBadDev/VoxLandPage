import catppuccin from "@catppuccin/tailwindcss";

export const content = ["**/*.{html,ts}"];
export const theme = {
  extend: {},
};
export const plugins = [
  catppuccin({
    prefix: "ctp",
    defaultFlavour: "latte"
  })
];
