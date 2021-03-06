import { IFormControl } from "./model/FormControl"
import { FormEntryType, CloRequestElement } from "./model/CloRequestElement"

export function deepCopy<T>(ob: T): T {
    return JSON.parse(JSON.stringify(ob))
}

const NUMBER_REGEX = /[1-9]+[0-9]*/ // regex specifying integer values
const NUMBER_INPUT_ERROR = "please enter a number"

const DATE_REGEX = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/ // regex specifying mm/dd/yyyy date format
const DATE_INPUT_ERROR = "please enter a date: mm/dd/yyyy"

export function validateFormControl(formControl: IFormControl, value: FormEntryType): string {
    if (formControl.type === "number" && !NUMBER_REGEX.test(value as string)) {
        return NUMBER_INPUT_ERROR
    }

    if (formControl.type === "datetime" && !DATE_REGEX.test(value as string)) {
        return DATE_INPUT_ERROR
    }
}

export function getQueryStringParameter(paramToRetrieve: string) {
    const urlContainsParams = document.URL.includes("?")

    if(urlContainsParams) {
        const params = document.URL.split("?")[1].split("&")
        for (const param of params) {
            const paramComponents = param.split("=")
            const paramName = paramComponents[0]
            const paramVal = paramComponents[1]
            if(paramName === paramToRetrieve) {
                return decodeURIComponent(paramVal)
            }
        }
        throw new Error(`parameter ${paramToRetrieve} is not present in the current URL`)
    } else {
        throw new Error(`tried to get query string parameter from a URL that does not have query strings`)
    }

}

export function isObjectEmpty(ob: {}): boolean {
    for(const key in ob) {
        if(ob.hasOwnProperty(key) && ob[key]) return false
    }
    return true
}

export function getFormattedDate() {
    const date = new Date()
    return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
}
