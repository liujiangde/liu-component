


// antd 源码 将其断言成一个常量
// const ButtonTypes = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'] as const;
// export type ButtonType = typeof ButtonTypes[number];

export type ButtonType =  'default' | 'primary'| 'ghost'| 'dashed'| 'link'| 'text'

export type ButtonShape = 'default' | 'circle' | 'round';

export type ButtonHTMLType = 'submit'| 'button'| 'reset';

export type SizeType = 'small' | 'middle' | 'large' | undefined;
