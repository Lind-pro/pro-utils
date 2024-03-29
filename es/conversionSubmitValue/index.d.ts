import type { NamePath } from 'antd/lib/form/interface';
import type { ProFieldValueType } from '../typing';
declare type DateFormatter = 'number' | 'string' | false;
export declare function isPlainObject(o: {
    constructor: any;
}): boolean;
/**
 * 这里主要是来转化一下数据 将 moment 转化为 string 将 all 默认删除
 *
 * @param value
 * @param dateFormatter
 * @param proColumnsMap
 */
declare const conversionSubmitValue: <T = any>(value: T, dateFormatter: DateFormatter, valueTypeMap: Record<string, {
    valueType: ProFieldValueType;
    dateFormat: string;
} | any>, omitNil?: boolean | undefined, parentKey?: NamePath | undefined) => T;
export default conversionSubmitValue;
