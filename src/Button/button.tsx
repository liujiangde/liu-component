import React, { FC } from "react";


// export type ButtonProps = Partial<>

// const InternalButton: React.ForwardRefRenderFunction<HTMLButtonElement | HTMLAnchorElement,ButtonProps > = () => {
//   return
// }
/**
 * @description
 * 先实现一个最近基本的点击效果
 * loading效果
 * 固定位置
 */
// const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(InternalButton,)
const Button: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;
export default Button;
