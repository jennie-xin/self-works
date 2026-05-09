import type { FontOptions, FontSizeOptions, WidthOptions } from "@/types";

/**
 * 字体大小选项
 */
export const fontSizeOptions: FontSizeOptions[] = [
  { label: '紧凑', value: 'compact' },
  { label: '默认', value: 'default' },
  { label: '宽松', value: 'comfortable' },
];

/**
 * 宽度选项
 */
export const widthOptions: WidthOptions[] = [
  { label: '紧凑', value: 'narrow' },
  { label: '默认', value: 'default' },
  { label: '宽松', value: 'wide' },
];

/**
 * 字体选项
 */
export const fontOptions: FontOptions[] = [
  { label: '圆滑', value: 'round' },
  { label: '等宽', value: 'mono' },
  { label: '衬线', value: 'serif' },
  { label: '默认', value: 'default' },
];