import { cloneDeep } from "lodash"

export function deepCopy(data:any) {
    return cloneDeep(data)
}