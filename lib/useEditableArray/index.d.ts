import React from 'react';
import type { GetRowKey } from 'antd/lib/table/interface';
import type { FormInstance } from 'antd';
export declare type RowEditableType = 'single' | 'multiple';
export declare type RecordKey = React.Key | React.Key[];
export declare const recordKeyToString: (rowKey: RecordKey) => React.Key;
export declare type AddLineOptions = {
    position?: 'top' | 'bottom';
    recordKey?: RecordKey;
    newRecordType?: 'dataSource' | 'cache';
};
export declare type NewLineConfig<T> = {
    defaultValue: T | undefined;
    options: AddLineOptions;
};
export declare type ActionRenderFunction<T> = (row: T, config: ActionRenderConfig<T, NewLineConfig<T>>, defaultDoms: {
    save: React.ReactNode;
    delete: React.ReactNode;
    cancel: React.ReactNode;
}) => React.ReactNode[];
export declare type RowEditableConfig<T> = {
    /** @name 控制可编辑表格的 form */
    form?: FormInstance;
    /**
     * @type single | multiple
     * @name 编辑的类型，支持单选和多选
     */
    type?: RowEditableType;
    /** @name 正在编辑的列 */
    editableKeys?: React.Key[];
    /** 正在编辑的列修改的时候 */
    onChange?: (editableKeys: React.Key[], editableRows: T[] | T) => void;
    /** 正在编辑的列修改的时候 */
    onValuesChange?: (record: T, dataSource: T[]) => void;
    /** @name 自定义编辑的操作 */
    actionRender?: ActionRenderFunction<T>;
    /** 行保存的时候 */
    onSave?: (
    /** 行 id，一般是唯一id */
    key: RecordKey, 
    /** 当前修改的行的值，只有 form 在内的会被设置 */
    record: T & {
        index?: number;
    }, 
    /** 原始值，可以用于判断是否修改 */
    originRow: T & {
        index?: number;
    }, 
    /** 新建一行的配置，一般无用 */
    newLineConfig?: NewLineConfig<T>) => Promise<any | void>;
    /** 行保存的时候 */
    onCancel?: (
    /** 行 id，一般是唯一id */
    key: RecordKey, 
    /** 当前修改的行的值，只有 form 在内的会被设置 */
    record: T & {
        index?: number;
    }, 
    /** 原始值，可以用于判断是否修改 */
    originRow: T & {
        index?: number;
    }, 
    /** 新建一行的配置，一般无用 */
    newLineConfig?: NewLineConfig<T>) => Promise<any | void>;
    /** 行删除的时候 */
    onDelete?: (key: RecordKey, row: T & {
        index?: number;
    }) => Promise<any | void>;
    /** 删除行时的确认消息 */
    deletePopconfirmMessage?: React.ReactNode;
    /** 只能编辑一行的的提示 */
    onlyOneLineEditorAlertMessage?: React.ReactNode;
    /** 同时只能新增一行的提示 */
    onlyAddOneLineAlertMessage?: React.ReactNode;
};
export declare type ActionTypeText<T> = {
    deleteText?: React.ReactNode;
    cancelText?: React.ReactNode;
    saveText?: React.ReactNode;
    editorType?: 'Array' | 'Map';
    addEditRecord?: (row: T, options?: AddLineOptions) => boolean;
};
export declare type ActionRenderConfig<T, LineConfig = NewLineConfig<T>> = {
    editableKeys?: RowEditableConfig<T>['editableKeys'];
    recordKey: RecordKey;
    index?: number;
    form: FormInstance<any>;
    cancelEditable: (key: RecordKey) => void;
    onSave: RowEditableConfig<T>['onSave'];
    onCancel: RowEditableConfig<T>['onCancel'];
    onDelete?: RowEditableConfig<T>['onDelete'];
    deletePopconfirmMessage: RowEditableConfig<T>['deletePopconfirmMessage'];
    setEditableRowKeys: (value: React.Key[]) => void;
    newLineConfig?: LineConfig;
} & ActionTypeText<T>;
/**
 * 保存按钮的dom
 *
 * @param ActionRenderConfig
 */
export declare function SaveEditableAction<T>({ recordKey, onSave, form, row, children, newLineConfig, editorType, }: ActionRenderConfig<T> & {
    row: any;
    children: any;
}): JSX.Element;
/**
 * 删除按钮 dom
 *
 * @param ActionRenderConfig
 */
export declare const DeleteEditableAction: React.FC<ActionRenderConfig<any> & {
    row: any;
}>;
export declare function defaultActionRender<T extends Record<string, any>>(row: T, config: ActionRenderConfig<T, NewLineConfig<T>>): (JSX.Element | null)[];
/**
 * 一个方便的hooks 用于维护编辑的状态
 *
 * @param props
 */
declare function useEditableArray<RecordType>(props: RowEditableConfig<RecordType> & {
    getRowKey: GetRowKey<RecordType>;
    dataSource: RecordType[];
    onValuesChange?: (record: RecordType, dataSource: RecordType[]) => void;
    childrenColumnName: string | undefined;
    setDataSource: (dataSource: RecordType[]) => void;
}): {
    editableKeys: React.Key[];
    setEditableRowKeys: (value: React.Key[]) => void;
    isEditable: (row: RecordType & {
        index: number;
    }) => {
        recordKey: React.Key;
        isEditable: boolean;
        preIsEditable: boolean | undefined;
    };
    actionRender: (row: RecordType & {
        index: number;
    }, form: FormInstance<any>) => React.ReactNode[];
    startEditable: (recordKey: React.Key) => boolean;
    cancelEditable: (recordKey: RecordKey) => boolean;
    addEditRecord: (row: RecordType, options?: AddLineOptions | undefined) => boolean;
    newLineRecord: NewLineConfig<RecordType> | undefined;
    preEditableKeys: React.Key[] | undefined;
    onValuesChange: (value: RecordType, values: RecordType) => void;
};
export declare type UseEditableType = typeof useEditableArray;
export declare type UseEditableUtilType = ReturnType<UseEditableType>;
export default useEditableArray;
