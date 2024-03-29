/// <reference types="react" />
export declare type ProRequestData<T, U = Record<string, any>> = (params: U, props: any) => Promise<T>;
declare function useFetchData<T, U extends Record<string, any> = Record<string, any>>(props: {
    proFieldKey?: React.Key;
    params?: U;
    request?: ProRequestData<T, U>;
}): [T, () => void];
export default useFetchData;
