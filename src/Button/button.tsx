import React from "react";
import { ButtonType,ButtonShape, ButtonHTMLType,SizeType } from "./buttonHelper";
export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}

// export type ButtonProps = Partial< AnchorButtonProps & NativeButtonProps>

const InternalButton: React.ForwardRefRenderFunction<HTMLButtonElement | HTMLAnchorElement,BaseButtonProps > = (props,ref) => {
  const {
    loading = false,
    // prefixCls: customizePrefixCls,
    type = 'default',
    danger,
    shape = 'default',
    size: customizeSize,
    disabled: customDisabled,
    className,
    rootClassName,
    children,
    icon,
    ghost = false,
    block = false,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType = 'button',
    ...rest
  } = props;
  let buttonNode = (
    <button

    >

    </button>
  )
  return  buttonNode
}
/**
 * @description
 * 先实现一个最近基本的点击效果
 * loading效果
 * 固定位置
 */
const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, BaseButtonProps>(InternalButton,)
export default Button;
