export const keyboardCharacters = [
  [
    {
      key: "~",
      disabled: true,
      width: 1,
    },
    {
      key: "1",
      disabled: false,
      width: 1,
    },
    {
      key: "2",
      disabled: false,
      width: 1,
    },
    {
      key: "3",
      disabled: false,
      width: 1,
    },
    {
      key: "4",
      disabled: false,
      width: 1,
    },
    {
      key: "5",
      disabled: false,
      width: 1,
    },
    {
      key: "6",
      disabled: false,
      width: 1,
    },
    {
      key: "7",
      disabled: false,
      width: 1,
    },
    {
      key: "8",
      disabled: false,
      width: 1,
    },
    {
      key: "9",
      disabled: false,
      width: 1,
    },
    {
      key: "0",
      disabled: false,
      width: 1,
    },
    {
      key: "-",
      disabled: true,
      width: 1,
    },
    {
      key: "=",
      disabled: true,
      width: 1,
    },
    {
      key: "Backspace",
      disabled: true,
      width: 2,
    },
  ],
  [
    {
      key: "Tab",
      disabled: true,
      width: 1.5,
    },
    {
      key: "q",
      disabled: false,
      width: 1,
    },
    {
      key: "w",
      disabled: false,
      width: 1,
    },
    {
      key: "e",
      disabled: false,
      width: 1,
    },
    {
      key: "r",
      disabled: false,
      width: 1,
    },
    {
      key: "t",
      disabled: false,
      width: 1,
    },
    {
      key: "y",
      disabled: false,
      width: 1,
    },
    {
      key: "u",
      disabled: false,
      width: 1,
    },
    {
      key: "i",
      disabled: false,
      width: 1,
    },
    {
      key: "o",
      disabled: false,
      width: 1,
    },
    {
      key: "p",
      disabled: false,
      width: 1,
    },
    {
      key: "[",
      disabled: true,
      width: 1,
    },
    {
      key: "]",
      disabled: true,
      width: 1,
    },
    {
      key: "\\",
      disabled: true,
      width: 1,
    },
  ],
  [
    {
      key: "Caps Lock",
      disabled: true,
      width: 2,
    },
    {
      key: "a",
      disabled: false,
      width: 1,
    },
    {
      key: "s",
      disabled: false,
      width: 1,
    },
    {
      key: "d",
      disabled: false,
      width: 1,
    },
    {
      key: "f",
      disabled: false,
      width: 1,
    },
    {
      key: "g",
      disabled: false,
      width: 1,
    },
    {
      key: "h",
      disabled: false,
      width: 1,
    },
    {
      key: "j",
      disabled: false,
      width: 1,
    },
    {
      key: "k",
      disabled: false,
      width: 1,
    },
    {
      key: "l",
      disabled: false,
      width: 1,
    },
    {
      key: ";",
      disabled: true,
      width: 1,
    },
    {
      key: "'",
      disabled: true,
      width: 1,
    },
    {
      key: "Enter",
      disabled: true,
      width: 2,
    },
  ],
  [
    {
      key: "Shift",
      disabled: true,
      width: 2.5,
    },
    {
      key: "z",
      disabled: false,
      width: 1,
    },
    {
      key: "x",
      disabled: false,
      width: 1,
    },
    {
      key: "c",
      disabled: false,
      width: 1,
    },
    {
      key: "v",
      disabled: false,
      width: 1,
    },
    {
      key: "b",
      disabled: false,
      width: 1,
    },
    {
      key: "n",
      disabled: false,
      width: 1,
    },
    {
      key: "m",
      disabled: false,
      width: 1,
    },
    {
      key: ",",
      disabled: true,
      width: 1,
    },
    {
      key: ".",
      disabled: true,
      width: 1,
    },
    {
      key: "/",
      disabled: true,
      width: 1,
    },
    {
      key: "Shift",
      disabled: true,
      width: 2.5,
    },
  ],
  [
    {
      key: "Ctrl",
      disabled: true,
      width: 1,
    },
    {
      key: "Fn",
      disabled: true,
      width: 1,
    },
    {
      key: "Win",
      disabled: true,
      width: 1,
    },
    {
      key: "Alt",
      disabled: true,
      width: 1,
    },
    {
      key: " ",
      disabled: true,
      width: 8,
    },
    {
      key: "Alt",
      disabled: true,
      width: 1,
    },
    {
      key: "Ctrl",
      disabled: true,
      width: 1,
    },
  ],
];

export const enabledKeys = keyboardCharacters
  .flat()
  .filter((key) => !key.disabled)
  .map((key) => key.key);

export const getRandomEnabledKey = () => {
  return enabledKeys[Math.floor(Math.random() * enabledKeys.length)];
};
